Ext.define('PWApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
    ],

    layout: {
//        type: 'fit'
        type: 'border'
    },

    items: [
        // {
        // xtype: 'userlist',
        // title: 'Fields',
        // html: 'List of fields will go here'
        // },
        {
//            xtype: 'workspace',
            xtype: 'userlist',
            region: 'west',
            collapsible: true,
            split: true,
            width: 300
        },
        {
            xtype: 'mapview',
            region: 'center'
        }
    ]
});
