import React, {useContext} from 'react';
import { DispatchContext } from './EmployeesView';

function EmployeesSorting() {
  const dispatch = useContext(DispatchContext);

  function sortEmployees(e) {
    const [ field, direction ] = e.target.value.split('.');
    dispatch({ type: 'sort', payload: { field, direction } })
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
