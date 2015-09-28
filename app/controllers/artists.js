
export default Ember.ObjectController.extend({
  actions: {
    getArtists: function() {
      // Get the list of artists
result = Ember.ObjectProxy.create({content: []});
      $.ajax({
           url: 'http://api.musixmatch.com/ws/1.1/artist.get',
           type: 'GET',
           accepts: 'application/json',
        dataType:'jsonp',
           data:{"artist_id" : "64",
                "apikey" : "f22f6935704b043f29a7e2c8a6a369d6",
		"format":"jsonp",
		"callback":"getArtistsData",
		"page_size":10
                },
"jsonpCallback": 'getArtistsData',           
success: function(data) {
             result.set('content', data);
console.log(result.content);              
           },
           error: function() {
               console.log('DEBUG: GET Artists Failed');
           }
       });
 },
    getAlbums: function() {
      // Get the list of Albums
var result = Ember.ObjectProxy.create({content: []});
      $.ajax({
           url: 'http://api.musixmatch.com/ws/1.1/artist.albums.get',
           type: 'GET',
           accepts: 'application/json',
        dataType:'jsonp',
           data:{"artist_id" : "64",
                "apikey" : "f22f6935704b043f29a7e2c8a6a369d6",
                "format":"jsonp",
                "callback":"getAlbumsData",
                "page_size":10
                },
"jsonpCallback": 'getAlbumsData',
success: function(data) {
            // this.store.find("artist").save();
console.log(data);
//console.log(result);
return data;
           },
           error: function() {
               console.log('DEBUG: GET Albums Failed');
           }
       });
 }
}});
