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
    width:500,
    height:250,

//    scroll: true,
   	initComponent: function() {
//   		console.log('RecordView initComponent');

        this.columns = [

            {header: 'ObjectId',  dataIndex: 'OBJECTID', width:125},
            {header: 'UniqId',  dataIndex: 'UNIQID', width:125},
            {header: 'Well Name',  dataIndex: 'WELLNAME', width:225},
            {header: 'API',  dataIndex: 'API', width:125},
            {header: 'STATE',  dataIndex: 'STATE', width:125},
            {header: 'TDS',  dataIndex: 'TDS', width:125},
            {header: 'pH', dataIndex: 'pH', width:125},
            {header: 'Sample date', dataIndex: 'SAMPDATE', width:125},
            {header: 'BiCarb', dataIndex: 'BICARB', width:125},
            {header: 'Calcium', dataIndex: 'CALCIUM', width: 125},
            {header: 'Chloride', dataIndex: 'CHLORIDE', width: 125},
            {header: 'Magnesium', dataIndex: 'MAGNESIUM', width: 125},
            {header: 'Potassium', dataIndex: 'POTASSIUM', width: 125}
        ];

        this.callParent(arguments);
    }
});  