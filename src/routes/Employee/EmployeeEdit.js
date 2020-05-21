import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import { notify } from '../../utils/notifications';
import {Card, Col, Row} from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';

function EmployeeEdit() {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const onSubmit = async data => {
    const request = await fetch(`${API_URL}/employee/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    notify({
      title: 'Success!',
      message: 'Employee is updated successfully!',
    });

    return request;
  };

  useEffect(() => {
    async function fetchEmployee() {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/employee/${id}`);
      const employee = await response.json();

      setEmployee(employee);
      setIsLoading(false);
    }

    fetchEmployee();
  }, [id]);

  if (isLoading) return <span>Loading ...</span>;

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Card>
              <Card.Header as='h5'>Edit Employee</Card.Header>
              <Card.Body>
                <Card.Text>
                  <EmployeeForm employee={employee} onSubmit={onSubmit} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EmployeeEdit;
