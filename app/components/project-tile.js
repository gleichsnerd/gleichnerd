import Ember from 'ember';

const {
  get,
  isPresent
} = Ember;

export default Ember.Component.extend({

  classNames: ["project-tile", "margin-larger", "flex-column", "flex-center"],

  click() {
    let onSelect = get(this, "onSelect");

    if(isPresent(onSelect)) {
      onSelect();
    }
  }

});
