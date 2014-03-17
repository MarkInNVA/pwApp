Ext.define('PWApp.store.FieldStore', {
    extend: 'Ext.data.Store',
    model: 'PWApp.model.FieldModel',
    autoLoad: true,
    data: null,
 //   storeId: 'TestFieldStoreId',
    proxy: {
    	type: 'memory',
    	reader: {
    		type:'json' //,
    	}
    }
});
