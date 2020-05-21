/**
 * Make a sortable ASC compare function by a field
 *
 * @param { String } field
 * @returns {function(*, *): number}
 */
export const sortASC = field => (a, b) => a[field] - b[field];

/**
 * Make a sortable DESC compare function by a field
 *
 * @param { String } field
 * @returns {function(*, *): number}
 */
export const sortDESC = field => (a, b) => b[field] - a[field];