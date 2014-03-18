Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    stores:         [   'RecordStore',      'FieldStore', 
                        'GeolAgeStore',     'ChemStore',
                        'MathStore',        'StateStore',
                        'FormationStore',   'WellTypeStore',
                        'IDDBStore'
                    ],
    
    views :         [   'MapView',          'RecordView',
                        'filter.edit',      'filter.ChemLineView',
                        'LegendView'                           
//                        'TestFieldView',  'StoreTestList' 
                    ],

    controllers:    [   'MapController',    'filterEditController', 
                        'HelpController',   'ScoreCardController', 
                        'RecordController', 'LegendController' 
                    ],  

    launch: function() {
    }
});
