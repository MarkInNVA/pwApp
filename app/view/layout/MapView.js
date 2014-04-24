Ext.define('PWApp.view.layout.MapView', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.layout.mapview',

    requires:[ 'Ext.layout.container.Fit' ], 

	layout:{
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},

	initComponent: function(){
		var me = this;
		this.items = [
			{
				xtype: 'panel',
				flex: 1,
				layout: 'fit',
				tbar: [
					{
						xtype: 'button',
						text: 'Initial Extent',
						itemId: 'initialExtent'
					},
					{
						xtype: 'button',
						text: 'Filter',
						itemId: 'showFilter'
					},
					{
						xtype: 'button',
						text: 'Basemap',
						itemId: 'baseMapSwitch',
						anchorSize:75,
						menu: [
								{text: 'Topo' },
								{text: 'Streets' },
								{text: 'Ocean' },
								{text: 'Nat Geo' }
						]
					},
					{
						xtype: 'button',
						text: 'Scorecard',
						itemId: 'showScore'
					},										
					// {
					// 	xtype: 'button',
					// 	text: 'Legend',
					// 	itemId: 'showLegend'
					// },										
					{	xtype: 'tbfill' },
					{
						xtype: 'button',
						text: 'Help',
						itemId: 'help'
					},
					
					{   xtype: 'tbspacer', width: 20  }
				],
				items:[
					{
						itemId: 'locationmap',
						xtype: 'agc'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});