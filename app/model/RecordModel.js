Ext.define('PWApp.model.RecordModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'OBJECTID', type: 'int'},  
        {name: 'API', type: 'string', useNull: true }, 
        {name: 'LAT', type: 'number', useNull: true },
        {name: 'LONG', type: 'number', useNull: true },
        {name: 'STATE', type: 'string', useNull: true }, 
        {name: 'WELLTYPE', type: 'string', useNull: true },
        {name: 'FORMATION', type: 'string', useNull: true },
        {name: 'GEOLAGE', type: 'string', useNull: true },
        {name: 'DEPTHUPPER', type: 'number', useNull: true },
        {name: 'DEPTHLOWER', type: 'number', useNull: true },        
        {name: 'REFERENCE', type: 'string', useNull: true },
        {name: 'TDS', type: 'float', useNull: true }, 
        {name: 'TOC', type: 'float', useNull: true }, 
        {name: 'PH', type: 'float', useNull: true }, 
        {name: 'ALKCACO3', type: 'float', useNull: true }, 
        {name: 'Br', type: 'float', useNull: true }, //bromide
        {name: 'Ca', type: 'float', useNull: true }, //calcium
        {name: 'Cl', type: 'float', useNull: true }, //chloride
        {name: 'K', type: 'float', useNull: true }, //potassium
        {name: 'Na', type: 'float', useNull: true }, // sodium
        {name: 'SO4', type: 'float', useNull: true }, //sulfate
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