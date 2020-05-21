import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DispatchContext } from './EmployeesView';
import EmployeesSorting from './EmployeesSorting';

it('it dispatches an action with the chosen sorting criteria, on option select', async () => {
  const dispatchMock = jest.fn();

  const { getByTestId } = render(
    <DispatchContext.Provider value={dispatchMock}>
      <EmployeesSorting />
  </DispatchContext.Provider>)

  fireEvent.change(getByTestId('sort'), { target: { value: 'employee_salary.asc' } });

  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenLastCalledWith({
    type: 'sort', payload: { field: 'employee_salary', direction: 'asc' }
  });
})