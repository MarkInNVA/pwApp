Ext.define('PWApp.controller.RecordController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
      myMap: null,
      myRecordView: null,
      // myNotReadyMessage:
      // myReadyMessage:
    	models: [ ],
    	stores: [ 'RecordStore' ],
    	views : [ 'RecordView'],

    	init : function() {

 //  		console.log('filterEditController : init');

      this.control({
        'viewport > recordview': {
          render: this.onRecordViewRendered,
          itemclick: this.onGridDblClicked
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

		}
	},

  onLaunch: function() {
  //  console.log('controller Main - launch');
    //console.log('name :', this.getMyName())
    this.setMyMap(Ext.ComponentQuery.query('agc')[0]);
    this.setMyRecordView(Ext.ComponentQuery.query('recordview')[0])[0];
//     console.log('MyMapCont :', mapCont.getArcMap() );
//     console.log('MyMap :', this.getMyMap() );
  },  

  onRecordViewRendered: function(e)  {
 //   console.log('onRecordViewRendered :', e);
  },

  onGridDblClicked: function(grid, record) {
 //   console.log('Double clicked on,  record:', record.get('OBJECTID'));
//    var map = Ext.ComponentQuery.query('agc')[0];
    this.getMyMap().selectPoint(record.data.OBJECTID);
//    console.log('comp agc :', Ext.ComponentQuery.query('agc') );
  },

  updateTotal: function(tc) { 
    // console.log('updateTotal :', tc);
    // this.getMyRecordView().setTitle('Currently showing ' + tc + 
    //   ' sample points on map. To activate map, reduce number of points to below 1,000, either by applying a filter or changing map extent (pan or zoom).');
//    console.log('RV :' , this.getView('RecordView')[0]); // this.getRecordView());
  },

  updateCount: function(tc, ec, mt, crit, critFullCnt, critInExtCnt) { 
    var message="";
    console.log('updateCount :', tc, ', ec :', ec, 'critInExtCnt :', critInExtCnt, ', crit :', crit );
    if (crit == '1=1') {
      if (ec < 1000) {
        message =  ec + ' samples visible' 
      } else {
        message = ec + ' samples visible.'         
        message += ' For sample details, reduce number of samples to below 1000,' 
        + ' either by applying a filter or changing map extent (pan or zoom).';
      }

    } else {

      
      if(critInExtCnt < 1000) {
        message = critInExtCnt + ' samples visible'
      } else {
        message = critInExtCnt + ' sample visible.';  
        message += ' For sample details, reduce number of samples to below 1000, ' 
        + ' either by applying a filter or changing map extent (pan or zoom).';

      }
    }
    this.getMyRecordView().setTitle(message); 
      
//    console.log('RV :' , this.getView('RecordView')[0]); // this.getRecordView());
  }

});
