import Ember from 'ember';

const {
  set
} = Ember;

export default Ember.Route.extend({
  
  setupController() {
    this._super(... arguments);
    let applicationController = this.controllerFor('application');
    set(applicationController, "showTopNav", true);
  },

  actions: {
    willTransition(transition) {
      if(transition.targetName === "index") {
        let applicationController = this.controllerFor('application');
        set(applicationController, "showTopNav", false);   
      }
      
      return true;
    }
  }

});
