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
			//console.log(oJSONModel.loadData("/api/todo"));	
        },
        
		_loadUserData: function(){
			
			this.getView().getModel().loadData("/api/todo");
			//console.log(test);
			type
			console.log(this.getView().getModel());

		},
		
		onListItemPressed : function(){

			console.log("test");
			//this.addDataTest();
			this._getDialog().open();
		 },

		_getDialog : function () {
        	if (!this._oDialog) {
            	this._oDialog = sap.ui.xmlfragment("de.hms.view.todo.addToDo", this);
            	this.getView().addDependent(this._oDialog);
         	}
         	return this._oDialog;
      	},
        
		
		onCloseAddToDoDialog: function(){
			this._getDialog().close();
			this._getDialog().destroy();
			delete this._oDialog;
		},

		onAddTodoDialog: function(){
			var that = this;

			var toDoTitle = sap.ui.getCore().byId("title").getValue();
			var terminationDate = sap.ui.getCore().byId("endDate").getDateValue();
			console.log(terminationDate);
			var todoData = {
				"title": toDoTitle,
				"completed": "false",
				"terminationdate": terminationDate
			};

			$.ajax({
    			url: "/api/todo/",
    			type: "POST",
				contentType: "application/json", 
				data: JSON.stringify(todoData)
			}).done(function(){
				MessageToast.show("Data added");
				that._loadUserData();
			}).fail(function(jqXHR, textStatus, error){
				MessageToast.show("Error");				
			});

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

		deleteListItem: function(oEvent){
			var that = this;
			var oContext = oEvent.getSource().getParent().getBindingContext();
			var id = oContext.getProperty("_id");

			console.log(id);

			$.ajax({
				url: "/api/todo/" + id,
				type: "DELETE"
			}).done(function(){
				MessageToast.show("Deleted");
				that._loadUserData();
			}).fail(function(jqXHR, textStatus, error){
				MessageToast.show(jqXHR, textStatus, error);
			});
			

		}

    })

});