Ext.define('PWApp.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [ 'Ext.window.*', 'Ext.toolbar.Spacer', 'Ext.form.*' ],

    init: function() {
//		console.log('From controller Main');

		var me = this;



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

		this.application.on({
        	updateTotalPoints: this.updateTotalPoints,
            scope: this
        });
 //       this.filterWindow.show();
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
//		var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];
		var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
        var myVal2 = Ext.ComponentQuery.query('form[name=myForm] textfield')[1];
        var criteria1 = myVal.getValue() + ' ' + myVal2.getValue();
 
//		var myAns = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield[myNameIs=numberOfPoints]')[0];

                console.log('C1 :', myVal.getValue(),' C2 :', myVal2.getValue(), ', criteria1 :', criteria1);
  //      myAns.setValue('33');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.getPointCount(criteria1);
		

	},

	haveWells: function(numOfWells) {
		var map = Ext.ComponentQuery.query('agc')[0];
		var myAns = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=numberOfPoints]')[0];
		myAns.setValue(numOfWells);
//		console.log('PWApp.haveNumberOfWells event, haveWells :', numOfWells);


//		console.log('PWApp.haveNumberOfWells event, criteria1 :', criteria1);
	   	if (numOfWells < 1000) {
	   		var tl = map.map.getLayer("tiles"); 
			var fl = map.map.getLayer("points");

			var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
			var criteria1 = myVal.getValue()		

			var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

	 //   	console.log('# wells < 1000');
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

	updateTotalPoints: function(points) {
		var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=totalPoints]')[0];
		myVal.setValue(points);		

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


