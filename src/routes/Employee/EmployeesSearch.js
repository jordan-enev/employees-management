import React, { useContext } from 'react';
import { DispatchContext } from './EmployeesView';

function EmployeesSearch() {
  const dispatch = useContext(DispatchContext);

  function filterEmployees(e) {
    const searchTerm = e.target.value.toLowerCase();
    dispatch({ type: 'filter', payload: { searchTerm } })
  }

  return (
    <input type='text' onChange={filterEmployees} />
  );
}

export default EmployeesSearch;
