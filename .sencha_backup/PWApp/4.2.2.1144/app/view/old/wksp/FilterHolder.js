Ext.define('PWApp.view.wksp.FilterHolder', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.filterHolder',

    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:0px'
    },

    requires:[
        'Ext.layout.container.VBox'
    ],
    layout: {
        // layout-specific configs go here
        type: 'vbox'
    },
    items: [{
        xtype: 'workspaceview',
        height: 300
    },{
        xtype: 'panel',
        html: 'Boo!'
    }
    ],
    renderTo: Ext.getBody()
});