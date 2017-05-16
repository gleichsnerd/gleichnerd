import Ember from 'ember';

export default Ember.Component.extend({
  
  classNames: ["flex-row flex-center"],
  
  classNameBindings: ["isAtTop:nav-bar-top:nav-bar"],

  isAtTop: true
});
