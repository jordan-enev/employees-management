import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeForm from './EmployeeForm';

it('submits the form', async () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<EmployeeForm onSubmit={onSubmit} />)

  const container = getByTestId('form');
  const nameSelector = container.querySelector('[name="employee_name"]');
  const ageSelector = container.querySelector('[name="employee_age"]');
  const salarySelector = container.querySelector('[name="employee_salary"]');

  fireEvent.change(nameSelector, { target: { value: 'Jordan Enev' } });
  fireEvent.change(ageSelector, { target: { value: '18' } });
  fireEvent.change(salarySelector, { target: { value: '1000' } });
  fireEvent.submit(container);

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
})