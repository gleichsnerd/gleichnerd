import Ember from 'ember';
import Base from './base';

const {
  get
} = Ember;

export default Base.extend({

  model() {
    return get(this, "store").findAll("project");
  },

  actions: {
    transitionToProject(id) {
      this.transitionTo("projects.project", id);
    }
  }

});
