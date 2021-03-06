import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-me');
  this.route('projects', function() {
    this.route('project', {path: ':project_id'});
  });
  this.route('resume');
  this.route('contact-me');
  this.route('base');
});

export default Router;
