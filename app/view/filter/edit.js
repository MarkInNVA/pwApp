Ext.define('PWApp.view.filter.edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.filteredit',
    itemId: 'filteredit',

    requires:[ 'Ext.form.field.ComboBox' ], 

    title: 'Filter',
    layout: 'border',
	bodyPadding: 10,
	x: 25,
	y: 120,
	height: 280,
	width: 375,
//    width: 350,
    autoShow: true,

    initComponent: function() {
   // 	console.log('filter edit : initCompent')

        var fieldStore = Ext.StoreManager.lookup('FieldStore');
        var geolAgeStore = Ext.StoreManager.lookup('GeolAgeStore');
        var formationStore = Ext.StoreManager.lookup('FormationStore');
        var welltypeStore = Ext.StoreManager.lookup('WellTypeStore');

        // console.log('store.proxy.url :', geolAgeStore.getProxy().url);
        // console.log('store :', geolAgeStore);
        this.items = [
            {
                xtype: 'form',
                itemId: 'editForm',
                autoScroll: true,
				height: 200,
				width: 340,
                bodyPadding: 5,
	            layout: 'vbox',
                padding: 5,
                items: [
                    {
                        xtype: 'combo',
                        myNameIs: 'geolAgeCombo',
                        store: geolAgeStore,
                        queryMode: 'local',
                        displayField: 'GEOLAGE',
                        valueField: 'GEOLAGE',
                        fieldLabel: 'Geol Age',
                        labelWidth:75,
                       // placeHolder:'Geologic Age',
                        width: 295
                    } ,
                    {
                        xtype: 'combo',
                        myNameIs: 'formationCombo',
                        store: formationStore,
                        queryMode: 'local',
                        displayField: 'FORMATION',
                        forceSelection: false,
                        editable: true,
                        valueField: 'name',
                        fieldLabel: 'Formation',
                        labelWidth:75,
                        //placeHolder:'Pick a value',
                        width: 295

                    },
                    {
                        xtype: 'panel',
                //flex: 1,
                        layout: 'hbox',
                        border: false,
                        //bodyPadding: 5,
                        items: [
                            {
                                xtype: 'combo',
                                myNameIs: 'welltypeCombo',
                                store: welltypeStore,
                                queryMode: 'local',
                                displayField: 'name',
                                forceSelection: false,
                                editable: true,
                                valueField: 'name',
                                fieldLabel: 'Well Type',
                                labelWidth:75,
                                placeHolder:'Pick a value',
                                width: 145
                            },
                            {   xtype: 'tbspacer', width: 10  },
                            {
                                xtype: 'combo',
                                myNameIs: 'fieldCombo',
                                store: fieldStore,
                                queryMode: 'local',
                                displayField: 'name',
                                forceSelection: false,
                                editable: true,
                                valueField: 'name',
                                fieldLabel: 'Demo Only',
                                labelWidth:65,
                                placeHolder:'Pick a value',
                                width: 140
                            }

                        ]
                    },
                    {   xtype: 'tbspacer', height: 10  },
                //     {
                //         xtype: 'fieldset',
                //         title: 'Chemistry based choices ',
                //         collapsible: true,
                //         //collapsed: true,
                //         mimHeight: 60,
                //         //frame: true,
                //         //hideMode: 'offsets',
                // //flex: 1,
                //         layout: 'vbox',
                //         border: false,
                //         padding: 0,
                //         //bodyPadding: 5,
                //         items: [
                            {
                                xtype: 'filter.chemlineview',
                                myNameIs: 'chemlineview1'
                            },
                            {
                                xtype: 'filter.chemlineview',
                                myNameIs: 'chemlineview2'
                            },
                            {
                                xtype: 'filter.chemlineview',
                                myNameIs: 'chemlineview3'
                            }
                    //     ]
                    // }
                ]
            }                            
        ];

        this.buttons = [
            {
                text: 'Submit',
                itemId: 'submitButton',
                flex: 1
            },
            {
                text: 'Reset',
                flex: 1,
                itemId: 'resetButton'
            },
            {
                text: 'Close',
                itemId: 'closeButton',
                flex: 1

            }
        ];

        this.callParent(arguments);
    }
});
