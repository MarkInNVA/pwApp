Ext.define('PWApp.view.filter.edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.filteredit',

    requires:[ 'Ext.form.field.ComboBox' ], 

    title: 'Filter',
    layout: 'border',
    autoShow: true,
	bodyPadding: 10,
	x: 25,
	y: 130,
	height: 250,
	width: 350,

    initComponent: function() {
   // 	console.log('filter edit : initCompent')


        var fieldStore = Ext.StoreManager.lookup('FieldStore');
        var geolAgeStore = Ext.StoreManager.lookup('GeolAgeStore');
        geolAgeStore.filter('eyeColor', 'Brown');
        var mathStore = {
                fields: ['op' ],
            data  : [
                {op: '<'  },
                {op: '<=' },
                {op: '='  },
                {op: '=>'  },
                {op: '>'  },
                {op: 'between' }
            ]
        };
        var stateStore = {
                fields: [ 'abbr' ],
            data  : [
                { abbr: 'KY'   },
                { abbr: 'MD'   },
                { abbr: 'NY'   },
                { abbr: 'OH'   },
                { abbr: 'PA'   },
                { abbr: 'TN'   },
                { abbr: 'W.VA' },
                { abbr: 'WV'   }
            ]
        };
        console.log('store.proxy.url :', geolAgeStore.getProxy().url);
        console.log('store :', geolAgeStore);
        this.items = [
            {
                xtype: 'form',
				height: 225,
				width: 320,
                bodyPadding: 5,
	            layout: 'vbox',

                items: [
                    {
                        layout: 'hbox',
                        bodyPadding: 10,
                        //padding: 10,
                        items: [
                            {
                                xtype: 'combo',
                                myNameIs: 'comboField',
                                allowBlank: false,
                              //  blankText: 
                                itemId: 'comboField',
                                store: fieldStore,
                                queryMode: 'local',
                                forceSelection: true,
                             //   editable: false,
                                displayField: 'name',
                                valueField: 'name',
                             //   shadow: true,
              //          fieldLabel: 'Combo 1',
                                width: 125

                            },
                            {
                                width: 15
                            },
                            {
                                xtype: 'combo',
                                myNameIs: 'comboMath',
                                store: mathStore ,
                                forceSelection: true,
                                //editable: false,
                                queryMode: 'local',
                                displayField: 'op',
                                valueField: 'op',
              //          fieldLabel: 'Combo 1',
                                width: 50

                            },
                            {
                                width: 15
                            }, 
                            {
                                xtype: 'textfield',
                                myNameIs: 'textField3',
                              //  fieldLabel: 'Criteria 2',
                                value: '',
                                width: 50
                            }

                        ]
                    },
                    {
                        layout: 'hbox',
                        bodyPadding: 10,
                        //padding: 10,
                        items: [
                            {
                                xtype: 'combo',
                                myNameIs: 'acomboField',
                                allowBlank: false,
                              //  blankText: 
                                itemId: 'acomboField',
                                store: geolAgeStore,
                                queryMode: 'local',
                                forceSelection: false,
                                editable: true,
                                displayField: 'GEOLAGE',
                              //  valueField: 'GEOLAGE',
                             //   shadow: true,
              //          fieldLabel: 'Combo 1',
                                width: 125

                            },
                            {
                                width: 15
                            },
                            {
                                xtype: 'combo',
                                myNameIs: 'acomboMath',
                                store: mathStore ,
                                forceSelection: true,
                                //editable: false,
                                queryMode: 'local',
                                displayField: 'op',
                                valueField: 'op',
              //          fieldLabel: 'Combo 1',
                                width: 50

                            },
                            {
                                width: 15
                            }, 
                            {
                                xtype: 'textfield',
                                myNameIs: 'textFielda3',
                              //  fieldLabel: 'Criteria 2',
                                value: '',
                                width: 50
                            }

                        ]
                    }
                ]
            }                            
        ];

        this.buttons = [
            {
                text: 'Submit',
                handler: function() {
          //          var myVal = Ext.ComponentQuery.query('textfield[myNameIs=cField1]')[0];
                    var v1 = Ext.ComponentQuery.query('textfield[myNameIs=comboField]')[0].value;
                    var v2 = Ext.ComponentQuery.query('textfield[myNameIs=comboMath]')[0].value;
                    var v3 = Ext.ComponentQuery.query('textfield[myNameIs=textField3]')[0].value;
                    var v4 = v1 + ' ' + v2 + ' ' + v3;
                    var v5 = "GEOLAGE like '" + Ext.ComponentQuery.query('textfield[myNameIs= acomboField]')[0].rawValue + "'";
                    console.log('mine :', v4 + 'AND' + v5);
                   // var criteria1 = v4;
//                    var criteria1 = myVal.getValue();
                    // if (criteria1 == 'None') {
                    //     criteria1 = '1=1'
                    // }

//                    console.log('cool answer is ',criteria1);

                    var map = Ext.ComponentQuery.query('agc')[0];
//                    map.getCriteriaFromFilter(v4);
                    map.processExtentOrCriteriaChange(v4 + ' AND ' + v5, 'filter-submit');
                }
//                action: 'save'
            },
            {
                text: 'Reset',
                handler: function() {
                    // var myVal = Ext.ComponentQuery.query('textfield[myNameIs=cField1]')[0]; 
                    // myVal.setValue('None');
                    // myVal = Ext.ComponentQuery.query('textfield[myNameIs=textField2]')[0]; 
                    // myVal.setValue('');
                    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=comboField]')[0]; 
                    myVal.reset();
                    myVal = Ext.ComponentQuery.query('textfield[myNameIs=textField3]')[0]; 
                    myVal.setValue('');                    

                    myVal = Ext.ComponentQuery.query('textfield[myNameIs=comboMath]')[0]; 
                    myVal.reset();
                    var map = Ext.ComponentQuery.query('agc')[0];
                    map.processExtentOrCriteriaChange('1=1', 'filter-reset');  // everything
                    var s = Ext.StoreManager.lookup('RecordStore');
                    s.removeAll();
                    // var fd = Ext.ComponentQuery.query("form");
                    // console.log('form dom :', fd);
                    // var f = fd.getForm();
                    // console.log('form :',f)
//                    this.up('form').getForm().reset();
           //         me.resetCacheMap();
                }
            },
            {
                text: 'Close',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});

    //     // Reset and Submit buttons
    //         buttons: [
    //          {
    //             text: 'Submit',
    //             formBind: true, //only enabled once the form is valid
    //             disabled: true,
    //             handler: function() {
    //        //       console.log(this.up('form').getForm())
    //                 // var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

    //                 var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
    //                 var criteria1 = myVal.getValue();

    // //              console.log('cool answer is ',criteria1);

    //                 var map = Ext.ComponentQuery.query('agc')[0];

    //                 map.getPointCount(criteria1);
    //             }
    //         }]
    //     });
