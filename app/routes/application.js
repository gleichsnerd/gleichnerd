import Ember from 'ember';
import Base from './base';

const {
  set
} = Ember;

export default Base.extend({

  setupController() {
    this._super(... arguments);
    let applicationController = this.controllerFor('application');
    set(applicationController, "isOnHomePage", true);
  },

  actions: {
    gotoHome() {
      this.transitionTo('index');
    }
  }

});
