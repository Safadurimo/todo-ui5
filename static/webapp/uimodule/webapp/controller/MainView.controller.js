sap.ui.define([
  "com/safadurimo/todofrontend/todofrontend/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.safadurimo.todofrontend.todofrontend.controller.MainView", {

    onInit: function(){
      var oModel = new sap.ui.model.json.JSONModel();
      this.getView().setModel(oModel);
      var data = oModel.loadData("/tasks");

      oModel.attachRequestCompleted(function (data) {
        var d= {"items" : oModel.getData()};
        console.log("AddressModel: " + d);
        oModel.setData(d);
      });
    },

    onPressSave: function () {
     

      console.log("saved");
      $.ajax({
        url: '/tasks',
        type: 'POST',
        data: JSON.stringify({ "text": "Martin","done":false }),
        contentType: 'application/json',
        success: function (data) {
          console.log("success" + data);
        },
        error: function (e) {
          console.log("error: " + e);
        }
      });
    },



  });
});
