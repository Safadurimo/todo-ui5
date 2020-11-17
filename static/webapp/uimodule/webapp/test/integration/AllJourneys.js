sap.ui.define([
  "sap/ui/test/Opa5",
  "com/safadurimo/todofrontend/todofrontend/test/integration/arrangements/Startup",
  "com/safadurimo/todofrontend/todofrontend/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
