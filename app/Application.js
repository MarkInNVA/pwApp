Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    views: [ 'MapView', 'WorkspaceView' ],

    controllers: [ 'Main' ],

    stores: [ ]
});
