export const sortASC = field => (a, b) => a[field] - b[field];
export const sortDESC = field => (a, b) => b[field] - a[field];