import { store } from 'react-notifications-component';

export const notify = ({ title, message, type='success' }) => (
  store.addNotification({
    title,
    message,
    type,
    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 3000,
      showIcon: true,
    }
  })
)