Ext.define('PWApp.view.MapView', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.mapview',

	// title: 'Organic Petrology Lab Interactive Webmap',
	// titleAlign: 'center',

    requires:[
            'Ext.layout.container.Fit'
    ], 

	layout:{
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},
	// tools: [
	// 	{
	// 		type: 'help',
	// 		tooltip: 'Seek Help!',
	// 		callback: function(panel,tool,event) {
	// 			console.log('panel :',panel,', tool :',tool,', event :',event);
	// 		}
	// 	}, 
	// 	{
	// 		type: 'gear',
	// 		tooltip: 'Gear Head!',
	// 		callback: function(panel,tool,event) {
	// 			console.log('panel :',panel,', tool :',tool,', event :',event);
	// 		}
	// 	}
	// ],
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
						text: 'Help',
						myNameIs: 'help'
					},
					{
						xtype: 'button',
						text: 'Initial Extent',
						myNameIs: 'initialExtent'
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