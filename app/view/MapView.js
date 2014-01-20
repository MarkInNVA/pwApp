Ext.define('PWApp.view.MapView', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.mapview',

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
					{ 	xtype: 'tbspacer', width: 15 }, // add a 50px space
					{
						xtype: 'button',
						text: 'Help',
						itemId: 'help'
					}
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