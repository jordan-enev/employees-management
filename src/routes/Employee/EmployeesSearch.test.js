import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DispatchContext } from './EmployeesView';
import EmployeesSearch from './EmployeesSearch';

it('it dispatches an action with the chosen searching term, on input value change', async () => {
  const dispatchMock = jest.fn();

  const { getByTestId } = render(
    <DispatchContext.Provider value={dispatchMock}>
      <EmployeesSearch />
  </DispatchContext.Provider>)

  fireEvent.change(getByTestId('search'), { target: { value: 'Jordan' } });

  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenLastCalledWith({
    type: 'filter', payload: { searchTerm: 'Jordan' }
  });
})