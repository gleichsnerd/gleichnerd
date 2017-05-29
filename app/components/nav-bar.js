import Ember from 'ember';

export default Ember.Component.extend({
  
  classNames: ["flex-center"],
  
  classNameBindings: ["showHome:nav-bar-top:nav-bar", "showHome:flex-column:flex-row"],

  showHome: true
});
