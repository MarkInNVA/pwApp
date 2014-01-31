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

    dyn_Well_Url: null,
    cache_Well_Url: null,

    extentCount: null,
    totalCount: null,
    criteriaFullExtentCount: null,
    criteriaInExtentCount: null,
    mapType: null,
    criteria: null
	},

	initComponent: function() {
		dojo.require("esri.map");
//    dojo.require("esri.layers.FeatureLayer");
    dojo.require("esri.layers.agstiled");
    dojo.require("esri.tasks.query");

    this.setDyn_Well_Url("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer") ;
    this.setCache_Well_Url("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_DB_CACHED/MapServer");
	},
  
	afterRender: function(t, eOpts){
		var map, me = this, local_id = this.getId();

		this.callParent(arguments); 

		function init() {

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
				zoom: 1,
      	logo: false,
      	showAttribution:false,
      	lods: lods,
  //    	sliderStyle: "large"
          //  	wrapAround180: true
    	});

      map.on("load", function() {

        me.setMap(map);
        me.setInitialExtent(map.extent);
        me.setCriteria('None');

        me.getTotalPointCount();
    	});

      var dynamicLayer = new esri.layers.ArcGISDynamicMapServiceLayer( me.getDyn_Well_Url(), { 
          id: "wells",
          opacity: 0.7 ,
          visible: false
      });

      var tileLayer = new esri.layers.ArcGISTiledMapServiceLayer( me.getCache_Well_Url() ,{       
        id: 'tiles',
        "opacity": 0.4
      });

// not working since refactor
       map.on("layer-add-result", function (evt) {
//          console.log('layer add , e:', evt);
          if (evt.layer.id == 'wells') {
            me.dotheWork();
  //           // var layerInfo = evt.layer.layerInfos;

  //           var mm = map.getLayer('wells');
  //           var s = Ext.StoreManager.lookup('TestFieldStore');
  //           console.log('mm :', mm);
  //           console.log('s :',s); 
  //           s.add(mm.fields);
  // //               //s.reload();
          }
       });

      map.addLayer(dynamicLayer);
      map.addLayer(tileLayer);


      map.on("extent-change", function(e){
        me.dotheWork();
      });

		}

		dojo.ready(init);
	},

  dotheWork: function() {
    var me = this;
    var qt = new esri.tasks.QueryTask(me.getDyn_Well_Url() + '/0');
    var q  = new esri.tasks.Query();
    var c = me.getCriteria();
    var layerDefs = [];
    var e = me.getMap();

    if (e && c) {
      console.log('dotheWork, work is being done. c :',c);
      var dlayer = e.getLayer('wells');
      var clayer = e.getLayer('tiles');

      me.getCritInExtCnt(c); // doesn't do much if c == 'None', resets crit counters
   
      q.geometry = e.extent;


      qt.executeForCount(q, function(count){

        me.setExtentCount(count);

        var checkCrit = me.getCriteriaInExtentCount();
        var checkExtent = me.getExtentCount()
        var dblCheck = false;
        if (checkCrit < 1000) {
          if (checkCrit == 0) {  // 0 = no criteria
            if (checkExtent < 1000) {
              dblCheck = true;
            } else {
              dblCheck = false;
            }

          } else {
              dblCheck = true;
          }
        } else {
          dblCheck = false;
        }
        
        console.log( 'dblCheck :', dblCheck, ', count in extent :', count); 
        // checkCrit < 1000, checkCrit  = 0, checkExtent = doesn't matter  --> do it  

        // checkCrit < 1000, checkCrit != 0, checkExtent < 1000  -->  do it
        // checkCrit < 1000, checkCrit != 0, checkExtent => 1000  -->  no way

        // checkCrit > 1000, checkCrit = anything, checkExtent = anything  -->  no way

        if ( dblCheck ) {
          console.log('count (pts in extent) or criteria in extent< 1000, cnt :', me.getExtentCount(),', in ext :', me.getCriteriaInExtentCount());
          if (c != 'None') {
            layerDefs[0] = c;
            dlayer.setLayerDefinitions(layerDefs);
          };

          dlayer.setVisibility(true);
          clayer.setVisibility(false);
          me.setMapType("Dynamic");
        } else {
          console.log('count => 1000');

          // layerDefs = []; // should be already here (ld = [])
          // dlayer.setLayerDefinitions(layerDefs);

          dlayer.setVisibility(false);
          clayer.setVisibility(true);

          me.setMapType("Cache");
        }

      PWApp.app.fireEvent('countUpdate', me.getTotalCount(), me.getExtentCount(), 
                me.getMapType(), c , me.getCriteriaFullExtentCount(), me.getCriteriaInExtentCount()  );

      });
    } else {
      console.log('Not doing the work, no map! c :',c , ', e :',e)
    }
  },

  getCritInExtCnt: function(c) {
    var me = this;
    var qt = new esri.tasks.QueryTask(this.getDyn_Well_Url() + '/0');
    var q  = new esri.tasks.Query(); 
    var e = this.getMap();

    if (c == 'None' ) { //|| c == '1=1') {
      // resetting scorecard & config
      console.log('getCritInExtCnt, skipping work, setting crit-counters to 0. c:',c);
      me.setCriteriaInExtentCount(0);
      me.setCriteriaFullExtentCount(0);
    } else {
      if (e) {
        console.log('getCritInExtCnt, doing work, c:',c);

        q.geometry = e.extent;
        q.where = c;
        qt.executeForCount(q, function(count) {
                me.setCriteriaInExtentCount(count);
                
                console.log('getCritInExtCnt, # in crit extent: ',count)
        });  
      } else {
        console.log('getCritInExtCnt - no map!');
      }

    }
  },

  getCriteriaFromFilter: function(c) {  // really from app/filter/edit.js
      me = this;
      this.setCriteria(c);
    console.log('getCriteriaFromFilter, c:',c)
      if (c == 'None') {  // resetting scorecard & config

        me.setCriteriaInExtentCount(0);
        me.setCriteriaFullExtentCount(0);

      } else {
        var qt = new esri.tasks.QueryTask(this.getDyn_Well_Url() + '/0');
        var q  = new esri.tasks.Query(); 
        var l = this.map.getLayer('wells').fullExtent;;

        q.where = c;

        this.getCritInExtCnt(this.getCriteria(), this.map.extent);

  //      console.log('l.extent :', l);
        q.geometry = l.fullExtent;
        qt.executeForCount(q, function(count) {
          console.log('getCriteriaFromFilter, get full crit : ',count)
          me.setCriteriaFullExtentCount(count);
                
        });  

      }


      this.dotheWork();
  },

  getTotalPointCount: function() {
    var me = this;
    var qt = new esri.tasks.QueryTask(me.getDyn_Well_Url() + '/0');
    var q  = new esri.tasks.Query();
 
    q.where = '1=1';
    qt.executeForCount(q, function(results) {
      me.setTotalCount(results);
 //     console.log('rtc :', me.getTotalCount());
    });
  },

	setInitExtent: function() {
		this.map.setExtent(this.getInitialExtent());
	},

	onResize: function() {    // keeps map & screen coordinated
		if (this.map) {
   		   this.map.resize();			
		}
  }  
});

 //  gotIt: function(results) {

 // //   var myAns = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=numberOfPoints]')[0];

 //    var numOfWells = results;

 //    PWApp.app.fireEvent('countUpdate', me.getTotalCount(), me.getExtentCount(), me.getMapType() );
 //  },

