import { store } from 'react-notifications-component';

/**
 * Create a notification
 *
 * Reusable notification wrapper over `store.addNotification`, with predefined settings,
 * in order to have a notification style and behaviour consistency, through the App.
 *
 * @param { String } title
 * @param { String } message
 * @param { String } type
 * @returns {*}
 */
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