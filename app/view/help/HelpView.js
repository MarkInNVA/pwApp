Ext.define('PWApp.view.help.HelpView', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.helpview',
    
    title: 'Help',
    height: 150,
    width : 350,
    
    layout: 'fit',
   
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'panel',
        html:     '<ul>'
              	+   '<li>Use "+" and "-"  buttons to zoom in and out.</li>'
              	+   '<li>Place cursor on map and drag to change map position.</li>'
              	+   '<li>Click on Initial Extent button to go back to full map view.</li>'
             +   '</ul>' 
         }
});
 