import React from 'react';
import { Router } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect';
import { DispatchContext } from './EmployeesView';
import EmployeesList from './EmployeesList';

it('loads and renders employees', async () => {
  const employees = [{ id: '1', employee_age: '18', employee_salary: '1000', employee_name: 'Jordan Enev' }];
  const history = createMemoryHistory();

  const dispatchMock = jest.fn();

  const spy = jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(employees),
    })
  })

  render(<Router history={history}>
    <DispatchContext.Provider value={dispatchMock}>
      <EmployeesList employees={employees} onDelete={() => {}} />
  </DispatchContext.Provider></Router>)

  await waitFor(() => screen.getByText('Jordan Enev'));

  expect(screen.getByText('Jordan Enev')).toHaveTextContent('Jordan Enev');
  expect(spy).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenLastCalledWith({ type: 'receive', payload: { employees } });

  // remove the mock to ensure tests are completely isolated
  window.fetch.mockRestore();
})