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

//Ext.require([
//    'Ext.ux.AGC'
//]);


Ext.application({
    name: 'PWApp',

    extend: 'PWApp.Application',

    requires: ['Ext.ux.AGC'],
    
    autoCreateViewport: true
});
