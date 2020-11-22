sap.ui.define([
  "com/safadurimo/todofrontend/todofrontend/controller/BaseController"
], function (Controller) {
  "use strict";

  var updatePage = function (obj) {
    var oModel = new sap.ui.model.json.JSONModel();
    obj.getView().setModel(oModel);
    var data = oModel.loadData("/tasks");

    oModel.attachRequestCompleted(function (data) {
      var d = { "items": oModel.getData() };
      oModel.setData(d);
    });

  };

  return Controller.extend("com.safadurimo.todofrontend.todofrontend.controller.MainView", {

    onInit: function () {
      updatePage(this);
    },

    onPressSave: function () {

      var task = this.getView().byId("task").getValue();
      var that = this;
      console.log("saved");
      $.ajax({
        url: '/tasks',
        type: 'POST',
        data: JSON.stringify({ "text": task, "done": false }),
        contentType: 'application/json',
        success: function (data) {
          console.log("success" + data);
          updatePage(that);
        },
        error: function (e) {
          console.log("error: " + e);
        }
      });


    },

    onPressDelete: function (oEvent) {

      var that = this;

      var model = this.getModel();
      var path = oEvent.getSource().getBindingContext().getPath();
      var obj = model.getProperty(path);
      console.log(obj);
      $.ajax({
        url: `/tasks/${obj.id}`,
        type: 'DELETE',
        success: function (data) {
          console.log("object deleted");
          updatePage(that);
        },
        error: function (e) {
          console.log("error: " + e);
        }
      });

    }



  });
});
