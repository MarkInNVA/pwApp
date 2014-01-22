Ext.define('PWApp.controller.filterEditController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],
    	// refs: {
    	// 	/* references to view components */
    	// 	'ieButton' : 'mapview > initialExtent'
    	// },

    	init : function() {
    		console.log('filterEditController : init');

   //  		this.control({
			// 	'filter.edit  #initialExtent' : {
			// 		click: this.initialExtent
			// 	}
			// });

			this.application.on({
        		updateTotalPoints: this.updateTotalPoints,
            	scope: this
        	});

		}
	},
	updateTotalPoints: function(count) {
		console.log('Wells :', count);
		// var t = Ext.getCmp('totalPointsId'); //.setValue(count);
//		var t = Ext.ComponentQuery.query('textfield#totalPointsId');
		Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(count);
	//	if (t) {
//			t.setValue(count);
//		}

//		var view = getView('filteredit')
		// view.getComponent('totalPoints').setValue(count);
//		console.log('ptr :', t);
		// .setValue(count);
	}
});
