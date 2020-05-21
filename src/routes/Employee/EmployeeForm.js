import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { employeeType } from './proptypes';
import { Form, Button } from 'react-bootstrap';

function EmployeeForm({ employee, onSubmit }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: employee
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter name' name='employee_name' ref={register({ required: true })} />
        { errors.employee_name &&
          <Form.Text className='text-danger'>
            Name is required.
          </Form.Text>
        }
      </Form.Group>

      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Control type='text' placeholder='Enter age' name='employee_age'
          ref={register({ required: true, pattern: /\d+/ })} />
        { errors.employee_age &&
          <Form.Text className='text-danger'>
            Please enter number for age.
          </Form.Text>
        }
      </Form.Group>

      <Form.Group>
        <Form.Label>Salary</Form.Label>
        <Form.Control type='text' placeholder='Enter salary' name='employee_salary'
          ref={register({ required: true, pattern: /\d+/ })} />
        { errors.employee_salary &&
          <Form.Text className='text-danger'>
            Please enter number for salary.
          </Form.Text>
        }
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}
EmployeeForm.propTypes = {
  employee: employeeType,
  onSubmit: PropTypes.func.isRequired
}

export default EmployeeForm;
