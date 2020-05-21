// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Please refer to Breaking changes, option 3:
// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver