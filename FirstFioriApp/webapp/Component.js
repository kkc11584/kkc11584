sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("tcs.fin.payroll.Component",{
        metadata: {
            manifest: "json"
        },
        init: function(){
            //create the base class object
            sap.ui.core.UIComponent.prototype.init.apply(this);
        },
        createContent: function() {         
            //Step 1:: Create App view object
            var oView = new sap.ui.view({
                id: "idAppView",
                viewName: "tcs.fin.payroll.view.App",
                type: "XML"
            });

            //Step 2: Get the app container control object from App view
            var oAppCon = oView.byId("AppCon");

            //Step 3: Add our view objects inside app container control
            var oView1 = new sap.ui.view({
                id: "idView1",
                viewName: "tcs.fin.payroll.view.View1",
                type: "XML"
            });
            oAppCon.addPage(oView1);

            return oView;
        },
        destroy: function(){

        }
    });
});