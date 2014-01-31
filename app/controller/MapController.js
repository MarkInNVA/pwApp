Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.toolbar.Spacer', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],
    	// refs: {
    	// 	/* references to view components */
    	// 	'ieButton' : 'mapview > initialExtent'
    	// },

    	init : function() {
//    		console.log('MapController : init');

			this.control({
				'mapview  #initialExtent' : {
					click: this.initialExtent
				}
			});

			this.control({
				'mapview #showFilter' : {
					click: this.showFilter
				}
			});

  		// 	this.application.on({
				// updateTotalPoints: this.updateTotalPoints,
 			// 	scope: this
 			// });


    	}
    },

    initialExtent: function() {
//    	console.log('MapController : initExtent');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},

	showFilter: function() {
//		console.log('MapController : showFilter');
        var view = Ext.widget('filteredit');
  //      var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
  //      console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

	}
}); 