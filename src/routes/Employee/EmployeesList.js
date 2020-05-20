import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import { DispatchContext } from './EmployeesView';

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
    <ul>
      { employees.map(employee => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>{ employee.employee_name }</Link>
          <button onClick={() => onDelete(employee)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EmployeesList;
