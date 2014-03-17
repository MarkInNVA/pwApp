Ext.define('PWApp.view.StoreTestList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.storetestlist',


    store: 'GeolAgeStore',

    columns: [
        {header: 'Name',  dataIndex: 'GEOLAGE', width:150}
    ]
});
