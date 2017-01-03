import DS from "ember-data";

export default DS.Model.extend({
  desc: DS.attr(),
  category: DS.attr(),
  tags: DS.attr(),
  datetime: DS.attr()
});
