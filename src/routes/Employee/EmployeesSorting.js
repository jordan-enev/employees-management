import React, {useContext} from 'react';
import { DispatchContext } from './EmployeesView';
import { FormControl } from 'react-bootstrap';

function EmployeesSorting() {
  const dispatch = useContext(DispatchContext);

  function sortEmployees(e) {
    const [ field, direction ] = e.target.value.split('.');
    dispatch({ type: 'sort', payload: { field, direction } })
  }

  return (
    <FormControl as="select" defaultValue='' onChange={sortEmployees}>
      <option disabled value=''>Sort by</option>
      <option value='id.asc'>ID ASC</option>
      <option value='id.desc'>ID DESC</option>
      <option value='employee_age.asc'>Age ASC</option>
      <option value='employee_age.desc'>Age DESC</option>
      <option value='employee_salary.asc'>Salary ASC</option>
      <option value='employee_salary.desc'>Salary DESC</option>
    </FormControl>
  );
}

export default EmployeesSorting;
