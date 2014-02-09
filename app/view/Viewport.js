Ext.define('PWApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit'
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

            xtype: 'recordview',
            layout: 'fit',
            scroll: true,
            region: 'south',
            collapsible: true,
            split: true,
            height: 150,
            html: 'Stuff will go here'
        },
        // {
        //     xtype: 'fieldlist',
        //     region: 'east',
        //     width: 250
        // },
        {
            xtype: 'mapview',
            region: 'center'
        }
    ]
});
