Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    views: [ 'mapview.MapView', 'wksp.FilterHolder', 'wksp.Workspace', 'wksp.WorkspaceView', 'wksp.LegendView' ],

    controllers: [ 'Main' ],

    stores: [ ]
});
