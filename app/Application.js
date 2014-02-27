Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    stores:         [   'RecordStore', 
                        'FieldStore', 
                        'GeolAgeStore'
                    ],
    
    views :         [   'MapView', 
                        'filter.edit', 
                        'RecordView',
                        'TestFieldView',
                        'StoreTestList' 
                    ],

    // models:         [    doesn't seem to help
    //                     'GeolAgeModel'
    //                 ],

    controllers:    [   'MapController', 
                        'filterEditController', 
                        'HelpController', 
                        'ScoreCardController' , 
                        'RecordController' 
                    ],  

    launch: function() {
  //  	console.log('app launch');
    	// var m = Ext.ComponentQuery.query('agc')[0];
    	// var mm = m.map.getLayer('points');
    	// this.getStore('TestFieldStore').add(mm);

    }
});
