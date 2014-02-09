Ext.define('PWApp.controller.ScoreCardController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
    	models: [ ],
    	stores: [ ],
//    	views : [ 'MapView' ],

    	init : function() {
    		
    //		console.log('scoreCardController : init');

			this.control({
				'mapview #showScore' : {
					click: this.showScore
				}
			});


			this.application.on({
        		countUpdate: this.updateTotals,
            	scope: this
        	});



	  		this.scoreWindow = Ext.create('Ext.window.Window', {
	        	title : 'Scorecard',
	        	height: 250,
	        	width : 225,
	        	x: 25,
	        	y: 400,
	        	bodyPadding: 10,
	        	layout: 'vbox',
	        	closeAction: 'hide',
	        	items: 
	        	[
                	{
	                    xtype: 'textfield',
	                    fieldLabel: 'Map type',
	                    myNameIs: 'mapType',
	                    value: 'Cached',
	                    width: 175
	                },
	                {
	                    xtype: 'textfield',
	                    myNameIs: 'totalPoints',
	                    fieldLabel: 'Total Pts',
	                    value: '55',
	                    width: 175
	                },
	                {
	                    xtype: 'textfield',
	                    myNameIs: 'extentPoints',
	                    fieldLabel: 'Pts in Extent',
	                    value: '',
	                    width: 175
	                },
	                {
	                    xtype: 'textfield',
	                    myNameIs: 'criteria',
	                    fieldLabel: 'Criteria',
	                    value: '',
	                    width: 175
	                }, 
                    {
                        xtype: 'textfield',
                        myNameIs: 'criteriaFullCount',
                        fieldLabel: 'Crit. pts in full extent',
                        value: '0',
                        width: 175
                    }, 
                    {
                        xtype: 'textfield',
                        myNameIs: 'criteriaInExtCount',
                        fieldLabel: 'Crit. pts in current extent',
                        value: '0',
                        width: 175
                    }
	            ]
	         	
	     	});
			this.scoreWindow.show();
    	}
    },

	showScore: function() {
  //  	console.log('show Score!');
    	this.scoreWindow.show();

	},
	updateTotals: function(tc, ec, mt, crit, critFullCnt, critInExtCnt) {
//		console.log('updateTotals, tc :', tc, ', ec :', ec, ', map type :', mt, ', crit : ', crit, ', crit full ext :', critFullCnt, ', crit in current ext :', critInExtCnt);
		var myVal = Ext.ComponentQuery.query('textfield[myNameIs=totalPoints]')[0]; 
		myVal.setValue(tc);
		myVal = Ext.ComponentQuery.query('textfield[myNameIs=extentPoints]')[0]; 
		myVal.setValue(ec);
		myVal = Ext.ComponentQuery.query('textfield[myNameIs=mapType]')[0]; 
		myVal.setValue(mt);
		myVal = Ext.ComponentQuery.query('textfield[myNameIs=criteria]')[0]; 
		if (crit == '1=1') {
			myVal.setValue('None');
		} else {
			myVal.setValue(crit);
		}
		myVal = Ext.ComponentQuery.query('textfield[myNameIs=criteriaFullCount]')[0]; 
		myVal.setValue(critFullCnt);
		myVal = Ext.ComponentQuery.query('textfield[myNameIs=criteriaInExtCount]')[0]; 
		myVal.setValue(critInExtCnt);
	}

}); 