/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setConfig({
	enabled: true,
	paths: {
		'Ext.ux' : 'app/ux'  
	}
});




Ext.application({
    name: 'PWApp',

    extend: 'PWApp.Application',

    requires: ['Ext.ux.AGC'],
    
    autoCreateViewport: true,

    launch: function() {
            listeners: {
                afterrender: {
                    // var mask = Ext.get('loading-mask'),
                    //     parent = Ext.get('loading-parent');
                    // // Destroy the masks
                    // Ext.fly(mask).fadeOut({ duration: 1500, remove: true });
                    // Ext.fly(parent).fadeOut({ duration: 1500, remove: true });
                //    mask.fadeOut({callback: function(){ mask.destroy(); }});
                //    parent.fadeOut({callback: function(){ parent.destroy(); }});
                }
            } // eo listeners
}
});
