import EventEmitter from 'eventemitter3';

class Subscription {
  constructor() {
    this.emitter = new EventEmitter();
  }

  register = (event, listener) => {
    this.emitter.on(event, listener);

    return () => {
      this.emitter.off(event, listener);
    }
  }

  emit = (event, ...args) => {
    this.emitter.emit(event, ...args);
  }

  removeAllListeners = () => {
    this.emitter.removeAllListeners();
  }
}

export { Subscription };
