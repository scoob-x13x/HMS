sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(Conroller, History) {
    "use strict";

    return Conroller.extend("de.hms.controller.BaseController", {

		getResourceBundle : function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}	

    })

})

