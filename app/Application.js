Ext.define('PWApp.Application', {
    name: 'PWApp',

    extend: 'Ext.app.Application',

    stores: [   
        // 'RecordStore',      'FieldStore', 
        // 'GeolAgeStore',     'ChemStore',
        // 'MathStore',        'StateStore',
        // 'FormationStore',   'WellTypeStore',
        // 'IDDBStore',        'NullStore',
        // 'BasinStore'
    ],
    
    views:  [   
        'layout.MapView',          'layout.RecordView',
        // 'filter.edit',      'filter.ChemLineView',
        // 'LegendView',       'filter.AllLineView',
        // 'filter.BasinLineView'
//                        'TestFieldView',  'StoreTestList' 
    ],

    controllers: [
        'MapController',
        'ScoreCardController',
        'RecordController',   
          
        // 'FilterController',
        // 'filterEditController', 
        // 'HelpController',    
        
        //'LegendController' 
    ],  

    launch: function() {
    }
});
