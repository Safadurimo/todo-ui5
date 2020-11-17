sap.ui.define([
  "com/safadurimo/todofrontend/todofrontend/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.safadurimo.todofrontend.todofrontend.controller.MainView", {

    onPressSave: function () {
      console.log("saved");
		}

  });
});
