Ext.define('PWApp.view.RecordView', {
	extend: 'Ext.grid.Panel',

	alias: 'widget.recordview',

    requires:[ 'Ext.layout.container.Fit' ], 

    title: 'Available samples in extent, meeting criteria. (max samples shown is 1,000)',

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
            {header: 'ID',  dataIndex: 'OBJECTID',  width:60},
            {header: 'API',  dataIndex: 'API',  width:100},
            {header: 'Latitude',  dataIndex: 'LAT',  width:65},
            {header: 'Longitude',  dataIndex: 'LONG_',  width:65},
            {header: 'STATE',  dataIndex: 'STATE',  width:55},
            {header: 'Well Type',  dataIndex: 'WELLTYPE',  width:60},
            {header: 'Formation',  dataIndex: 'FORMATION',  width:100},
            {header: 'Geologic Age',  dataIndex: 'GEOLAGE',  width:100},
            {header: 'Upper Depth',  dataIndex: 'UPPERDEPTH',  width:80},
            {header: 'Lower Depth',  dataIndex: 'LOWERDEPTH',  width:80},
            {header: 'Reference',  dataIndex: 'REFERENCE',  width:90},
            {header: 'TDS',  dataIndex: 'TDS',  width:60},
            {header: 'TOC',  dataIndex: 'TOC',  width:60},
            {header: 'pH', dataIndex: 'PH', width:60},

            {header: 'ALKCACO3', dataIndex: 'ALKCACO3', width:60},
            {header: 'Bromide', dataIndex: 'BROMIDE', width:60},
            {header: 'Calcium', dataIndex: 'CALCIUM', width:60},
            {header: 'Chloride', dataIndex: 'CHLORID', width:60},
            {header: 'Potassium', dataIndex: 'POTASSM', width:60},
            {header: 'Sodium', dataIndex: 'SODIUM', width:60},
            {header: 'Sulfate', dataIndex: 'SULFATE', width:60},
            {header: 'dD', dataIndex: 'dD', width:60},
            {header: 'd13C', dataIndex: 'd13C', width:60},
            {header: 'd180', dataIndex: 'd18O', width:60}
        ];

        this.callParent(arguments);
    }
});  