import { Subscription } from '../../utils/subscription';
class Auth {
  constructor(app) {
    this.app = app;
    this.subscription = new Subscription();
  }

  registerListener = (event, callback) => {
    const unsubscribe = this.subscription.register(event, callback);
    return unsubscribe;
  }

  _onAuthStateChange = () => {
    this.subscription.emit('auth_state_changed', { uid: 'testing' });
  }
}

export { Auth };
