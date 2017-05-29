import Ember from 'ember';

const {
  computed,
  get,
  isPresent,
  A: emberA
} = Ember;

export default Ember.Component.extend({

  classNames: ["margin-largest", "flex-grow", "flex-column", "flex-center"],

  projects: emberA(),

  activeProjects: computed.filterBy("projects", "active", true),

  inactiveProjects: computed.filterBy("projects", "active", false),

  actions: {

    selectProject(id) {
      let onSelectProject = get(this, "onSelectProject");

      if(isPresent(onSelectProject)){
        onSelectProject(id);
      }
    }

  }

});
