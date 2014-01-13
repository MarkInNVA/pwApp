Ext.define('PWApp.controller.Main', {
    extend: 'Ext.app.Controller',

    init: function() {
//		console.log('From controller Main');

		var me = this;
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

		this.application.on({
        	haveCriteria: this.havecriteria,
            scope: this
        });
	},

	initialExtent: function() {
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},

	help: function() {
		this.helpWindow.show();
//		console.log("Help!");
	},
	havecriteria: function(c1,c2) {
//		console.log('c1 :', c1.getValue(), ', c2 :', c2.getValue())

		var myVal = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield[myNameIs=textField1]')[0];
        var myVal2 = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield')[1];
//		var myAns = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield[myNameIs=numberOfPoints]')[0];

                console.log('s :', myVal.getValue(),' e :', myVal2.getValue());
  //      myAns.setValue('33');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.getPointCount();
	}

});


