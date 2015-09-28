export default Ember.Route.extend({
  actions: {
openModal: function(modalName,path) {
var result = Ember.ObjectProxy.create({Content: {}}),
that = this;
$.ajax({
           url: 'http://api.musixmatch.com/ws/1.1/' + path,
           type: 'GET',
           accepts: 'application/json',
       	   dataType:'jsonp',
           data:{
		"artist_id":"1039",
                "apikey" : "f22f6935704b043f29a7e2c8a6a369d6",
                "format":"jsonp",
                "callback":"getArtistsData",
                "page_size":10
                },
"jsonpCallback": 'getArtistsData',
success: function(data) {
result.set("Content",data);
console.log(result.Content.message.body);
that.controllerFor(modalName).set('model', result.Content.message);
 return that.render(modalName, {
        into: 'artists',
        outlet: 'modal'
      });
           },
           error: function() {
               console.log('DEBUG: GET Artists Failed');
           }
       });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'artists'
      });
    }
  }
});   
 

