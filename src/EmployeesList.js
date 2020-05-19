import React, { useState, useEffect } from 'react';
import { API_URL } from './config';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEmployees() {
      setIsLoading(true);

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
      { employees.map(employee => <li key={employee.id}>{ employee.employee_name }</li>) }
    </ul>
  );
}

export default EmployeesList;
