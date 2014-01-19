Ext.define('PWApp.view.wksp.Workspace', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.workspace',

	views: [  ],

    title: 'Tools',
    // width: 300,
    height: 300,
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:5px'
    },

    requires:[
        'Ext.layout.container.Accordion'
    ],

   //  afterRender: function(t, eOpts){
   //      var map = Ext.ComponentQuery.query('agc')[0];
   //      console.log('doLegend from Workspace');
   // //     this.map.doLegend();
   //  },

    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [{
        title: 'Filter',
        xtype: 'filterHolder'
    },{
        title: 'Legend',
        xtype: 'legendView'
    }
    ],
    renderTo: Ext.getBody()
});