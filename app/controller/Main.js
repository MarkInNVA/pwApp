Ext.define('PWApp.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [ 'Ext.window.*', 'Ext.toolbar.Spacer', 'Ext.form.*' ],

    init: function() {
//		console.log('From controller Main');

		var me = this;

		var form =Ext.create('Ext.form.Panel', {
	    	title: 'filter',
	    	name: 'myForm',
	    	bodyPadding: 5,
	    	height:300,
	    	width: 350,


		    layout: 'anchor',
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
		            height:20
		        },
		        {
		            xtype: 'textfield',
		            myNameIs: 'cField1',
		            fieldLabel: 'Criteria 1',
		            value: 'ph < 5.4'
		        }, 
		        {
		            xtype: 'textfield',
		            myNameIs: 'textField2',
		            fieldLabel: 'Criteria 2',
		            value: ''
		        },
		        {
		            xtype: 'textfield',
		            myNameIs: 'numberOfPoints',
		            fieldLabel: 'Result Count'
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
		   //     	console.log(this.up('form').getForm())
					// var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

		         	var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
	         		var criteria1 = myVal.getValue();

	//	        	console.log('cool answer is ',criteria1);

					var map = Ext.ComponentQuery.query('agc')[0];

					map.getPointCount(criteria1);
		        }
		    }]
		});

		this.helpWindow = Ext.create('Ext.window.Window', {
    		title: 'Help',
    		height: 150,
	    	width: 400,
    		layout: 'fit',
    		closeAction: 'hide',
    		items: {  // Let's put an empty grid in just to illustrate fit layout
        		xtype: 'panel',
        		html: 		'<ul>'
							+   '<li>Use "+" and "-"  buttons to zoom in and out.</li>'
							+   '<li>Place cursor on map and drag to change map position.</li>'
							+   '<li>Click on Initial Extent button to go back to full map view.</li>'
						+ 	'</ul>' 
    		}
		});

		this.filterWindow = Ext.create('Ext.window.Window', {
    		title: 'Filter',
    		header: {$color:'white'},
    		layout: 'border',
    		frame: true,
    		bodyBorder: true,
    		bodyPadding: 10,
    		x: 100,
    		y: 100,
        	closable: true,
        	resizable: true,
        	draggable: true,
    		height: 350,
	    	width: 380,
    		closeAction: 'hide',
    		items: [ form	]  
		});


		this.control({
			'[myNameIs=initialExtent]' : {
				click: this.initialExtent
			}
		});

		this.control({
			'[myNameIs=help]' : {
				click: this.help
			}
		});


		this.control({
			'[myNameIs=showFilterPanel]' : {
				click: this.showFilterPanel
			}
		});

		this.application.on({
        	haveNumberOfWells: this.haveWells,
            scope: this
        });

        this.filterWindow.show();
	},

	initialExtent: function() {
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},

	help: function() {
		this.helpWindow.show();
//		console.log("Help!");
	},
	havecriteria: function() {
//		console.log('c1 :', c1.getValue(), ', c2 :', c2.getValue())
		var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];
		var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
        var myVal2 = Ext.ComponentQuery.query('form[name=myForm] textfield')[1];
        var criteria1 = myVal.getValue()
 
//		var myAns = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield[myNameIs=numberOfPoints]')[0];

                console.log('C1 :', myVal.getValue(),' C2 :', myVal2.getValue());
  //      myAns.setValue('33');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.getPointCount(criteria1);
		

	},

	haveWells: function(numOfWells) {
		var map = Ext.ComponentQuery.query('agc')[0];
		var myAns = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=numberOfPoints]')[0];
		myAns.setValue(numOfWells);
//		console.log('PWApp.haveNumberOfWells event, haveWells :', numOfWells);

		var tl = map.map.getLayer("tiles"); 
		var fl = map.map.getLayer("points");

		var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
		var criteria1 = myVal.getValue()		

		var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

//		console.log('PWApp.haveNumberOfWells event, criteria1 :', criteria1);
	   	if (numOfWells < 1000) {
	    	console.log('# wells < 1000');
	    	tl.setVisibility(false);
	    	fl.setDefinitionExpression(criteria1);
	    	fl.setVisibility(true);

	    	mapType.setValue('Dynamic');
	    } else {
//	    	console.log('# wells > 1000');
			this.resetCacheMap();
	    	// tl.setVisibility(true);
	    	// fl.setVisibility(false);

	    	// mapType.setValue('Cached');             
	    }
	},

	resetCacheMap: function() {
		var map = Ext.ComponentQuery.query('agc')[0];
		var tl = map.map.getLayer("tiles"); 
		var fl = map.map.getLayer("points");
		var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

    	tl.setVisibility(true);
    	fl.setVisibility(false);

    	mapType.setValue('Cached');             

	},

	showFilterPanel: function() {
		this.filterWindow.show();
	}
});


