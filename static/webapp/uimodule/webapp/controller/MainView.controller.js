sap.ui.define([
  "com/safadurimo/todofrontend/todofrontend/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.safadurimo.todofrontend.todofrontend.controller.MainView", {

    onPressSave: function () {
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
    }

  });
});
