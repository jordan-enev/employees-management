import React, { useReducer } from 'react';
import { API_URL } from '../../config';
import { reducer, initialState } from './reducer';
import { sortASC, sortDESC } from '../../utils/sorting';
import { Row, Col } from 'react-bootstrap';
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
    <Row className='my-4'>
      <Col xs='8'><EmployeesSearch /></Col>
      <Col xs='4'><EmployeesSorting /></Col>
    </Row>
    <EmployeesList employees={getEmployees()} onDelete={deleteEmployee} />
  </DispatchContext.Provider>
}

export default EmployeesView;
