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
            this._loadUserData();
        },
        
		_loadUserData: function(){
			this.getView().getModel().loadData("/api/todo");
        },
        
		onListItemPressed : function(){

		   console.log("test");
		   this.addDataTest();
		},

		onCloseAddUserDialog: function(){
			this._getDialog().close();
			this._getDialog().destroy();
			delete this._oDialog;
		},

		addDataTest: function(){
			var that = this;

			var testData = {
				"title": "Test123123",
				"completed": "false",
			};

			$.ajax({
    			url: "/api/todo/",
    			type: "POST",
				contentType: "application/json", 
				data: JSON.stringify(testData)
			}).done(function(){
				MessageToast.show("Data added");
				that._loadUserData();
			}).fail(function(jqXHR, textStatus, error){
				MessageToast.show("Error");				
			});

		},

		deleteListItem: function(){

		}

		

    })

});