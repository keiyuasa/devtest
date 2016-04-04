import Ember from 'ember';
//import $ from 'jquery';

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
  model() {
    /*
    members = [];
    $.getJSON ("data/data.json", function( data ) {
      members=data;
      console.log(members);
      var array=[];

       for(var i=0;i<data.length;i++) {
         var u=data[i];
         console.log(u);
         var x={
           id: u.id,
           first_name: u.first_name,
           last_name: u.last_name,
           from: u.from,
           gender: u.gender
         }
         console.log("x="+x);
         array.push(x);
       }
       console.log("array="+array);
       members=array;
     });
     */
     return members;
  }
});
