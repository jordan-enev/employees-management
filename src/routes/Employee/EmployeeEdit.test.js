import React from 'react';
import { Router } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect';
import { API_URL } from '../../config';
import EmployeeEdit from './EmployeeEdit';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/employee/1' }),
}));

it('load and renders employee fields', async () => {
  const history = createMemoryHistory();
  const employee = { id: '1', employee_age: '18', employee_salary: '1000', employee_name: 'Jordan Enev' };

  const spy = jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(employee),
    })
  })

  const { getByTestId } = render(<Router history={history}>
    <EmployeeEdit />
  </Router>);

  await waitFor(() => expect(spy).toHaveBeenCalledWith(
    `${API_URL}/employee/1`),
  );

  const container = getByTestId('form');
  const nameSelector = container.querySelector('[name="employee_name"]');
  const ageSelector = container.querySelector('[name="employee_age"]');
  const salarySelector = container.querySelector('[name="employee_salary"]');

  expect(nameSelector).toHaveValue('Jordan Enev');
  expect(ageSelector).toHaveValue('18');
  expect(salarySelector).toHaveValue('1000');

  // remove the mock to ensure tests are completely isolated
  window.fetch.mockRestore();
})

it('updates the employee', async () => {
  const history = createMemoryHistory();
  const employee = { id: '1', employee_age: '18', employee_salary: '1000', employee_name: 'Jordan Enev' };

  const spy = jest.spyOn(window, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(employee),
    })
  })

  const { getByTestId } = render(<Router history={history}>
    <EmployeeEdit />
  </Router>);

  await waitFor(() => expect(spy).toHaveBeenCalledWith(
    `${API_URL}/employee/1`),
  );

  const container = getByTestId('form');
  const salarySelector = container.querySelector('[name="employee_salary"]');

  fireEvent.change(salarySelector, { target: { value: '2000' }});
  fireEvent.submit(container);

  await waitFor(() => expect(spy).toHaveBeenCalledWith(
    `${API_URL}/employee/1`,
    expect.objectContaining({
      body: JSON.stringify({
        employee_name: 'Jordan Enev',
        employee_age: '18',
        employee_salary: '2000',
      })
    })
  ));

  // remove the mock to ensure tests are completely isolated
  window.fetch.mockRestore();
})