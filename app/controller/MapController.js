Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'help.HelpView' ],
    	// refs: {
    	// 	/* references to view components */
    	// 	'ieButton' : 'mapview > initialExtent'
    	// },

    	init : function() {
    		console.log('MapController : init');

//    		var v = this.getView('MapView');
//    		console.log('v :', v);


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

  			this.application.on({
				updateTotalPoints: this.updateTotalPoints,
 				scope: this
 			});

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

 
         var form =Ext.create('Ext.form.Panel', {
 //           title: 'filter',
            name: 'myForm',
            bodyPadding: 5,
            height:300,
            width: 250,


            layout: 'absolute',
            // defaults: {
            //     anchor: '100%'
            // },

            defaultType: 'textfield',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Map type',
                    myNameIs: 'mapType',
                    value: 'Cached',
                    width: 75,
                    x: 10, y: 10
                },
                {
                    xtype: 'textfield',
                    myNameIs: 'cField1',
                    fieldLabel: 'Criteria 1',
                    value: 'ph < 5.4',
                    width: 175,
                    x: 10, y: 50
                }, 
                {
                    xtype: 'textfield',
                    myNameIs: 'textField2',
                    fieldLabel: 'Criteria 2',
                    value: '',
                    width: 175,
                    x: 10, y: 90

                },
                {
                    xtype: 'textfield',
                    myNameIs: 'numberOfPoints',
                    fieldLabel: 'Result Count',
                    value: '',
                    width: 175,
                    x: 10, y: 130

                },
                {
                    xtype: 'textfield',
                    myNameIs: 'totalPoints',
                    fieldLabel: 'Total points in extent',
                    value: '',
                    width: 175,
                    x: 10, y: 170

                }
            ],

        // Reset and Submit buttons
            buttons: [{
                text: 'Reset',
                handler: function() {
                    this.up('form').getForm().reset();
                    me.resetCacheMap();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function() {
           //       console.log(this.up('form').getForm())
                    // var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

                    var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
                    var criteria1 = myVal.getValue();

    //              console.log('cool answer is ',criteria1);

                    var map = Ext.ComponentQuery.query('agc')[0];

                    map.getPointCount(criteria1);
                }
            }]
        });

    		this.filterWindow = Ext.create('Ext.window.Window', {
	    		title: 'Filter',
	    		layout: 'border',
	    		bodyPadding: 10,
	    		x: 50,
	    		y: 200,
	    		height: 350,
		    	width: 280,
	    		closeAction: 'hide',
	    		items: //
	    		[ 
	    		// {	xtype: 'panel',
	    		// 	html: 'hi'
	    		// }
	    			form	
	    		]  
			});


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
		this.filterWindow.show();
	},
	updateTotalPoints: function(points) {
		var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=totalPoints]')[0];
		myVal.setValue(points);		

	}
    /* event listener handler methods go here */
}); 