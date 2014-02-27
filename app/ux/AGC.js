Ext.define('Ext.ux.AGC', {
	extend: 'Ext.Component',
	alias: 'widget.agc',
	style: {
		height:'100%',
		width: '100%',
		'z-index': 100
	},
	config:{

		arcMap: null,
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
    criteria: null,
    myTemplate: null
	},

	initComponent: function() {
		dojo.require("esri.map");
    dojo.require("esri.layers.FeatureLayer");
    dojo.require("esri.layers.agstiled");
    dojo.require("esri.tasks.query");
    dojo.require("esri.dijit.PopupTemplate");
    dojo.require("esri.dijit.Popup");
//    dojo.require("dojo.Deferred");

    this.setDyn_Well_Url("http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app3/MapServer") ;
    this.setFL_Well_Url( "http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app3/MapServer/0");
    this.setCache_Well_Url("http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app3_cache/MapServer");
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
      		{ "level": 12, "resolution": 38.21851414253662, "scale": 144447.638572    },  
      		{ "level": 13, "resolution": 19.1092570712683,  "scale": 72223.819286     },
          { "level": 14, "resolution": 9.55462853563415,  "scale": 36111.909643     },
          { "level": 15, "resolution": 4.77731426794937,  "scale": 18055.954822     },
          { "level": 16, "resolution": 2.38865713397468,  "scale": 9027.977411      },
          { "level": 17, "resolution": 1.19432856685505,  "scale": 4513.988705      }

      	];

      popup = esri.dijit.Popup({
        titleInBody: false
      }, Ext.Element(document.createElement('div')) );

      me.setPopup(popup);

    	map = new esri.Map(local_id, {
       	basemap: "topo", 
				center: [-98.579500,39.828175],  // c. center of U.S.
				zoom: 3,
      	logo: false,
      	showAttribution:false,
      	lods: lods,
        infoWindow: popup
  //    	sliderStyle: "large"
          //  	wrapAround180: true
    	});

      map.on("load", function() {

        me.setArcMap(map);
        me.setInitialExtent(me.getArcMap().extent);
        me.setCriteria('1=1');      // everything
        me.setMyTemplate(template);
        me.getTotalPointCount();
 //       me.fetchGeolAge();
    	});

      var template = new esri.dijit.PopupTemplate({
          title: "Well",
          description:"ID: {OBJECTID}<BR>API: {API}<BR>Latitude: {LAT}<BR>Longitude: {LONG_}<BR>State: {STATE}<BR>Well type: {WELLTYPE}<BR>" +
          "Formation :{FORMATION}<BR>Geologic Age: {GEOLAGE}<BR>Upper depth: {UPPERDEPTH}<BR>Lower depth: {LOWERDEPTH}" + 
          " <BR>Reference: {REFERENCE}<BR>TDS: {TDS}<BR>TOC: {TOC}"
      });
        // {name: 'ID', type: 'int'},  
        // {name: 'API', type: 'string'}, 
        // {name: 'LAT', type: 'number'},
        // {name: 'LONG', type: 'number'},
        // {name: 'STATE', type: 'string'}, 
        // {name: 'WELLTYPE', type: 'string'},
        // {name: 'FORMATION', type: 'string'},
        // {name: 'GEOLAGE', type: 'string'},
        // {name: 'UPPERDEPTH', type: 'number'},
        // {name: 'LOWERDEPTH', type: 'number'},        
        // {name: 'REFERENCE', type: 'string'},

        // {name: 'TDS', type: 'float'}, 
        // {name: 'TOC', type: 'float'}, 
        // {name: 'PH', type: 'float'}, 
        // {name: 'ALKCACO3', type: 'float'}, 
        // {name: 'BROMIDE', type: 'float'}, 
        // {name: 'CALCIUM', type: 'float'}, 
        // {name: 'CHLORID', type: 'float'}, 
        // {name: 'POTASSM', type: 'float'}, 
        // {name: 'SODIUM', type: 'float'}, 
        // {name: 'SULFATE', type: 'float'}, 
        // {name: 'dD', type: 'float'}, 
        // {name: 'd13C', type: 'float'},         
        // {name: 'd18O', type: 'float'} 

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
          mode: esri.layers.FeatureLayer.MODE_SELECTION,  // ONDEMAND    SNAPSHOT    SELECTION
          outFields:["*"] //,

//          opacity: 0.7 //,
//          visible: true
      });      

      featureLayer.on("click", function(evt){
//console.log('fl click, evt: ',evt.graphic.attributes.OBJECTID);
        me.selectGrid(evt.graphic.attributes.OBJECTID, evt.graphic.attributes.OBJECTID);
      //  me.selectPoint(evt.graphic);

      });

       map.on("layer-add-result", function (evt) {

        if (evt.layer.id == 'wells') {

            var s = Ext.StoreManager.lookup('FieldStore');
            s.add(evt.layer.fields);

            me.processExtentOrCriteriaChange('1=1', 'map-add');
          }
       });

