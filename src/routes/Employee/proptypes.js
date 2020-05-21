import PropTypes from 'prop-types';

export const employeeType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  employee_name: PropTypes.string.isRequired,
  employee_age: PropTypes.string.isRequired,
  employee_salary: PropTypes.string.isRequired,
});