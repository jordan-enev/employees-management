import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './config';
import EmployeesSearch from './EmployeesSearch';
import EmployeesSorting from './EmployeesSorting';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [computedEmployees, setComputedEmployees] = useState(null);
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
    setComputedEmployees(computedEmployees.filter(({ id }) => id !== employee.id));
  }

  function getEmployees() {
    return computedEmployees || employees;
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (isLoading) return <span>Loading ...</span>;

  return <>
    <EmployeesSearch employees={employees} onSearch={setComputedEmployees} />
    <EmployeesSorting employees={getEmployees()} onSorting={setComputedEmployees} />
    <ul>
      { getEmployees().map(employee => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>{ employee.employee_name }</Link>
          <button onClick={() => deleteEmployee(employee)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
}

export default EmployeesList;
