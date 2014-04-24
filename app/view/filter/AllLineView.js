Ext.define('PWApp.view.filter.AllLineView', {

	extend: 'Ext.panel.Panel',

	alias: 'widget.filter.alllineview',

	initComponent: function(){
		var fieldStore = Ext.StoreManager.lookup('FieldStore');		
		var nullStore = Ext.StoreManager.lookup('NullStore');

		this.items = [
			{
				xtype: 'panel',
				//flex: 1,
				layout: 'hbox',
				bodyPadding: 5,
				items:[
					{
						xtype: 'combo',
						myNameIs: 'fieldCombo', 
						//  itemId: 'chemCombo',
						store: fieldStore,
						queryMode: 'local',
						forceSelection: false,
						editable: false,
						displayField: 'name',
						fieldLabel: 'Any :',
						labelWidth: 40,
						width: 140
					},
					{   xtype: 'tbspacer', width: 5  },
					{
						xtype: 'combo',
						myNameIs: 'nullCombo',
						store: nullStore ,
						forceSelection: false,
						editable: true,
						queryMode: 'local',
						align: 'center',
						displayField: 'name',
						valueField: 'name',
						labelWidth:0,
						width: 140
					}

				]
			}
		];
		this.callParent(arguments);
	}
});
