Ext.define('PWApp.store.GeolAgeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PWApp.model.GeolAgeModel'
    ],

    // filters: [{
    //     property: 'field',
    //     value:    'GEOLAGE'

    // } ] ,
    // sorters: [{
    //     property: 'cntry_name',
    //     direction: 'ASC'
    // }],
 //   sortRoot: 'cntry_name',
    // sortOnLoad: true,
    remoteSort: false,
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