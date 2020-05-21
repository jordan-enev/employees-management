import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { API_URL } from '../../config';
import { notify } from '../../utils/notifications';
import { handleErrors } from '../../utils/errors';
import { Card, Col, Row } from 'react-bootstrap';
import Loader from '../../components/Loader';
import EmployeeForm from './EmployeeForm';

function EmployeeEdit() {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  const onSubmit = async data => {
    const response = await fetch(`${API_URL}/employee/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) return handleErrors(response);

    notify({
      title: 'Success!',
      message: 'Employee is updated successfully!',
    });

    return response;
  };

  useEffect(() => {
    async function fetchEmployee() {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/employee/${id}`);

      if (!response.ok) {
        if (response.status === 404) history.push('/404');

        return handleErrors(response);
      }

      const employee = await response.json();
      setEmployee(employee);
      setIsLoading(false);
    }

    fetchEmployee();
  }, [id, history]);

  if (isLoading) return <Loader />;

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Card>
              <Card.Header as='h5'>Edit Employee</Card.Header>
              <Card.Body>
                <EmployeeForm employee={employee} onSubmit={onSubmit} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EmployeeEdit;
