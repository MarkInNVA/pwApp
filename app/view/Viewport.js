Ext.define('PWApp.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires:[ 'Ext.layout.container.Border' ],

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'layout.recordview',
            // xtype: 'panel',
            layout: 'fit',
            scroll: true,
            region: 'south',
            collapsible: true,
            split: true,
            height: 150,
            html: 'Stuff will go here'
        },
        {
//            xtype: 'panel',
            xtype: 'layout.mapview',
            region: 'center'
        }
    ]
});
