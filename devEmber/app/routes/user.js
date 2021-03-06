import Ember from 'ember';

var members = [{
  id: 1,
  user_id: 'kyuasa',
  first_name: 'Kei',
  last_name: 'Yuasa',
  from: 'San Francisco',
  gender: 'Male'
}, {
  id: 2,
  user_id: 'jdoe',
  first_name: 'John',
  last_name: 'Doe',
  from: 'New York',
  gender: 'Male'
}, {
  id: 3,
  user_id: 'mgreen',
  first_name: 'Mary',
  last_name: 'Green',
  from: 'Los Angeles',
  gender: 'Female'
}];

export default Ember.Route.extend({
  model: function (params) {
    return members[params.id];
  }
});
