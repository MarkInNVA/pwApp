Ext.define('PWApp.controller.RecordController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
    	models: [ ],
    	stores: [ 'RecordStore' ],
    	views : [ 'RecordView'],

    	init : function() {

 //  		console.log('filterEditController : init');

      this.control({
        'viewport > recordview': {
          render: this.onRecordViewRendered
        }
      })

			// this.application.on({
   //      		updateTotalPoints: this.updateTotalPoints,
   //          	scope: this
   //      	});

		}
	},
  onRecordViewRendered: function(e)  {
 //   console.log('onRecordViewRendered :', e);
  }
// 	updateTotalPoints: function(count) {
// 		console.log('Wells :', count);
// 		// var t = Ext.getCmp('totalPointsId'); //.setValue(count);
// //		var t = Ext.ComponentQuery.query('textfield#totalPointsId');

// //		Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(count);
// 	}
});