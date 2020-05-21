import React  from 'react';
import { API_URL } from '../../config';
import { Row, Col } from 'react-bootstrap';
import { notify } from '../../utils/notifications';
import EmployeeForm from './EmployeeForm'

function EmployeeCreate() {

  const onSubmit = async data => {
    const request = await fetch(`${API_URL}/employee`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    notify({
      title: 'Success!',
      message: 'Employee is created successfully!'
    });

    return request;
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
