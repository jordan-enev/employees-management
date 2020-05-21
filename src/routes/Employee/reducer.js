export const initialState = {
  // Keep all the raw employees objects
  employees: [],
  // Keep the filtered employees' ids, according to the search bar term term.
  filtered: [],
  // Keep the sorting criteria here as object, if the sorting is applied. For example:
  // {
  //   direction: 'asc|desc',
  //   field: 'employee_age'
  // }
  sort: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'receive':
      return {
        ...state,
        employees: action.payload.employees,
        // We're setting initial filtered ids here,
        // in order to simplify employees getting/rendering in the components later,
        // no matter a filter is applied or not.
        filtered: action.payload.employees.map(({ id }) => id)
      };
    case 'filter':
      // Convert `searchTerm` to lowerCase and the `employee_name` field in the filter later,
      // our search/filter algorithm will be case insensitive.
      const searchTerm = action.payload.searchTerm.toLowerCase();
      const filteredEmployees = state.employees.filter(({ employee_name }) => (
        employee_name.toLowerCase().indexOf(searchTerm) > -1
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