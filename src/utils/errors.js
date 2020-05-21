import { notify } from './notifications';

/**
 * Generic `axios` error handler
 *
 * According to the `response.status` it will show a error notification.
 *
 * @param { Object } response - `axios` response object
 * @returns {*}
 */
export const handleErrors = response => {
  if (response.status === 404) {
    return notify({
      title: '404',
      message: `Resource not found!`,
      type: 'danger'
    });
  }

  return notify({
    title: 'Something went wrong!',
    message: 'Please try again!',
    type: 'danger'
  });
}