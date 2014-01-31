Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    stores: [ 'TestFieldStore' ],
    views : [ 'MapView', 'testField.TestFieldView', 'filter.edit' ],
    controllers: [ 'MapController', 'filterEditController', 'HelpController', 'ScoreCardController' ],   // [ 'TestFieldController', 'Main'  ],

    launch: function() {
  //  	console.log('app launch');
    	// var m = Ext.ComponentQuery.query('agc')[0];
    	// var mm = m.map.getLayer('points');
    	// this.getStore('TestFieldStore').add(mm);

    }
});
