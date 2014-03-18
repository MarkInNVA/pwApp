Ext.define('PWApp.store.IDDBStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PWApp.model.IDDBModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'PWApp.model.IDDBModel',
            storeId: 'IDDBStore',
            remoteFilter: true,
 //           filters: [{property: 'id', value: 1}],
            proxy: {
                type: 'ajax',
                url: 'getDistinct.php?field=IDDB',
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