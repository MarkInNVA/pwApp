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
				'mapview #help' : {
					click: this.help
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

	  		this.helpWindow = Ext.create('Ext.window.Window', {
	        	title : 'Help',
	        	height: 175,
	        	width : 375,
	        	layout: 'fit',
	        	closeAction: 'hide',
	        	items: {
	            	xtype: 'panel',
	            	html:     '<ul>'
	            			+   '<li>Use "+" and "-"  buttons to zoom in and out.</li>'
	            			+   '<li>Place cursor on map and drag to change map position.</li>'
	            			+   '<li>Click on Initial Extent button to go back to full map view.</li>'
	            		  +   '</ul>' 
	         	}
	     	});

		// this.application.on({
  //       	haveNumberOfWells: this.haveWells,
  //           scope: this
  //       });

 //       this.filterWindow.show();

    	}
    },

    initialExtent: function() {
    	console.log('initExtent');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},
	help: function() {
    	console.log('help!');
    	this.helpWindow.show();

	},
	showFilter: function() {
		console.log('showFilter');
        var view = Ext.widget('filteredit');
        var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
        console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

	}
}); 