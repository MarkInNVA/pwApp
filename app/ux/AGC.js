Ext.define('Ext.ux.AGC', {
	extend: 'Ext.Component',
	alias: 'widget.agc',
	style: {
		height:'100%',
		width: '100%',
		'z-index': 100
	},
	config:{

		map: null,
		initialExtent: null,
		initialZoom: null,

		queryFilter: null,
    queryCriteria: null,
    queryTaskFilter: null,
    queryTaskCriteria: null
	},
	initComponent: function() {
		dojo.require("esri.map");
    dojo.require("esri.layers.FeatureLayer");
    dojo.require("esri.layers.agstiled");
//        dojo.require("esri.symbol.SimpleFillSymbol");
    dojo.require("esri.tasks.query");
 //       dojo.require("esri.renderers.UniqueValueRenderer");
//        dojo.require("dojo.color");
	},
  
	afterRender: function(t, eOpts){
		var map, me = this, local_id = this.getId(), tl, fl;

		this.callParent(arguments); 

		function init() {

			var sfs = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
  					  new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
  					  new dojo.Color([202,0,0]), 3),new dojo.Color([0,255,102,0.5]));

    	var dfsCoal = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 12,
				  new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
				  new dojo.Color([255,51,51]), 2),new dojo.Color([51,51,51,0.8]));

    	var dfsShale = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE, 12,
				  new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
				  new dojo.Color([0,255,255]), 2),new dojo.Color([51,51,51,0.8]));

    	var dfsSelected = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 18,
				  new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
				  new dojo.Color([55,155,55]), 2),new dojo.Color([51,251,51,0.6]));

    	var lods = [
//       		{ "level":  0, "resolution": 156543.033928000,  "scale": 591657527.591555 }, 
//       		{ "level":  1, "resolution": 78271.5169639999,  "scale": 295828763.795777 }, 
    		{ "level":  2, "resolution": 39135.7584820001,  "scale": 147914381.897889 }, 
    		{ "level":  3, "resolution": 19567.8792409999,  "scale": 73957190.948944  }, 
      		{ "level":  4, "resolution": 9783.93962049996,  "scale": 36978595.474472  }, 
      		{ "level":  5, "resolution": 4891.96981024998,  "scale": 18489297.737236  }, 
      		{ "level":  6, "resolution": 2445.98490512499,  "scale": 9244648.868618   }, 
      		{ "level":  7, "resolution": 1222.99245256249,  "scale": 4622324.434309   },
      		{ "level":  8, "resolution": 611.496226281380,  "scale": 2311162.217155   },
      		{ "level":  9, "resolution": 305.748113140558,  "scale": 1155581.108577   },
      		{ "level": 10, "resolution": 152.874056570411,  "scale": 577790.554289    },
      		{ "level": 11, "resolution": 76.43702828507324, "scale": 288895.277144    },
      		{ "level": 12, "resolution": 38.21851414253662, "scale": 144447.638572    },
      		{ "level": 13, "resolution": 19.1092570712683,  "scale": 72223.819286    },
      		{ "level": 14, "resolution": 9.55462853563415,  "scale": 36111.909643     }

      	];
	
    	map = new esri.Map(local_id, {
       	basemap: "topo", 
				center: [-98.579500,39.828175],  // c. center of U.S.
//				center: [-88.5,33.5],
				zoom: 2,
      	logo: false,
      	showAttribution:false,
      	lods: lods,
      	sliderStyle: "large"
          //  	wrapAround180: true
    	});

      map.on("load", function() {
			  me.setMap(map);
		    me.setInitialExtent(map.extent);
      
        var q = new esri.tasks.Query();
        me.setQueryFilter(q);
//        console.log(me.getQueryFilter());

        var q2 = new esri.tasks.Query();
        me.setQueryCriteria(q2);

        var qt = new esri.tasks.QueryTask("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_DB_CACHED/MapServer/0");
        me.setQueryTaskCriteria(qt);

        var qt2 = new esri.tasks.QueryTask("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_DB_CACHED/MapServer/0");
        me.setQueryTaskFilter (qt2);        
//    			console.log(map.extent);

	//		
    	});

         map.on("extent-change", function(e) {
//                 console.log("e :",e);

            var qt = new esri.tasks.QueryTask("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer/0");        
            var q = new  esri.tasks.Query();
            q.geometry = e.extent;
                 // set up q & qt
            qt.executeForCount(q, function(count){
              PWApp.app.fireEvent('updateTotalPoints', count);
              //console.log("count :", count);
            });
         });

 //      map.on("extent-change", function(e){
 // //       console.log(e.extent);
 //         var q  = me.getQueryFilter();
 //         console.log("q :",q);
 //      //   var qt = me.getQueryTaskFilter();
 //      //   q.geometry = e.extent;
 //      //   // qt.executeForCount(q, function(count){
 //      //   //   console.log("Count :", count);
 //      //   // });
 //      });

//var usaUrl = "http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer"
// var usaLayer = new esri.layers.ArcGISDynamicMapServiceLayer(usaUrl, { 
//           "id": "usa",
//           "opacity": 0.7
//         });

      var tMSLayer = new esri.layers.ArcGISTiledMapServiceLayer( "http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_DB_CACHED/MapServer",{ 			
        id: 'tiles'
      });


      var mac = new esri.layers.FeatureLayer("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer/0", {

 				id: 'points',
 	    	mode:  esri.layers.FeatureLayer.MODE_ONDEMAND, //MODE_SNAPSHOT,
// //	    		mode: 1, //esri.layers.FeatureLayer.MODE_SNAPSHOT,
 	    	outFields: ["*"] ,
        visible: false
// 	    		opacity: 0.65
 			});


      // var renderer = new esri.renderer.SimpleRenderer(dfsCoal)
      // mac.setRenderer(renderer);
      // mac.setScaleRange(288895.277144, 36111.909643);

         	// mac.on("update-end", function(o) {
          //   console.log('features :',o.target.graphics.length);
         	// });

 //     map.addLayer(usaLayer);
      map.addLayer(mac);

 			map.addLayer(tMSLayer);
		}

		dojo.ready(init);
	},

	setInitExtent: function() {
		this.map.setExtent(this.getInitialExtent());
	},

  gotIt: function(results) {

    var myAns = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=numberOfPoints]')[0];

    var numOfWells = results;

    PWApp.app.fireEvent('haveNumberOfWells', numOfWells);
  },

  getPointCount: function(c) {
//console.log("getPointCount c:",c)
      var qc = this.getQueryCriteria();
      var qtc = this.getQueryTaskCriteria();
//      var qt = new esri.tasks.QueryTask("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer/0");
      var m = this.map;
      qc.geometry = m.extent;
      console.log(m.extent);
//      this.criteria1 = c;
      qc.where = c;
      qtc.executeForCount(qc, this.gotIt);
  },

	onResize: function() {    // keeps map & screen coordinated
		if (this.map) {
   		   this.map.resize();			
		}
  }  
});