import { Auth } from './auth';

/** @typedef {import('../app/app').App} App */
/** @import * as Types from './types/auth' */

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
 * @param {Auth} auth
 * @param {Types.AuthStateChangedListener} callback
 * @returns {Function}
 */
export const onAuthStateChanged = (auth, callback = () => { }) => {
  const unsubscribe = auth.registerListener('auth_state_changed', callback);
  return unsubscribe;
};
