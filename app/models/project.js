import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  icon: DS.attr(),
  links: DS.attr(),
  active: DS.attr("boolean")
});
