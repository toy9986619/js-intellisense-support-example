import { Auth } from './auth';

/** @typedef {import('@/modules/app/app').App} App */
/** @import * as Types from '@/modules/auth/types/auth' */

/**
 * @param {App} app
 * @returns {Auth}
 */
export const initAuth = (app) => {
  const auth = new Auth(app);
  app.setService('auth', auth);
  return auth;
};

/**
 * @param {App} app
 * @returns {Auth}
 */
export const getAuth = (app) => {
  let auth = app.getService(AUTH_SERVICE_NAME);

  if (!auth) {
    auth = initAuth(app);
  }

  return auth;
};

/**
 * A function to listen to authentication state changes.
 *
 * ```js
 * import { getApp } from 'js-intellisense-support/app';
 * import { getAuth, onAuthStateChanged } from 'js-intellisense-support/auth';
 *
 * const app = getApp();
 * const auth = getAuth(app);
 * const unsubscribe = onAuthStateChanged(auth, ({ uid }) => {
 *   if (uid) {
 *     console.log('User is signed in:', uid);
 *   }
 *  else {
 *    console.log('User is signed out');
 *  }
 * });
 * ```
 *
 * @param {Auth} auth - The Auth module instance.
 * @param {Types.AuthStateChangedListener} callback - The callback function to be called when the authentication state changes.
 * @returns {Function} Unsubscribe function to stop listening to authentication state changes.
 */
export const onAuthStateChanged = (auth, callback = () => { }) => {
  const unsubscribe = auth.registerListener('auth_state_changed', callback);
  return unsubscribe;
};
