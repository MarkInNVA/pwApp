Ext.define('PWApp.store.NullStore', {
    
    extend: 'Ext.data.Store',
    
    storeId: 'NullStore',

    fields: ['name' ],

    data : [
        { name: 'is NULL' },
        { name: 'is not NULL' }
    ] 
    	
});
