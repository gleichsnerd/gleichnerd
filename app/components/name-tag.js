import Ember from 'ember';

const {
  get,
  isPresent
} = Ember;

export default Ember.Component.extend({

  classNameBindings: ["logoSize:nametag-logo:nametag"],

  showNav: true,
  logoSize: false,

  click() {
    let onClick = get(this, "onClick");

    if(isPresent(onClick)) {
      onClick();
    }
  }
});
