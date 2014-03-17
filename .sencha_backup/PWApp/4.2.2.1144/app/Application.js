Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    stores:         [   'RecordStore',      'FieldStore', 
                        'GeolAgeStore',     'ChemStore',
                        'MathStore',        'StateStore',
                        'FormationStore',   'WellTypeStore'
                    ],
    
    views :         [   'MapView',          'RecordView',
                        'filter.edit',      'filter.ChemLineView'
                           
//                        'TestFieldView',  'StoreTestList' 
                    ],

    controllers:    [   'MapController',    'filterEditController', 
                        'HelpController',   'ScoreCardController', 
                        'RecordController' 
                    ],  

    launch: function() {
  //  	console.log('app launch');
    	// var m = Ext.ComponentQuery.query('agc')[0];
    	// var mm = m.map.getLayer('points');
    	// this.getStore('TestFieldStore').add(mm);

    }
});
