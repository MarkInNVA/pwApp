Ext.define('PWApp.controller.FilterController', {
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
    stores: [ ],

    refs: [
        {
            ref: 'AGC',
            selector: 'agc'
        },
        {
            ref: 'filter',
            selector: 'filteredit'
        }
    ],

    init : function() {
//    		console.log('MapController : init');

		this.control({
			'mapview #showFilter' : {
				click: this.showFilter
			}
		});


	},

    onLaunch: function() {
    //  console.log('controller Main - launch');
        //console.log('name :', this.getMyName())
 //       this.setMyMap(Ext.ComponentQuery.query('agc')[0]);
        this.setMyFilter(Ext.widget('filteredit'));
 //     console.log('MyMapCont :', mapCont.getArcMap() );
      console.log('Mapcontroller , onLaunch, this.getMyFilter :', this.getMyFilter() );
    },
        
	showFilter: function() {
//		console.log('MapController : showFilter visible :', this.getMyFilter().isVisible());
        //var view = Ext.widget('filteredit');
        if ( this.getFilter().isVisible() ) {
            this.getFilter().hide();            
        } else {
            this.getFilter().show();
        }
  //      var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
  //      console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

	}
}); 