import { Auth } from './auth';

export const initAuth = (app) => {
  const auth = new Auth(app);
  app.setService('auth', auth);
  return auth;
};

export const getAuth = (app) => {
  let auth = app.getService(AUTH_SERVICE_NAME);

  if (!auth) {
    auth = initAuth(app);
  }

  return auth;
};

export const onAuthStateChanged = (auth, callback = () => { }) => {
  const unsubscribe = auth.registerListener('auth_state_changed', callback);
  return unsubscribe;
};