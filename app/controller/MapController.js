Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.toolbar.Spacer', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
//        myMap: null,
        myFilter: null
    },

    models: [ ],
    stores: [ 
        'RecordStore', 
    //    'FieldStore'
    ],

    refs: [
        {
            ref: 'AGC',
            selector: 'agc'
        },
        {
            ref: 'mapView',
            selector: '[xtype=layout.mapview]'
        }

    ],

    init : function() {


		this.control({ 
			'[xtype=layout.mapview]  #initialExtent' : {
				click: this.initialExtent
			}
		});


        this.control({
            '[xtype=layout.mapview] #baseMapSwitch > menu' : {
                click: this.baseMapSwitch
            }
        });

	},

    onLaunch: function() {
    //  console.log('controller Main - launch');

     // console.log('Mapcontroller , onLaunch, this.getAGC :', this.getAGC() );
     // console.log('Mapcontroller , onLaunch, this.getMapView :', this.getMapView() );

    },

    initialExtent: function() {
//    	console.log('MapController : initExtent');
		this.getAGC().setInitExtent();
	},

    baseMapSwitch: function (t,e,eO) {
//        console.log('MapController : basemapSwitch');
        switch(e.text) {
            case 'Streets':
                this.getAGC().getArcMap().setBasemap('streets')
                break;
            case 'Topo':
                this.getAGC().getArcMap().setBasemap('topo')
                break;
            case 'Ocean':
                this.getAGC().getArcMap().setBasemap('oceans')
                break;
            case 'Nat Geo':
                this.getAGC().getArcMap().setBasemap('national-geographic')
                break;
        }
    }    
}); 