Ext.define('PWApp.view.filter.BasinLineView', {

	extend: 'Ext.panel.Panel',

	alias: 'widget.filter.basinlineview',

	initComponent: function(){
		var basinStore = Ext.StoreManager.lookup('BasinStore');		

		this.items = [
			{
				xtype: 'panel',
				//flex: 1,
				layout: 'hbox',
				bodyPadding: 5,
				items:[
					{
						xtype: 'combo',
						myNameIs: 'basinCombo', 
						//  itemId: 'chemCombo',
						store: basinStore,
						queryMode: 'local',
						forceSelection: false,
						editable: true,
						displayField: 'BASIN',
						fieldLabel: 'Basin:',
						labelWidth: 40,
						width: 285
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
