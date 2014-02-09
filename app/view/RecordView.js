Ext.define('PWApp.view.RecordView', {
	extend: 'Ext.grid.Panel',

	alias: 'widget.recordview',

    requires:[ 'Ext.layout.container.Fit' ], 

    title: 'Aavailable records',

	// layout:{
	// 	type: 'hbox',
	// 	pack: 'start',
	// 	align: 'stretch'
	// },
	store: 'RecordStore',
	multiSelect: true,
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

//    scroll: true,
   	initComponent: function() {
//   		console.log('RecordView initComponent');

        this.columns = [

            {header: 'ObjectId',  dataIndex: 'OBJECTID',  flex: 1},
            {header: 'UniqId',  dataIndex: 'UNIQID',  flex: 1},
            {header: 'Well Name',  dataIndex: 'WELLNAME',  flex: 1},
            {header: 'API',  dataIndex: 'API',  flex: 1},
            {header: 'STATE',  dataIndex: 'STATE',  flex: 1},
            {header: 'TDS',  dataIndex: 'TDS',  flex: 1},
            {header: 'pH', dataIndex: 'pH', flex: 1},
            {header: 'Sample date', dataIndex: 'SAMPDATE', flex: 1},
            {header: 'BiCarb', dataIndex: 'BICARB', flex: 1},
            {header: 'Calcium', dataIndex: 'CALCIUM', flex: 1},
            {header: 'Chloride', dataIndex: 'CHLORIDE', flex: 1},
            {header: 'Magnesium', dataIndex: 'MAGNESIUM', flex: 1},
            {header: 'Potassium', dataIndex: 'POTASSIUM', flex: 1}
        ];

        this.callParent(arguments);
    }
});  