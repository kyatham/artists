export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('artist', params);
  }
});
//export default Ember.Route.extend({
  
//});
