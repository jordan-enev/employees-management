import React from 'react';

const sortASC = (items, field) => items.slice().sort((a, b) => a[field] - b[field]);
const sortDESC = (items, field) => items.slice().sort((a, b) => b[field] - a[field]);

function EmployeesSorting({ employees, onSorting }) {
  function sortEmployees(e) {
    const [ field, direction ] = e.target.value.split('.');
    const sortingFunc = direction === 'asc' ? sortASC : sortDESC;
    onSorting(sortingFunc(employees, field));
  }

  return <>
    <label>Sort by:</label>
    <select defaultValue='' onChange={sortEmployees}>
      <option disabled value=''>Please select</option>
      <option value='id.asc'>ID ASC</option>
      <option value='id.desc'>ID DESC</option>
      <option value='employee_age.asc'>Age ASC</option>
      <option value='employee_age.desc'>Age DESC</option>
      <option value='employee_salary.asc'>Salary ASC</option>
      <option value='employee_salary.desc'>Salary DESC</option>
    </select>
  </>
}

export default EmployeesSorting;
