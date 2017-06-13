import Ember from 'ember';

const {
  get,
  isPresent,
  inject
} = Ember;

export default Ember.Component.extend({

  screen: inject.service("screen"),

  actions: {
    closeModal() {
      let onCloseModal = get(this, "onCloseModal");
      
      if(isPresent(onCloseModal)) {
        onCloseModal();
      }
    }
  }

});
