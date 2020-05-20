import React  from 'react';
import { API_URL } from '../../config';
import EmployeeForm from './EmployeeForm'

function EmployeeCreate() {

  const onSubmit = data => {
    return fetch(`${API_URL}/employee`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <EmployeeForm onSubmit={onSubmit} />
  );
}

export default EmployeeCreate;
