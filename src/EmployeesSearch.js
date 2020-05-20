import React from 'react';

function EmployeesSearch({ employees, onSearch }) {
  function filterEmployees(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredEmployees = employees.filter(({ employee_name }) => (
      employee_name.toLowerCase().indexOf(searchTerm) > -1)
    );

    onSearch(filteredEmployees);
  }

  return (
    <input type='text' onChange={filterEmployees} />
  );
}

export default EmployeesSearch;
