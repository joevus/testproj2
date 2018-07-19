import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  attachment: DS.attr(),
  key: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  deleted_at: DS.attr()
});
