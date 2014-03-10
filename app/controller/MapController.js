Ext.define('PWApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.window.*', 
                'Ext.toolbar.Spacer', 
                'Ext.form.*', 
                'Ext.layout.container.Absolute' 
    ],

    config: {
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

    	}
    },

    initialExtent: function() {
//    	console.log('MapController : initExtent');
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},

	showFilter: function() {
//		console.log('MapController : showFilter');
        var view = Ext.widget('filteredit');
  //      var t =  Ext.ComponentQuery.query('agc')[0].getCurrentCount();
  //      console.log('t :', t)
 //       Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(t.getCurrentCount());

	},
    baseMapSwitch: function (t,e,eO) {
        // console.log('main - switch, before e :', e, ', eO :',eO, ', t :', t);
        // console.log( 'text : ', e.text );

        var map = Ext.ComponentQuery.query('agc')[0];
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
                map.getArcMap().setBasemap('streets')
//                s.show();
                break;
            case 'Topo':
                map.getArcMap().setBasemap('topo')
  //              t.show();
                break;
            case 'Ocean':
                map.getArcMap().setBasemap('oceans')
    //            o.show();
                break;
            case 'Nat Geo':
                map.getArcMap().setBasemap('national-geographic')
      //          n.show();
                break;
        }
    }    
}); 