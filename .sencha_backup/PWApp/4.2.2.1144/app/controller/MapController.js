Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView' ],
    	refs: {
    		/* references to view components */
    	},
    	control: {
    		/* attach event listeners here */
			// '[myNameIs=initialExtent]' : {
			// 	click: this.initialExtent
			// }
    	},
    	init : function() {
    		console.log('MapController : init');

    		this.filterWindow = Ext.create('Ext.window.Window', {
	    		title: 'Filter',
	    		header: {$color:'white'},
	    		layout: 'border',
	    		frame: true,
	    		bodyBorder: true,
	    		bodyPadding: 10,
	    		x: 100,
	    		y: 200,
	        	closable: true,
	        	resizable: true,
	        	draggable: true,
	    		height: 350,
		    	width: 280,
	    		closeAction: 'hide',
//	    		items: [ form	]  
			});



		// this.control({
		// 	'[myNameIs=help]' : {
		// 		click: this.help
		// 	}
		// });


		// this.control({
		// 	'[myNameIs=showFilterPanel]' : {
		// 		click: this.showFilterPanel
		// 	}
		// });

		// this.application.on({
  //       	haveNumberOfWells: this.haveWells,
  //           scope: this
  //       });

		// this.application.on({
  //       	updateTotalPoints: this.updateTotalPoints,
  //           scope: this
  //       });

 //       this.filterWindow.show();

    	}
    },

    initialExtent: function() {
    	console.log('initExtent')
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	}
    /* event listener handler methods go here */
}); 