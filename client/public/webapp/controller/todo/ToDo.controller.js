sap.ui.define([
	"de/hms/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(BaseController, JSONModel, MessageToast) {
    "use strict";
    
    return BaseController.extend("de.hms.controller.todo.Todo", {

		onInit: function(){
			var oJSONModel = new JSONModel();
            this.getView().setModel(oJSONModel);
            //this._loadUserData();
        },
        /*
		_loadUserData: function(){
			this.getView().getModel().loadData("/api/trainer");
        },
        */
		onListItemPressed : function(){

           console.log("test");
		}

    })

});