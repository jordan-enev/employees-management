import { initialState, reducer } from './reducer';

const employees = [
  { id: 1, employee_age: 18, employee_name: 'Jordan Enev' },
  { id: 2, employee_age: 16, employee_name: 'Airi Satou' },
  { id: 3, employee_age: 20, employee_name: 'Tiger Nixon' }
];

it('receives employees', () => {
  const action = {
    type: 'receive',
    payload: { employees: employees }
  };

  const newState = reducer(initialState, action);

  expect(newState).toEqual({ employees, filtered: [1, 2, 3], sort: null });
});

it('filters employee by name', () => {
  const state = {
    employees,
    filtered: [1, 2, 3],
    sort: null
  };

  const action = {
    type: 'filter',
    payload: { searchTerm: 'jordan enev' }
  };

  const newState = reducer(state, action);

  expect(newState).toEqual({ employees, filtered: [1], sort: null });
});

it('keeps the sorting criteria', () => {
  const state = {
    employees,
    filtered: [1, 2, 3],
    sort: null
  };

  const action = {
    type: 'sort',
    payload: { field: 'employee_name', direction: 'ASC' }
  };

  const newState = reducer(state, action);

  expect(newState).toEqual({
    employees,
    filtered: [1, 2, 3],
    sort: { field: 'employee_name', direction: 'ASC' }
  });
});

it('deletes an employee', () => {
  const state = {
    employees,
    filtered: [1, 2, 3],
    sort: null
  };

  const action = {
    type: 'delete',
    payload: { id: 3 }
  };

  const newState = reducer(state, action);

  expect(newState).toEqual({
    employees: [
      { id: 1, employee_age: 18, employee_name: 'Jordan Enev' },
      { id: 2, employee_age: 16, employee_name: 'Airi Satou' }
    ],
    filtered: [1, 2],
    sort: null
  });
});