import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import { handleErrors } from '../../utils/errors';
import { employeeType } from './proptypes';
import { Table, Button } from 'react-bootstrap';
import { DispatchContext } from './EmployeesView';
import Loader from '../../components/Loader';

function EmployeesList({ employees, onDelete }) {
  const dispatch = useContext(DispatchContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${API_URL}/employee`);

      if (!response.ok) return handleErrors(response);

      const employees = await response.json();

      dispatch({ type: 'receive', payload: { employees } });
      setIsLoading(false);
    }
    
    fetchEmployees();
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <Table responsive>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
        { employees.map(employee => (
          <tr key={employee.id}>
            <td>{ employee.id }</td>
            <td><Link to={`/employee/${employee.id}`}>{ employee.employee_name }</Link></td>
            <td>{ employee.employee_age }</td>
            <td>{ employee.employee_salary }</td>
            <td colSpan={2}>
              <Link to={`/employee/${employee.id}`}>
                <Button variant='outline-secondary' size='sm' className='mr-2 mb-2 mb-md-0'>Edit</Button>
              </Link>
              <Button variant='outline-danger' size='sm' className='mb-2 mb-md-0'
                onClick={() => onDelete(employee)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(employeeType),
  onDelete: PropTypes.func.isRequired
}

export default EmployeesList;
