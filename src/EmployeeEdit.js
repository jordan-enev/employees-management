import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './config';

function EmployeeEdit() {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchEmployee() {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/employee/${id}`);
      const employee = await response.json();

      setEmployee(employee);
      setIsLoading(false);
    }

    fetchEmployee();
  }, []);

  if (isLoading) return <span>Loading ...</span>;

  return (
    <ul>
      {employee.employee_name}
    </ul>
  );
}

export default EmployeeEdit;
