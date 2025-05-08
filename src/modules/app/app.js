class App {
  constructor() {
    this.service = new Map();
  }

  setService = (name, service) => {
    this.service.set(name, service);
  }

  getService = (name) => {
    return this.service.get(name);
  }
};

export { App };