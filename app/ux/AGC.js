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
    fL_Well_Url: null,

    extentCount: null,
    totalCount: null,
    popup: null,
    criteriaFullExtentCount: null,
    criteriaInExtentCount: null,
    mapType: null,
    criteria: null
	},

	initComponent: function() {
		dojo.require("esri.map");
    dojo.require("esri.layers.FeatureLayer");
    dojo.require("esri.layers.agstiled");
    dojo.require("esri.tasks.query");
    dojo.require("esri.dijit.PopupTemplate");
    dojo.require("esri.dijit.Popup");
//    dojo.require("dojo.Deferred");

    this.setDyn_Well_Url("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer") ;
    this.setFL_Well_Url( "http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_db/MapServer/0");
    this.setCache_Well_Url("http://eerscmap.usgs.gov/arcgis/rest/services/pw/published_DB_CACHED/MapServer");
	},
  
	afterRender: function(t, eOpts){
		var map, popup, me = this, local_id = this.getId();

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
      		{ "level": 12, "resolution": 38.21851414253662, "scale": 144447.638572    }, //,
      		// { "level": 13, "resolution": 19.1092570712683,  "scale": 72223.819286    },
      		// { "level": 14, "resolution": 9.55462853563415,  "scale": 36111.909643     }

      	];

      popup = esri.dijit.Popup({
        titleInBody: false
      }, Ext.Element(document.createElement('div')) );

      me.setPopup(popup);

    	map = new esri.Map(local_id, {
       	basemap: "topo", 
				center: [-98.579500,39.828175],  // c. center of U.S.
				zoom: 1,
      	logo: false,
      	showAttribution:false,
      	lods: lods,
        infoWindow: popup
  //    	sliderStyle: "large"
          //  	wrapAround180: true
    	});

      map.on("load", function() {

        me.setMap(map);
        me.setInitialExtent(map.extent);
        me.setCriteria('None');

        me.getTotalPointCount();
    	});

      var template = new esri.dijit.PopupTemplate({
          title: "Well",
          description:"UNIQID: {UNIQID}<BR>API: {API}<BR>Well name: {WELLNAME}"
      });

      var dynamicLayer = new esri.layers.ArcGISDynamicMapServiceLayer( me.getDyn_Well_Url(), { 
          id: "points",
          opacity: 0.7 ,
          visible: false
      });

      var tileLayer = new esri.layers.ArcGISTiledMapServiceLayer( me.getCache_Well_Url() ,{       
        id: 'tiles',
        "opacity": 0.4
      });

      var featureLayer = new esri.layers.FeatureLayer( me.getFL_Well_Url(), { 
          id: "wells",
          infoTemplate:template,
          mode: esri.layers.FeatureLayer.MODE_SELECTION,  // ONDEMAND    SNAPSHOT
          outFields:["*"] //,

//          opacity: 0.7 //,
//          visible: true
      });      

      featureLayer.on("click", function(e){
        var a = e.graphic.attributes;
//        var a = e.graphic.attributes;
//        opAtlas.app.fireEvent('pointselected',a,e);
//        console.log('featureLayer clicked! e:', e)
        console.log('featureLayer clicked! e.graphic:', e.graphic)
 //       me.selectPoint(a.OBJECTID);
        me.selectPoint(e.graphic);

      });

       map.on("layer-add-result", function (evt) {
//          console.log('layer add , e:', evt);
          if (evt.layer.id == 'wells') {
            me.getCriteriaFromFilter('None')
//            me.dotheWork();
          }
       });

