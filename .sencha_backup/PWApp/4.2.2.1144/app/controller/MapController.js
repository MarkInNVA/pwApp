Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.toolbar.Spacer', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
        myMap: null,
        myFilter: null,
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],
    	// refs: {
    	// 	/* references to view components */
    	// 	'ieButton' : 'mapview > initialExtent'
    	// },

    	init : function() {
//    		console.log('MapController : init');

			this.control({ 
				'mapview  #initialExtent' : {
					click: this.initialExtent
				}
			});

			this.control({
				'mapview #showFilter' : {
					click: this.showFilter
				}
			});

            this.control({
                'mapview #baseMapSwitch > menu' : {
                    click: this.baseMapSwitch
                }
            });

            this.control({
                'mapview #showScorecard' : {
                    click: this.showScorecard
                }
            });
    	}
    },

    onLaunch: function() {
    //  console.log('controller Main - launch');
        //console.log('name :', this.getMyName())
        this.setMyMap(Ext.ComponentQuery.query('agc')[0]);
        this.setMyFilter(Ext.widget('filteredit'));
 //     console.log('MyMapCont :', mapCont.getArcMap() );
 //     console.log('MyMap :', this.getMyMap() );
    },

    initialExtent: function() {
    	//console.log('MapController : initExtent');
		this.getMyMap().setInitExtent();
        
	},

	showFilter: function() {
//		console.log('MapController : showFilter visible :', this.getMyFilter().isVisible());
        //var view = Ext.widget('filteredit');
        if ( this.getMyFilter().isVisible() ) {
            this.getMyFilter().hide();            
        } else {
            this.getMyFilter().show();
        }
  //      var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
  //      console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

	},

    showScorecard: function() {
   //   console.log('MapController : showScorecard');
     //   var view = Ext.widget('filteredit');
  //      var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
  //      console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

    },    
    baseMapSwitch: function (t,e,eO) {
        // console.log('main - switch, before e :', e, ', eO :',eO, ', t :', t);
        // console.log( 'text : ', e.text );

    //    var map = Ext.ComponentQuery.query('agc')[0];
        // console.log('Map :', map);
        // var s = map.getArcMap().getLayer('streets');
        // var t = map.getArcMap().getLayer('topo');
        // var o = map.getArcMap().getLayer('ocean');
        // var n = map.getArcMap().getLayer('natgeo');

        // s.hide();
        // t.hide();
        // o.hide();
        // n.hide();

        switch(e.text) {
            case 'Streets':
                this.getMyMap().getArcMap().setBasemap('streets')
//                s.show();
                break;
            case 'Topo':
                this.getMyMap().getArcMap().setBasemap('topo')
  //              t.show();
                break;
            case 'Ocean':
                this.getMyMap().getArcMap().setBasemap('oceans')
    //            o.show();
                break;
            case 'Nat Geo':
                this.getMyMap().getArcMap().setBasemap('national-geographic')
      //          n.show();
                break;
        }
    }    
}); 