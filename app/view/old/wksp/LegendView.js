Ext.define('PWApp.view.wksp.LegendView', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.legendView',


    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:0px'
    },

    requires:[
        'Ext.layout.container.VBox'
    ],
 //   	afterRender: function(t, eOpts){
	// 	var local_id = this.getId();
	// 	var s = local_id + '-body';
	// //	console.log(s);
	// 	var map = Ext.ComponentQuery.query('agc')[0];
	// 	console.log(map);
	// 	map.doLegend(s);
	// //setSVal(s); 
	// 	this.callParent(arguments); 
	// },
    html: 'this'
});