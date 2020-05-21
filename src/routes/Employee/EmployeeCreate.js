import React  from 'react';
import { API_URL } from '../../config';
import { Row, Col, Card } from 'react-bootstrap';
import { notify } from '../../utils/notifications';
import { handleErrors } from '../../utils/errors';
import EmployeeForm from './EmployeeForm'

function EmployeeCreate() {

  const onSubmit = async data => {
    const response = await fetch(`${API_URL}/employee`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) return handleErrors(response);

    notify({
      title: 'Success!',
      message: 'Employee is created successfully!'
    });

    return response;
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header as='h5'>Create Employee</Card.Header>
          <Card.Body>
            <EmployeeForm onSubmit={onSubmit} shouldResetOnSubmit />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default EmployeeCreate;
