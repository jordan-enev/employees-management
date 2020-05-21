import { notify } from './notifications';

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