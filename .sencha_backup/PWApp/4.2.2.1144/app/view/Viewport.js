Ext.define('PWApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },

    items: [
        // {
        //     xtype: 'workspace',
        //     region: 'east',
        //     collapsible: true,
        //     split: true,
        //     width: 300
        // },
        {
            xtype: 'mapview',
            region: 'center'
        }
    ]
});
