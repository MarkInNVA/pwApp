Ext.define('PWApp.store.StateStore', {
    extend: 'Ext.data.Store',
    storeId: 'StateStore',

    fields: [ 'abbr' ],
    data: [
        { abbr: 'KY' },
        { abbr: 'MD' },
        { abbr: 'NY' },
        { abbr: 'OH' },
        { abbr: 'PA' },
        { abbr: 'TN' },
        { abbr: 'WV'}
    ]    
});
