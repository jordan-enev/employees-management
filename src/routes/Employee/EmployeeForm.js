import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

function EmployeeForm({ employee, onSubmit }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: employee
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          ref={register({ required: true })} />
        { errors.employee_salary &&
          <Form.Text className='text-danger'>
            Salary is required.
          </Form.Text>
        }
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default EmployeeForm;