//     map.addLayer(dynamicLayer);
      map.addLayer(tileLayer);
      map.addLayer(featureLayer);

      map.on("extent-change", function(e){
        if (me.getCriteria() == null) {
          me.setCriteria('None')
        }
//        console.log('map.on extent-change, crit :',me.getCriteria())
        me.getPopup().hide();

        var recStore = Ext.StoreManager.lookup('RecordStore');
        recStore.removeAll();

        me.getCriteriaFromFilter(me.getCriteria())
  //      me.dotheWork();
      });

		}

		dojo.ready(init);
	},


  // checkCrit < 1000, checkCrit  = 0, checkExtent = doesn't matter  --> do it  
  // checkCrit < 1000, checkCrit != 0, checkExtent < 1000  -->  do it

  // checkCrit < 1000, checkCrit != 0, checkExtent => 1000  -->  no way
  // checkCrit > 1000, checkCrit = anything, checkExtent = anything  -->  no way

  dotheWork: function() {
    var me = this;
    var qt = new esri.tasks.QueryTask(me.getFL_Well_Url() );
    var q  = new esri.tasks.Query();
    var c = me.getCriteria();
    var e = me.getMap();

    if (e && c) { // if map and criteria
      console.log('dotheWork, work is being done. c :',c);
      var flayer = e.getLayer('wells');
      var clayer = e.getLayer('tiles');

//      me.getCritInExtCnt(c); // doesn't do much if c == 'None', resets crit counters
   
      q.geometry = e.extent;
      qt.executeForCount(q, function(count){    // get points in extent, no criteria
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
        
  //      console.log( 'dblCheck :', dblCheck, ', count in extent :', count); 
        if ( dblCheck ) {
  //        console.log('count (pts in extent) or criteria in extent< 1000, cnt :', me.getExtentCount(),', in ext :', me.getCriteriaInExtentCount());

          if (c != 'None') {
            flayer.setDefinitionExpression(c);
          } else {
            flayer.setDefinitionExpression('1=1'); // else q.where='1=1';
          }; 

//          console.log('q :',q, 'e.extent :', e.extent);
          
          flayer.selectFeatures(q,esri.layers.FeatureLayer.SELECTION_NEW, function(results) {
//            console.log('doing selectFeatures result:', results);
            var b= [];
            Ext.Array.each(results, function(name, index, resultsItSelf) {
              b.push(name.attributes);
//              console.log('name :', name, ', index :', index );
            });

            var s = Ext.StoreManager.lookup('RecordStore');
              //console.log('s :',s); 
            s.add(b);
          //    s.reload();

          })

          clayer.setVisibility(false);

          me.setMapType("Dynamic");
        } else {
 //         console.log('count => 1000');

          flayer.setDefinitionExpression('1=2');
          flayer.selectFeatures(q,esri.layers.FeatureLayer.SELECTION_NEW, function(results) {
            console.log('resetting selectFeatures result:', results);
          })
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

  // getCritInExtCnt: function(c) {
  //   var me = this;

  //   if (c == 'None' ) { //|| c == '1=1') {
  //     // resetting scorecard & config
  //     console.log('getCritInExtCnt, skipping work, setting crit-counters to 0. c:',c);
  //     me.setCriteriaInExtentCount(0);
  //     me.setCriteriaFullExtentCount(0);
  //   } else {
  //     var e = this.getMap();

  //     if (e) {
  //       console.log('getCritInExtCnt, doing work, c:',c);

  //       var qt = new esri.tasks.QueryTask(this.getFL_Well_Url());
  //       var q  = new esri.tasks.Query(); 

  //       q.geometry = e.extent;
  //       q.where = c;
  //       qt.executeForCount(q, function(count) {
  //         me.setCriteriaInExtentCount(count);
  //         console.log('getCritInExtCnt, # in crit extent: ',count)
  //       });  
  //       // q.destroy();
  //       // qt.destroy();
  //     } else {
  //       console.log('getCritInExtCnt - no map!');
  //     }

  //   }
  // },

  getCriteriaFromFilter: function(c) {  // really from app/filter/edit.js
    var  me = this;
    this.setCriteria(c);

    console.log('getCriteriaFromFilter, c:',c)
      if (c == 'None') {  // resetting scorecard & config

        me.setCriteriaInExtentCount(0);
        me.setCriteriaFullExtentCount(0);
          me.dotheWork();
      } else {
        var qt = new esri.tasks.QueryTask(this.getFL_Well_Url() );
        var q  = new esri.tasks.Query(); 
        var m = this.getMap();
        var l = m.getLayer('wells').fullExtent;;

        q.where = c;

        console.log('getCriteriaFromFilter getting ready!  l.extent :', l, ', c :', c, 'm :', m);
        q.geometry = l.fullExtent;
        qt.executeForCount(q, function(count) {    // get total points with criteria
          console.log('getCriteriaFromFilter, get full crit : ',count)
          me.setCriteriaFullExtentCount(count);
                
        }).then(function() {
            var qt2 = new esri.tasks.QueryTask(me.getFL_Well_Url());
            var q2  = new esri.tasks.Query(); 

            q2.geometry = m.extent;
            q2.where = c;
            console.log('getCriteriaFromFilter - then set up for setCriteriaInExtentCount ');
 
            qt2.executeForCount(q2, function(count) {   // get points with criteria in extent
              me.setCriteriaInExtentCount(count);
              console.log('getCriteriaFromFilter - then setCriteriaInExtentCount :: ',count);
            }).then(function() {

              me.dotheWork();
              console.log('getCriteriaFromFilter - then - then - dothework');

            }); 
//                  me.getCritInExtCnt(me.getCriteria() );
        })
      }
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
    // q.destroy();
    // qt.destroy();

  },

	setInitExtent: function() {
		this.map.setExtent(this.getInitialExtent());
	},

	onResize: function() {    // keeps map & screen coordinated
//    console.log('onResize fired');
		if (this.map) {
//      console.log('this.map', this.map)
   		   this.map.resize();			
		}
  },
    selectPoint: function(objId) {
      var me = this;
      var map = this.getMap();
      var fl = map.getLayer("wells");
      var q = new esri.tasks.Query();
      var p = this.getPopup();

    var pv = PWApp.app.getView('RecordView');
    var s  = PWApp.app.getStore('RecordStore');
    var ans;
//      console.log('selectPoint, p:',p);

//      q.objectIds = [objId];
      q.geometry = objId.geometry;
      fl.queryFeatures(q, function(featureSet) {
    //    console.log('featureSet f:', featureSet); 
        p.setFeatures(featureSet.features);
        console.log('featureSet f.length:', featureSet.features.length); 

        var i=0,len=featureSet.features.length;
        for (; i<len; ) { 
          ans = s.find('OBJECTID', featureSet.features[i].attributes.OBJECTID);
          console.log('popup p:', ans);
          
        //  console.log('selMod :', pv.getSelectionModel()); // .select(ans);
          i++;
        }
      }); 
    } 
});
