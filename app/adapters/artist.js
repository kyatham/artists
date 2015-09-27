import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://api.musixmatch.com',
  namespace: 'ws/1.1',
 ajax: function(url, method, hash) {
        hash = hash || {};                         // hash may be undefined
       hash.crossDomain = true;                   // make it CORS
hash.dataType = 'jsonp';
hash.jsonpCallback = 'getArtistsData'       
//hash.xhrFields = {withCredentials: true};
        return this._super(url + ".get", method, hash);
    }
});
console.log("yep");
