import React  from 'react';
import { API_URL } from '../../config';
import { Row, Col } from 'react-bootstrap';
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
    <Row>
      <Col>
        <h4>Create Employee</h4>
        <EmployeeForm onSubmit={onSubmit} />
      </Col>
    </Row>
  );
}

export default EmployeeCreate;
