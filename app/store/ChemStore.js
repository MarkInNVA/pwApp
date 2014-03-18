Ext.define('PWApp.store.ChemStore', {
    extend: 'Ext.data.Store',
    storeId: 'ChemStore',

    fields: [ 'name', 'alias' ],
    data: [
        {name: 'ALKCACO3', alias:'ALKCACO3'  },
        {name: 'BROMIDE', alias:'Br'  },
        {name: 'CALCIUM', alias:'Ca'  },
        {name: 'CHLORID', alias:'Cl'  },
        {name: 'dD', alias:'dD'  },
        {name: 'd13C', alias:'d13C'},
        {name: 'd18O', alias:'d18O'  },
        {name: 'PH', alias:'PH' },
        {name: 'POTASSM', alias:'K' },
        {name: 'TDS', alias:'TDS' },
        {name: 'TOC', alias:'TOC' },
        {name: 'SODIUM', alias:'Na' },
        {name: 'SULFATE', alias:'SO4' }
    ]    
});
