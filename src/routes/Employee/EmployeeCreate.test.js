import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { API_URL } from '../../config';
import '@testing-library/jest-dom/extend-expect';
import EmployeeCreate from './EmployeeCreate';

it('creates an employee', async () => {
  const spy = jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  })

  const { getByTestId } = render(<EmployeeCreate />)

  const container = getByTestId('form');
  const nameSelector = container.querySelector('[name="employee_name"]');
  const ageSelector = container.querySelector('[name="employee_age"]');
  const salarySelector = container.querySelector('[name="employee_salary"]');

  fireEvent.change(nameSelector, { target: { value: 'Jordan Enev' } });
  fireEvent.change(ageSelector, { target: { value: '18' } });
  fireEvent.change(salarySelector, { target: { value: '1000' } });
  fireEvent.submit(container);

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));

  expect(spy).toHaveBeenCalledWith(
    `${API_URL}/employee`,
    expect.objectContaining({
      body: JSON.stringify({
        employee_name: 'Jordan Enev',
        employee_age: '18',
        employee_salary: '1000',
      })
    })
  );

  // remove the mock to ensure tests are completely isolated
  window.fetch.mockRestore();
})