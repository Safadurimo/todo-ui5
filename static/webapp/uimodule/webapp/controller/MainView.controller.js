sap.ui.define([
  "com/safadurimo/todofrontend/todofrontend/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.safadurimo.todofrontend.todofrontend.controller.MainView", {

    onPressSave: function () {
      var oModel = new sap.ui.model.json.JSONModel();
      this.getView().setModel(oModel);
      var data = oModel.loadData("/api/todolist");

      oModel.attachRequestCompleted(function (data) {
        var d= oModel.getData();
        console.log("AddressModel: " + d);
        oModel.setData(oModel.getData());
      });

      console.log("saved");
      $.ajax({
        url: '/api/todo',
        type: 'POST',
        data: JSON.stringify({ "text": "Martin" }),
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