//     map.addLayer(dynamicLayer);
      map.addLayer(tileLayer);
      map.addLayer(featureLayer);

      map.on("extent-change", function(e){
        if (me.getCriteria() == null) {
          me.setCriteria('1=1');  // everything
        }
//        console.log('map.on extent-change, crit :',me.getCriteria())
        me.getPopup().hide();

        var recStore = Ext.StoreManager.lookup('RecordStore');
        recStore.removeAll();

//        me.getCriteriaFromFilter(me.getCriteria())
        me.processExtentOrCriteriaChange(me.getCriteria(), 'map-extent_change');
      });

		}

		dojo.ready(init);
	},

  setMap: function() {
    var me = this;
    var theMap = me.getArcMap();

//    console.log('setMap :', theMap);

    var flayer = theMap.getLayer('wells');
    var clayer = theMap.getLayer('tiles');

    var qt = new esri.tasks.QueryTask(me.getFL_Well_Url() );
    var q  = new esri.tasks.Query();

    flayer.clear();
    clayer.setVisibility(false);
//    console.log('setMap 2');
    
    if (me.getCriteria() == '1=1'){
      // nothing
      flayer.setDefinitionExpression('1=1')
    } else {
      flayer.setDefinitionExpression(me.getCriteria() );
      
    }
    q.geometry = theMap.extent;
          
    flayer.selectFeatures(q,esri.layers.FeatureLayer.SELECTION_NEW, function(results) {
//    console.log('doing selectFeatures result:', results);
      var b= [];
      Ext.Array.each(results, function(name, index, resultsItSelf) {
        b.push(name.attributes);
//      console.log('name :', name, ', index :', index );
      });

      var s = Ext.StoreManager.lookup('RecordStore');
      s.removeAll();
      //console.log('s :',s); 
      s.add(b);

    })

    me.setMapType("Cache");

    PWApp.app.fireEvent('countUpdate', me.getTotalCount(), me.getExtentCount(), 
      me.getMapType(), me.getCriteria() , me.getCriteriaFullExtentCount(), me.getCriteriaInExtentCount()  );

  },

  // have total point count, get points in current extent, get count with criteria in current extent, get total with criteria
  //  
  resetMap: function() {
    var me = this;
    var theMap = me.getArcMap();
    var flayer = theMap.getLayer('wells');
    var clayer = theMap.getLayer('tiles');
    var cnt;
    if (me.getCriteria() == '1=1') {
      cnt = me.getExtentCount();
    } else {
      cnt = me.getCriteriaInExtentCount();
    }
//     if (cnt > 50000) {
//       clayer.opacity = .4;
// console.log('cnt :', cnt, ', op: .4' );
//     };
//     if (cnt < 50000 && cnt > 25000) {
//       clayer.opacity = .6;
// console.log('cnt :', cnt, ', op: .6' );
//     } ;
//     if (cnt <  25001) {
//       clayer.opacity = .8;
// console.log('cnt :', cnt, ', op: .8' );
//     } ;
    
    flayer.clear();
//    console.log('resetMap, after clear flayer :', flayer);
    clayer.setVisibility(true);
    me.setMapType("Cache");    

    PWApp.app.fireEvent('countUpdate', me.getTotalCount(), me.getExtentCount(), 
      me.getMapType(), me.getCriteria() , me.getCriteriaFullExtentCount(), me.getCriteriaInExtentCount()  );

    // console.log('resetMap -  total count :', me.getTotalCount(), ', count in extent', me.getExtentCount(), 
    //   ', map type :', me.getMapType(), ', criteria :', me.getCriteria(), ', criteria full extent :', 
    //   me.getCriteriaFullExtentCount(), ', criteria in extent :', me.getCriteriaInExtentCount()  );
  },

  processExtentOrCriteriaChange: function(criteria, caller) {
    var me = this;
    var qt = new esri.tasks.QueryTask(me.getFL_Well_Url() );
    var q  = new esri.tasks.Query(); 
    var theMap = this.getArcMap();
    
//    console.log('processExtentOrCriteriaChange, criteria :', criteria, ', caller :', caller);
    me.setCriteria(criteria)    
    if (theMap == null) {
//      console.log('processExtentOrCriteriaChange - no map')
    } else {
 //     console.log('processExtentOrCriteriaChange - map:', theMap);
      me.getPopup().hide();
      q.geometry = theMap.extent;  // in current extent
      qt.executeForCount(q, function(count){            //  get points in current extent, no criteria
        me.setExtentCount(count);
        if (me.getCriteria() == '1=1') {  //   no criteria

          me.setCriteriaInExtentCount(0);
          me.setCriteriaFullExtentCount(0);

          if ( count < 1000) {
          //  console.log('count < 1000');
            me.setMap();
          } else {
          //  console.log('count not < 1000');
            me.resetMap();
          }
        } else {   // have criteria

          q.where = me.getCriteria();  // in criteria, in extent
          q.geometry = theMap.extent;  // in current extent

          qt.executeForCount(q, function(count) {       //  get points in current extent with criteria
            me.setCriteriaInExtentCount(count);
//            console.log('pts in current ext/crit :', count)
          }).then(function() {
            var a = me.getArcMap().getLayer('wells').fullExtent;
  //          console.log('full ext : ', a)
            q.geometry = me.getArcMap().getLayer('wells').fullExtent; // in criteria, in full extent
            qt.executeForCount(q, function(count) {     //  get total points with criteria
              me.setCriteriaFullExtentCount(count);
    //          console.log('pts in full ext/crit :', count)
            }).then(function() {
              if ( me.getCriteriaInExtentCount() < 1000 ) {
              //  console.log('count < 1000');
                me.setMap();
              } else {
              //  console.log('count not < 1000');
                me.resetMap();
              }
            })
          })  // then

        }
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
  //    console.log('total count:',results)
    });
  },

	setInitExtent: function() {
		this.getArcMap().setExtent(this.getInitialExtent());
	},

	onResize: function() {    // keeps map & screen coordinated
//    console.log('onResize fired');
    var m = this.getArcMap();
		if (m) {
//      console.log('this.map', this.map)
   		   m.resize();			
		}
  },
//   selectPoint: function(objId) {
//     var me = this;
//     var map = this.getArcMap();
//     var fl = map.getLayer("wells");
//     var q = new esri.tasks.Query();
//     var p = this.getPopup();

//     var pv = PWApp.app.getView('RecordView');
//     var s  = PWApp.app.getStore('RecordStore');
//     var ans;
// //      console.log('selectPoint, p:',p);

// //      q.objectIds = [objId];
//     q.geometry = objId.geometry;
//     fl.queryFeatures(q, function(featureSet) {
//     //    console.log('featureSet f:', featureSet); 
//       p.setFeatures(featureSet.features);
//       console.log('featureSet f.length:', featureSet.features.length); 

//       var i=0,len=featureSet.features.length;
//       for (; i<len; ) { 
//         ans = s.find('OBJECTID', featureSet.features[i].attributes.OBJECTID);
// //        console.log('ans :', ans)
// //        console.log('popup objectId:', featureSet.features[i].attributes.OBJECTID );
//         me.pv.getSelectionModel().select(ans);
//         //  console.log('selMod :', pv.getSelectionModel()); // .select(ans);
//         i++;
//       }
//     }); 
//   },

selectPoint: function(objId) {
  var m = this.getArcMap();
  var fl = m.getLayer("wells");
  var q = new esri.tasks.Query();
   var p = this.getPopup();
   var t = this.getMyTemplate();
   var s  = PWApp.app.getStore('RecordStore');

   q.objectIds = [objId];

   fl.selectFeatures(q, esri.layers.FeatureLayer.SELECTION_ADD, function(featureSet) {
     var pp = new esri.geometry.Point(featureSet[0].geometry.x,featureSet[0].geometry.y,  featureSet[0].geometry.spatialReference);
     p.clearFeatures();
     p.setFeatures(featureSet);
     p.show(pp);
   });
 },
 selectGrid: function(objId, id) {
   // var m = this.getArcMap();
   // var fl = m.getLayer("wells");
   // var q = new esri.tasks.Query();
   // var p = this.getPopup();
   // q.objectIds = [objId];
 //  fl.selectFeatures(q, esri.layers.FeatureLayer.SELECTION_NEW);

//--------
   //   console.log('a:',a,', b:',b,', c:',c);
    var pv = Ext.ComponentQuery.query('recordview')[0]; // PWApp.app.getApplication().getView('RecordView');
//    var pv = this.getApointView();
    var s = PWApp.app.getStore('RecordStore');

    var ans = s.find('OBJECTID', id);
//   console.log('selectGrid, objId:',objId,', pv: ', pv, ', s: ', s, ', ans: ', ans, ', id: ,', id);
    pv.getSelectionModel().select(ans);
 } 
});
