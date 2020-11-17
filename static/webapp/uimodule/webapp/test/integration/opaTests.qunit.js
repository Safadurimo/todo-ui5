/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/safadurimo/todofrontend/todofrontend/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
