import Ember from 'ember';

const {
  set,
  $: ember$
} = Ember;

export default Ember.Route.extend({
  
  setupController() {
    this._super(... arguments);
    let applicationController = this.controllerFor('application');
    set(applicationController, "isOnHomePage", false);
    ember$('body').removeClass('blue-background');
  },

  actions: {
    willTransition(transition) {
      let applicationController = this.controllerFor('application');
    
      if(transition.targetName === "index") {
        set(applicationController, "isOnHomePage", true);
        ember$('body').addClass('blue-background');
      } else {
        set(applicationController, "isOnHomePage", false);
        ember$('body').removeClass('blue-background')
      }
      
      return true;
    }
  }

});
