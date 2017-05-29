import Ember from 'ember';
import Base from '../base';

const {
  get
} = Ember;

export default Base.extend({

  model(params) {
    return get(this, "store").findRecord("project", get(params, "project_id"));
  },

  actions: {
    redirectToProjects() {
      this.transitionTo("projects");
    }
  }

});
