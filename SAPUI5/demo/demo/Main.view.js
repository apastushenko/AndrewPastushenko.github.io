sap.ui.jsview('demo.Main', {

    /**
    * Specifies the Controller belonging to this View.
    * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
    * @memberOf demo.Main **/
    getControllerName : function() {
        return 'demo.Main';
    },

    /**
    * Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
    * Since the Controller is given to this method, its event handlers can be attached right away.
    * @memberOf demo.Main **/
    createContent : function(oController) {

    }

});
