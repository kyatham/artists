export default Ember.Route.extend({
  actions: {
openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'artists',
        outlet: 'modal'
      });
    },
    
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'artists'
      });
    }
  },
model: function() {
    return Em.Object.create({name: 'Mitch'});
  }
});   
 

