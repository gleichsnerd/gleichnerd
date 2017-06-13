import Ember from 'ember';
import Base from './base';

const {
  set,
  $: ember$
} = Ember;

export default Base.extend({

  setupController() {
    this._super(... arguments);
    let applicationController = this.controllerFor('application');
    set(applicationController, "isOnHomePage", true);
    ember$('body').addClass('blue-background');
  },

  actions: {
    gotoHome() {
      this.transitionTo('index');
    }
  }

});
