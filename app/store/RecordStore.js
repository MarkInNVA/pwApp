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


//    fields: ['name', 'email'],
    // data: [
    //     {name: 'Ed',    email: 'ed@sencha.com'},
    //     {name: 'Tommy', email: 'tommy@sencha.com'}
    // ]


});
