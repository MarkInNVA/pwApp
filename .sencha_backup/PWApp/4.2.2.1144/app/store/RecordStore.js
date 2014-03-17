Ext.define('PWApp.store.RecordStore', {
    extend: 'Ext.data.Store',
    model: 'PWApp.model.RecordModel',
    autoLoad: true,
    data: null,
 //   storeId: 'TestFieldStoreId',
    proxy: {
    	type: 'memory',
    	reader: {
    		type:'json' //,
//    		root:'fields'
    	}
    }

});
