import Ember from 'ember';

const {
  get,
  isPresent
} = Ember;

export default Ember.Component.extend({

  actions: {
    closeModal() {
      let onCloseModal = get(this, "onCloseModal");
      
      if(isPresent(onCloseModal)) {
        onCloseModal();
      }
    }
  }

});
