import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './config';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchEmployees() {
    const response = await fetch(`${API_URL}/employee`);
    const employees = await response.json();

    setEmployees(employees);
    setIsLoading(false);
  }

  async function deleteEmployee(employee) {
    await fetch(`${API_URL}/employee/${employee.id}`, {
      method: 'DELETE'
    });

    setEmployees(employees.filter(({ id }) => id !== employee.id));
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (isLoading) return <span>Loading ...</span>;

  return (
    <ul>
      { employees.map(employee => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>{ employee.employee_name }</Link>
          <button onClick={() => deleteEmployee(employee)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EmployeesList;
