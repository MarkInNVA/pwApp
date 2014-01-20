Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    views: [ 'MapView' ],

    controllers: [ 'Main' , 'MapController' ],

    stores: [ ]
});
