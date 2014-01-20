Ext.define('PWApp.controller.TestFieldController', {
    extend: 'Ext.app.Controller',
    views: [ 'testField.TestFieldView' ],
    stores: [ 'TestFieldStore' ],
    models: [ 'TestFieldModel' ],

    init: function() {

        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });

        this.control({
            'mapview': {
                render: this.onMaplRendered
            }
        });

        
        this.control({
            'userlist': {
                itemdblclick: this.gridDblClick
            }
        });

    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    onMaplRendered: function() {
        console.log('mapview was rendered');

     //    var m = Ext.ComponentQuery.query('agc')[0];
    	// var mm = m.map.getLayer('points');
    	// this.getStore('TestFieldStore').add(mm);

    },

    gridDblClick: function(grid, record) {
    	console.log('Double clicked on ', record.get('name'));
    }
});