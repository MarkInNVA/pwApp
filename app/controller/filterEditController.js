Ext.define('PWApp.controller.filterEditController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],

    	init : function() {

//   		console.log('filterEditController : init');

			// this.application.on({
   //      		updateTotalPoints: this.updateTotalPoints,
   //          	scope: this
   //      	});

		}
	},
	updateTotalPoints: function(count) {
		console.log('Wells :', count);
		// var t = Ext.getCmp('totalPointsId'); //.setValue(count);
//		var t = Ext.ComponentQuery.query('textfield#totalPointsId');

//		Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(count);
	}
});
