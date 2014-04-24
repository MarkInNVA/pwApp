Ext.define('PWApp.store.BasinStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PWApp.model.BasinModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'PWApp.model.BasinModel',
            storeId: 'BasinStore',
            remoteFilter: true,
 //           filters: [{property: 'id', value: 1}],
            proxy: {
                type: 'ajax',
                url: 'getDistinct.php?field=BASIN',
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