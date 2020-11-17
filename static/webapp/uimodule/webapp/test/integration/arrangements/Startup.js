sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.safadurimo.todofrontend.todofrontend.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.safadurimo.todofrontend.todofrontend",
          async: true,
          manifest: true
        }
      });
    }

  });
});
