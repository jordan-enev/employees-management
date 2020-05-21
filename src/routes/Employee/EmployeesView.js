import React, { useReducer } from 'react';
import { API_URL } from '../../config';
import { reducer, initialState } from './reducer';
import { sortASC, sortDESC } from '../../utils/sorting';
import { notify } from '../../utils/notifications';
import { handleErrors } from '../../utils/errors';
import { Row, Col } from 'react-bootstrap';
import EmployeesSearch from './EmployeesSearch';
import EmployeesSorting from './EmployeesSorting';
import EmployeesList from './EmployeesList';

export const DispatchContext = React.createContext();

function EmployeesView() {
  const [{ employees, filtered, sort }, dispatch] = useReducer(reducer, initialState);

  function getEmployees() {
    // Get the filtered employees only
    let normalized = filtered.map(id => employees.find(employee => id === employee.id ));

    // Apply sorting
    if (sort) {
      const sortingFunc = sort.direction === 'asc' ? sortASC : sortDESC;
      normalized.sort(sortingFunc(sort.field));
    }

    return normalized;
  }

  async function deleteEmployee(employee) {
    const response = await fetch(`${API_URL}/employee/${employee.id}`, {
      method: 'DELETE'
    });

    if (!response.ok) return handleErrors(response);

    notify({
      title: 'Success!',
      message: 'Employee is deleted successfully!'
    });

    dispatch({ type: 'delete', payload: employee });

    return response;
  }

  function handleDelete(employee) {
    window.confirm('Do you really want to delete the employee?') && deleteEmployee(employee);
  }

  return <DispatchContext.Provider value={dispatch}>
    <Row className='mb-4'>
      <Col xs='8'><EmployeesSearch /></Col>
      <Col xs='4'><EmployeesSorting /></Col>
    </Row>
    <Row>
      <Col>
        <EmployeesList employees={getEmployees()} onDelete={handleDelete} />
      </Col>
    </Row>
  </DispatchContext.Provider>
}

export default EmployeesView;
