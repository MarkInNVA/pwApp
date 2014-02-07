Ext.define('PWApp.model.RecordModel', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'OBJECTID', type: 'int'}, 
    	{name: 'UNIQID', type: 'int'}, 
    	{name: 'WELLNAME', type: 'string'}, 
    	{name: 'API', type: 'int'}, 
    	{name: 'STATE', type: 'string'}, 
    	{name: 'TDS', type: 'float'}, 
    	{name: 'pH', type: 'number'}, 
    	{name: 'SAMPDATE', type: 'string'}, 
    	{name: 'BICARB', type: 'number'}, 
    	{name: 'CHLORIDE', type: 'number'}, 
    	{name: 'MAGNESIUM', type: 'number'}, 
    	{name: 'POTASSIUM', type: 'number'} 
    ]
});
