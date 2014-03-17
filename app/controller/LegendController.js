Ext.define('PWApp.controller.LegendController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
    	myMap: null,
    	myLegend: null,
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'LegendView' ],

    	init : function() {
    		
    //		console.log('scoreCardController : init');

			this.control({
				'mapview #showLegend' : {
					click: this.showLegend
				}
			});

    	}
    },
    onLaunch: function() {
    //  console.log('controller Main - launch');
        //console.log('name :', this.getMyName())
        // this.setMyMap(Ext.ComponentQuery.query('agc')[0]);
        this.setMyLegend(Ext.widget('legendview'));
    	
    	// console.log('MyMap :', this.getMyMap() );
    	// console.log('MyLegend :', this.getMyLegend() );


    },
	showLegend: function() {
    	// console.log('show Legend!');

        if ( this.getMyLegend().isVisible() ) {
            this.getMyLegend().hide();            
        } else {
            this.getMyLegend().show();
        }

	}
}); 