Ext.define('PWApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'workspaceview',
            region: 'south',
            collapsible: true,
            split: true,
            height: 200
        },
        {
            xtype: 'mapview',
            region: 'center'
        }
    ]
});
