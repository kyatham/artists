import DS from 'ember-data';
/*App.PhotoRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('photo', params.photo_id);
  }
});*/
export default DS.Model.extend({
artist_id: DS.attr('string'),
artist_mbid:  DS.attr('string'),
artist_name:  DS.attr('string'),
artist_country:  DS.attr('string'),
artist_rating : DS.attr('string')
});
