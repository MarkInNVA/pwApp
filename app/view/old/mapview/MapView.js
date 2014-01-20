Ext.define('PWApp.view.mapview.MapView', {
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
						myNameIs: 'initialExtent'
					},
					{
						xtype: 'button',
						text: 'Filter',
						myNameIs: 'showFilterPanel'
					},
					{ 	xtype: 'tbspacer', width: 15 }, // add a 50px space
					{
						xtype: 'button',
						text: 'Help',
						myNameIs: 'help'
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