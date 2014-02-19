Ext.define('PWApp.controller.filterEditController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],

    	init : function() {
        
        this.control({
            'filteredit #comboField' : {
                select: this.comboFieldSelect
            }
        });

//   		console.log('filterEditController : init');

			// this.application.on({
   //      		updateTotalPoints: this.updateTotalPoints,
   //          	scope: this
   //      	});

		}
  },
  
  comboFieldSelect: function(combo, records, eOpts) {
//    console.log('edit-comboFieldSelect, combo:', combo, ', records: ', records, ', eOpts: ', eOpts);
debugger
    console.log('edit-comboFieldSelect, records: ', records[0].data.type ); //combo.data); // .data.type);
  },

  updateTotalPoints: function(count) {
	 console.log('Wells :', count);
		// var t = Ext.getCmp('totalPointsId'); //.setValue(count);
//		var t = Ext.ComponentQuery.query('textfield#totalPointsId');

//		Ext.ComponentQuery.query('textfield#totalPointsId')[0].setValue(count);
  }
});
