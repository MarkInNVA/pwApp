Ext.define('PWApp.store.WellTypeStore', {
    
    extend: 'Ext.data.Store',
    
    storeId: 'WellTypeStore',

    fields: ['name' ],

    data : [
        { name: 'gas' },
        { name: 'oil' },
        { name: 'oil & gas' },
        { name: 'water' }
    ] 
    	
});
