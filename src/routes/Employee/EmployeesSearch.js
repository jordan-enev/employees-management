import React, { useContext } from 'react';
import { FormControl } from 'react-bootstrap';
import { DispatchContext } from './EmployeesView';

function EmployeesSearch() {
  const dispatch = useContext(DispatchContext);

  function filterEmployees(e) {
    const searchTerm = e.target.value;
    dispatch({ type: 'filter', payload: { searchTerm } });
  }

  return (
    <FormControl type='text' placeholder='Search by name ...' onChange={filterEmployees} data-testid='search'/>
  );
}

export default EmployeesSearch;
