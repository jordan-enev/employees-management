import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './config';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${API_URL}/employee`);
      const employees = await response.json();

      setEmployees(employees);
      setIsLoading(false);
    }

    fetchEmployees();
  }, []);

  if (isLoading) return <span>Loading ...</span>;

  return (
    <ul>
      { employees.map(employee => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>{ employee.employee_name }</Link>
        </li>
      ))}
    </ul>
  );
}

export default EmployeesList;
