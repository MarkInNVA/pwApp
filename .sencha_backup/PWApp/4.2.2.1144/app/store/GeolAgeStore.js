Ext.define('PWApp.store.GeolAgeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PWApp.model.GeolAgeModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'PWApp.model.GeolAgeModel',
            storeId: 'GeolAgeStore',
            remoteFilter: true,
 //           filters: [{property: 'id', value: 1}],
            proxy: {
                type: 'ajax',
                url: 'getDistinct.php?field=GEOLAGE',
//                url: 'getDistinct.php',
                reader: {
                    type: 'json',
                    root: 'data',
                    record: 'attributes'
                }
            }
        }, cfg)]);
    }
});