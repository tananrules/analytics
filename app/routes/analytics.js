import Ember from 'ember';

export default Ember.Route.extend({
  // setupController: function(controller) {
  //   controller.set()
  // },

  actions: {
    createItems: function(text) {
      var record = {};
      var controller = this.controllerFor('analytics');

      var data = {};
      data.name = text;
      data = JSON.stringify(data);


      new Ember.RSVP.Promise( function (resolve, reject) {
        Ember.$.ajax({
          contentType: "application/json; charset=utf-8",
          data: data,
          processData: false,
          type: 'POST',
          url: 'localhost:3000/api/merchants/1/items'
        }).done( function (json) {
          debugger
          var record
          controller.get('selectedItems').addObject(record);
          controller.get('items').addObject(record);
          resolve(json);
        }).fail( function (jqXHR, textStatus, error) {
          reject(error);
        });
      });


      // if (controller.get('selectedItems').length === 0) {
      //   record.id = 1;
      // } else {
      //   record.id = controller.get('selectedItems').length + 1;
      // }

      // record.name = text;

      // var textAlreadyExist = controller.get('selectedItems').findBy('name', text);
      // if (textAlreadyExist) {
      //   alert(text+" already exist");
      // } else {
      //   controller.get('selectedItems').addObject(record);
      //   controller.get('items').addObject(record);
      // }
    }
  }
});
