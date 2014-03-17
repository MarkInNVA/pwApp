Ext.define('PWApp.store.ChemStore', {
    extend: 'Ext.data.Store',
    storeId: 'ChemStore',

    fields: [ 'name' ],
    data: [
        {name: 'ALKCACO3'  },
        {name: 'BROMIDE'  },
        {name: 'CALCIUM'  },
        {name: 'CHLORID'  },
        {name: 'dD'  },
        {name: 'd13C'},
        {name: 'd18O'  },
        {name: 'PH' },
        {name: 'POTASSM' },
        {name: 'TDS' },
        {name: 'TOC' },
        {name: 'SODIUM' },
        {name: 'SULFATE' }
    ]    
});
