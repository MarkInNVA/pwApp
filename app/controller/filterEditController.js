Ext.define('PWApp.controller.filterEditController', {
    extend: 'Ext.app.Controller',
    requires: [  ],

    config: {
    	models: [ ],
    	stores: [ ],
    	views : [ 'MapView', 'filter.edit' ],

      // refs: [{
      //    ref: 'filteredit',
      //    selector: 'form'
      // }],

    	init : function() {

        this.control({
          'filteredit #submitButton' : {
            click: this.formSubmit
          }
        });

        this.control({
          'filteredit #resetButton' : {
            click: this.formReset
          }
        });

        this.control({
          'filteredit #closeButton' : {
            click: this.formClose
          }
        });
		}
  },

  formSubmit: function(){
//    console.log('formSubmit - button clicked');

    var theStr = '';
//          var myVal = Ext.ComponentQuery.query('textfield[myNameIs=cField1]')[0];
    var  v1  = Ext.ComponentQuery.query('textfield[myNameIs=IDDBCombo]')[0].getRawValue();
    
    var  v2  = Ext.ComponentQuery.query('[myNameIs=chemlineview1] combo[myNameIs=chemCombo]')[0].getValue();
    var  v3  = Ext.ComponentQuery.query('[myNameIs=chemlineview1] combo[myNameIs=mathCombo]')[0].getRawValue();
    var  v4  = Ext.ComponentQuery.query('[myNameIs=chemlineview1] textfield[myNameIs=chemText]')[0].getRawValue();

    var  v5  = Ext.ComponentQuery.query('[myNameIs=chemlineview2] combo[myNameIs=chemCombo]')[0].getValue();
    var  v6  = Ext.ComponentQuery.query('[myNameIs=chemlineview2] combo[myNameIs=mathCombo]')[0].getRawValue();
    var  v7  = Ext.ComponentQuery.query('[myNameIs=chemlineview2] textfield[myNameIs=chemText]')[0].getRawValue();

    var  v8  = Ext.ComponentQuery.query('[myNameIs=chemlineview3] combo[myNameIs=chemCombo]')[0].getValue();
    var  v9  = Ext.ComponentQuery.query('[myNameIs=chemlineview3] combo[myNameIs=mathCombo]')[0].getRawValue();
    var  v10 = Ext.ComponentQuery.query('[myNameIs=chemlineview3] textfield[myNameIs=chemText]')[0].getRawValue();

    var  v11 = Ext.ComponentQuery.query('textfield[myNameIs=formationCombo]')[0].getRawValue();
//    var  v12 = Ext.ComponentQuery.query('textfield[myNameIs=welltypeCombo]')[0].getRawValue();
    var  v12 = Ext.ComponentQuery.query('textfield[myNameIs=basinCombo]')[0].getRawValue();

    var  v13 = Ext.ComponentQuery.query('[myNameIs=alllineview1] combo[myNameIs=fieldCombo]')[0].getRawValue();
    var  v14 = Ext.ComponentQuery.query('[myNameIs=alllineview1] combo[myNameIs=nullCombo]')[0].getRawValue();

//console.log('filterEditController, v2:', Ext.ComponentQuery.query('[myNameIs=chemlineview1] combo[myNameIs=chemCombo]')[0])
    if ( v1.length > 0) {
        theStr = "IDDB like '" + v1 + "'";
    };

    if ( v11.length > 0) {
        if (theStr.length > 1) {
            theStr += ' AND ';
        }
        theStr += "FORMATION like '" + v11 + "'";
    };

    if ( v12.length > 0) {
        if (theStr.length > 1) {
            theStr += ' AND ';
        }
        theStr += "BASIN like '" + v12 + "'";
    };

    if ( v13.length > 0) {
        if (theStr.length > 1) {
            theStr += ' AND ';
        }
        theStr += v13 + " " + v14 ;
    };

    if (v2) {
        if ( (v2.length > 0) && (v3.length > 0) && (v4.length > 0) ) {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr += v2 + " " + v3 + " " + v4 ;
        }
    };

    if (v5) {
        if ( (v5.length > 0) && (v6.length > 0) && (v7.length > 0) ) {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr += v5 + " " + v6 + " " + v7 ;
        };
    }

    if (v8) {
        if ( (v8.length > 0) && (v9.length > 0) && (v10.length > 0) ) {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr += v8 + " " + v9 + " " + v10 ;
        };        
    }

    if (theStr == '') {
        theStr = '1=1';
    };
    console.log('mine :', theStr); //, 'v2.len :', v2.length, 'v3.len :', v3.length, 'v4.len :', v4.length);

    var map = Ext.ComponentQuery.query('agc')[0];

    map.processExtentOrCriteriaChange(theStr, 'filter-submit');

  },

  formReset: function(){
//    console.log('formReset - button clicked');

    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=IDDBCombo]')[0]; 
    myVal.reset();                   

    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=formationCombo]')[0]; 
    myVal.reset();                   

//    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=welltypeCombo]')[0]; 
//    myVal.reset();                   

    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=basinCombo]')[0]; 
    myVal.reset();                   

    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=fieldCombo]')[0]; 
    myVal.reset();                   

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview1] combo[myNameIs=chemCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview1] combo[myNameIs=mathCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview1] textfield[myNameIs=chemText]')[0]; 
    myVal.setValue(''); 


    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview2] combo[myNameIs=chemCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview2] combo[myNameIs=mathCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview2] textfield[myNameIs=chemText]')[0]; 
    myVal.setValue(''); 


    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview3] combo[myNameIs=chemCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview3] combo[myNameIs=mathCombo]')[0]; 
    myVal.reset();

    myVal = Ext.ComponentQuery.query('[myNameIs=chemlineview3] textfield[myNameIs=chemText]')[0]; 
    myVal.setValue(''); 

    myVal = Ext.ComponentQuery.query('[myNameIs=alllineview1] combo[myNameIs=fieldCombo]')[0];
    myVal.reset();    
    
    myVal = Ext.ComponentQuery.query('[myNameIs=alllineview1] combo[myNameIs=nullCombo]')[0];
    myVal.reset();

    var map = Ext.ComponentQuery.query('agc')[0];
    map.processExtentOrCriteriaChange('1=1', 'filter-reset');  // everything

    var s = Ext.StoreManager.lookup('RecordStore');
    s.removeAll();

  },
  
  formClose: function(){
//    console.log('formClose - button clicked');

    var t = Ext.ComponentQuery.query('filteredit');    
    // var view = me.getView('filter.edit');
//    console.log('view :', t);
    t[0].doClose();  

  }
});
