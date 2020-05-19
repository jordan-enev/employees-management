import React from 'react';
import { useForm } from 'react-hook-form';

function EmployeeForm({ employee, onSubmit }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: employee
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='employee_name' ref={register({required: true })} />
      {errors.employee_name && 'Name is required.'}

      <input name='employee_age' ref={register({ pattern: /\d+/ })} />
      {errors.employee_age && 'Please enter number for age.'}

      <input name='employee_salary' ref={register({ required: true })} />
      {errors.employee_salary && 'Salary is required.'}

      <input type="submit" />
    </form>
  );
}

export default EmployeeForm;
