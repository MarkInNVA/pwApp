Ext.define('PWApp.controller.HelpController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView' ],

    	init : function() {
    		
//    		console.log('HelpController : init');

			this.control({
				'mapview #help' : {
					click: this.help
				}
			});


	  		this.helpWindow = Ext.create('Ext.window.Window', {
	        	title : 'Help',
	        	height: 175,
	        	width : 375,
	        	layout: 'fit',
	        	bodyPadding: 10,
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

    	}
    },

	help: function() {
  //  	console.log('help!');
    	this.helpWindow.show();

	}
}); 