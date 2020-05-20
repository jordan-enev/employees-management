import React, { useReducer } from 'react';
import { API_URL } from '../../config';
import { reducer, initialState } from './reducer';
import { sortASC, sortDESC } from '../../utils/sorting';
import EmployeesSearch from './EmployeesSearch';
import EmployeesSorting from './EmployeesSorting';
import EmployeesList from './EmployeesList';

export const DispatchContext = React.createContext();

function EmployeesView() {
  const [{ employees, filtered, sort }, dispatch] = useReducer(reducer, initialState);

  function getEmployees() {
    let normalized = filtered.map(id => employees.find(employee => id === employee.id ));

    if (sort) {
      const sortingFunc = sort.direction === 'asc' ? sortASC : sortDESC;
      normalized.sort(sortingFunc(sort.field));
    }

    return normalized;
  }

  async function deleteEmployee(employee) {
    await fetch(`${API_URL}/employee/${employee.id}`, {
      method: 'DELETE'
    });

    dispatch({ type: 'delete', payload: employee })
  }

  return <DispatchContext.Provider value={dispatch}>
    <EmployeesSearch />
    <EmployeesSorting />
    <EmployeesList employees={getEmployees()} onDelete={deleteEmployee} />
  </DispatchContext.Provider>
}

export default EmployeesView;
