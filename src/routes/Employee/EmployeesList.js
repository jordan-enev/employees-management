import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import { DispatchContext } from './EmployeesView';
import { Table, Button } from 'react-bootstrap';

function EmployeesList({ employees, onDelete }) {
  const dispatch = useContext(DispatchContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${API_URL}/employee`);
      const employees = await response.json();

      dispatch({ type: 'receive', payload: { employees } });
      setIsLoading(false);
    }
    
    fetchEmployees();
  }, [dispatch]);

  if (isLoading) return <span>Loading ...</span>;

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
              <Link to={`/employee/${employee.id}`} className='mr-2'>
                <Button variant='outline-secondary' size='sm'>Edit</Button>
              </Link>
              <Button variant='outline-danger' size='sm' onClick={() => onDelete(employee)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeesList;
