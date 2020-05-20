export const initialState = {
  employees: [],
  filtered: [],
  sorting: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'receive':
      return {
        ...state,
        employees: action.payload.employees,
        filtered: action.payload.employees.map(({ id }) => id)
      };
    case 'filter':
      const filteredEmployees = state.employees.filter(({ employee_name }) => (
        employee_name.toLowerCase().indexOf(action.payload.searchTerm) > -1
      ));
      const filtered = filteredEmployees.map(({id }) => id);

      return {
        ...state,
        filtered
      };
    case 'sort':
      return {
        ...state,
        sort: action.payload,
      };
    case 'delete':
      return {
        ...state,
        employees: state.employees.filter(({ id }) => id !== action.payload.id),
        filtered: state.filtered.filter(id => id !== action.payload.id),
      };
    default:
      throw new Error();
  }
}