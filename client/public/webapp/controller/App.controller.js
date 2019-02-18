sap.ui.define([
    "de/hms/controller/BaseController"
], function(BaseController, MessageToast) {
    'use strict';
    
    return BaseController.extend("de.hms.controller.App", {

        onInit: function(){
            //console.log("App Controller - Init");
		},

		onPressSideNavigationToggleButton: function (oEvent) {
			//var oSideNavigation = this.getView().byId('sideNavigation');
			//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
			var toolPage = this.getView().byId("toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
        },
        
        onItemSelect: function(oEvent) {
            var item = oEvent.getParameter("item");
            console.log(item.getKey());
        }


    });

});