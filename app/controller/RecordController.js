Ext.define('PWApp.controller.RecordController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    models: [ ],
    stores: [ 'RecordStore' ],

    refs: [
        {
            ref: 'AGC',
            selector: 'agc'
        },
        {
            ref: 'recordView',
            selector: '[xtype=layout.recordview]'
        }

    ],    

    	init : function() {

 //  		console.log('filterEditController : init');

        this.control({
          '[xtype=layout.recordview]': {
            itemclick: this.onItemClicked
          }
        });

  	   this.application.on({
              countUpdate: this.updateCount,
                scope: this
        });


       this.application.on({
              haveTotalPoints: this.updateTotal,
                scope: this
        });

		},


  onLaunch: function() {
  //  console.log('controller Main - launch');
  },  

  onRecordViewRendered: function(e)  {
 //   console.log('onRecordViewRendered :', e);
  },

  onItemClicked: function(grid, record) {
    var me = this;
    var map = this.getAGC().getArcMap();
    var agc = this.getAGC()

    var fl = map.getLayer("wells");
    var q = new esri.tasks.Query();
    var p = agc.getPopup();

    q.objectIds = [record.data.OBJECTID];
    fl.queryFeatures(q, function(featureSet) {
      agc.selectPoint(featureSet.features[0]);  
      var pp = new esri.geometry.Point(featureSet.features[0].geometry.x,featureSet.features[0].geometry.y,  featureSet.features[0].geometry.spatialReference);

      p.setFeatures(featureSet.features);
      p.show(pp);
    }); //.then(function( pp) {

  },

  updateTotal: function(tc) { 
    // console.log('updateTotal :', tc);
    // this.getMyRecordView().setTitle('Currently showing ' + tc + 
    //   ' sample points on map. To activate map, reduce number of points to below 1,000, either by applying a filter or changing map extent (pan or zoom).');
//    console.log('RV :' , this.getView('RecordView')[0]); // this.getRecordView());
  },

  updateCount: function(tc, ec, mt, crit, critFullCnt, critInExtCnt) { 
    var message="";
//    console.log('updateCount :', tc, ', ec :', ec, 'critInExtCnt :', critInExtCnt, ', crit :', crit );
    if (crit == '1=1') {
      if (ec < 1000) {
        message =  Ext.util.Format.number(ec, '0,0') + ' samples visible' 
      } else {
        message = Ext.util.Format.number(ec, '0,0') + ' samples visible.'         
        message += ' For sample details, reduce number of samples to below 1000,' 
        + ' either by applying a filter or changing map extent (pan or zoom).';
      }

    } else {

      
      if(critInExtCnt < 1000) {
        message = Ext.util.Format.number(critInExtCnt, '0,0') + ' samples visible'
      } else {
        message = Ext.util.Format.number(critInExtCnt, '0,0') + ' sample visible.';  
        message += ' For sample details, reduce number of samples to below 1000, ' 
        + ' either by applying a filter or changing map extent (pan or zoom).';

      }
    }
    this.getRecordView().setTitle(message); 
      
//    console.log('RV :' , this.getView('RecordView')[0]); // this.getRecordView());
  }

});
