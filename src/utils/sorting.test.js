import { sortASC, sortDESC } from './sorting';

const employees = [{ id: '1', employee_age: '18' }, { id: '2', employee_age: '16' }, { id: '3', employee_age: '20' }];

it('sorts ASC by field', () => {
  const sortASCFunc = sortASC('employee_age');
  // Expected sort order, after the sorting is applied
  const employeesASCSorted = [
    { id: '2', employee_age: '16' }, { id: '1', employee_age: '18' }, { id: '3', employee_age: '20' }
  ];

  expect(employees.slice().sort(sortASCFunc)).toEqual(employeesASCSorted);
});

it('sorts DESC by field', () => {
  const sortDESCFunc = sortDESC('employee_age');
  // Expected sort order, after the sorting is applied
  const employeesDESCSorted = [
    { id: '3', employee_age: '20' }, { id: '1', employee_age: '18' }, { id: '2', employee_age: '16' }
  ];

  expect(employees.slice().sort(sortDESCFunc)).toEqual(employeesDESCSorted);
});