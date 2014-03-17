Ext.define('PWApp.model.RecordModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'OBJECTID', type: 'int'},  
        {name: 'API', type: 'string', useNull: true }, 
        {name: 'LAT', type: 'number', useNull: true },
        {name: 'LONG_', type: 'number', useNull: true },
        {name: 'STATE', type: 'string', useNull: true }, 
        {name: 'WELLTYPE', type: 'string', useNull: true },
        {name: 'FORMATION', type: 'string', useNull: true },
        {name: 'GEOLAGE', type: 'string', useNull: true },
        {name: 'UPPERDEPTH', type: 'number', useNull: true },
        {name: 'LOWERDEPTH', type: 'number', useNull: true },        
        {name: 'REFERENCE', type: 'string', useNull: true },
        {name: 'TDS', type: 'float', useNull: true }, 
        {name: 'TOC', type: 'float', useNull: true }, 
        {name: 'PH', type: 'float', useNull: true }, 
        {name: 'ALKCACO3', type: 'float', useNull: true }, 
        {name: 'BROMIDE', type: 'float', useNull: true }, 
        {name: 'CALCIUM', type: 'float', useNull: true }, 
        {name: 'CHLORID', type: 'float', useNull: true }, 
        {name: 'POTASSM', type: 'float', useNull: true }, 
        {name: 'SODIUM', type: 'float', useNull: true }, 
        {name: 'SULFATE', type: 'float', useNull: true }, 
        {name: 'dD', type: 'float', useNull: true }, 
        {name: 'd13C', type: 'float', useNull: true },   
        {name: 'd18O', type: 'float', useNull: true } 
    ]
});

// -------------
        // {name: 'ID', type: 'int'},  
        // {name: 'API', type: 'string'}, 
        // {name: 'LAT', type: 'number'},
        // {name: 'LONG', type: 'number'},
        // {name: 'STATE', type: 'string'}, 
        // {name: 'WELLTYPE', type: 'string'},
        // {name: 'FORMATION', type: 'string'},
        // {name: 'GEOLAGE', type: 'string'},
        // {name: 'UPPERDEPTH', type: 'number'},
        // {name: 'LOWERDEPTH', type: 'number'},        
        // {name: 'REFERENCE', type: 'string'},

        // {name: 'TDS', type: 'float'}, 
        // {name: 'TOC', type: 'float'}, 
        // {name: 'PH', type: 'float'}, 
        // {name: 'ALKCACO3', type: 'float'}, 
        // {name: 'BROMIDE', type: 'float'}, 
        // {name: 'CALCIUM', type: 'float'}, 
        // {name: 'CHLORID', type: 'float'}, 
        // {name: 'POTASSM', type: 'float'}, 
        // {name: 'SODIUM', type: 'float'}, 
        // {name: 'SULFATE', type: 'float'}, 
        // {name: 'dD', type: 'float'}, 
        // {name: 'd13C', type: 'float'},         
        // {name: 'd18O', type: 'float'} 

// -------------