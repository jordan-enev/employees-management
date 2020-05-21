import React  from 'react';
import { API_URL } from '../../config';
import { Row, Col, Card } from 'react-bootstrap';
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
        <Card>
          <Card.Header as='h5'>Create Employee</Card.Header>
          <Card.Body>
            <Card.Text>
              <EmployeeForm onSubmit={onSubmit} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default EmployeeCreate;
