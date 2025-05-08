import { App } from './app';

const DEFAULT_APP_NAME = '[DEFAULT]';

const _app = new Map();

export const initApp = (name = DEFAULT_APP_NAME) => {
  if (_app.has(name)) {
    throw new Error(`App ${name} is already exist`);
  }

  const app = new App(name);
  _app.set(name, app);
  return app;
};

export const getApp = (name = DEFAULT_APP_NAME) => {
  if (!_app.has(name)) {
    throw new Error(`App ${name} is not exist`);
  }

  return _app.get(name);
}

export const deleteApp = (app) => {
  if (!app) {
    throw new Error('app is required');
  }

  if (!app.name) {
    throw new Error('Invalid app');
  }

  _app.delete(app.name);
}
