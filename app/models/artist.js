import DS from 'ember-data';
export default DS.Model.extend({
artist_id: DS.attr('string'),
artist_mbid:  DS.attr('string'),
artist_name:  DS.attr('string'),
artist_country:  DS.attr('string'),
artist_rating : DS.attr('string')
});
