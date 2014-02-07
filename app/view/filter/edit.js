Ext.define('PWApp.view.filter.edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.filteredit',

    title: 'Filter',
    layout: 'border',
    autoShow: true,
	bodyPadding: 10,
	x: 25,
	y: 130,
	height: 250,
	width: 280,

    initComponent: function() {
   // 	console.log('filter edit : initCompent')
        this.items = [
            {
                xtype: 'form',
				height: 225,
				width: 250,
                bodyPadding: 10,
	            layout: 'vbox',

                items: [

                    {
                        xtype: 'textfield',
                        myNameIs: 'cField1',
                        fieldLabel: 'Criteria 1',
                        value: 'None',
                        width: 175
                    }, 
                    {
                        xtype: 'textfield',
                        myNameIs: 'textField2',
                        fieldLabel: 'Criteria 2',
                        value: '',
                        width: 175
                    }
                ]
            }                            
        ];

        this.buttons = [
            {
                text: 'Submit',
                handler: function() {
                    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=cField1]')[0];
                    var criteria1 = myVal.getValue();
                    // if (criteria1 == 'None') {
                    //     criteria1 = '1=1'
                    // }

//                    console.log('cool answer is ',criteria1);

                    var map = Ext.ComponentQuery.query('agc')[0];
                    map.getCriteriaFromFilter(criteria1);

                }
//                action: 'save'
            },
            {
                text: 'Reset',
                handler: function() {
                    var myVal = Ext.ComponentQuery.query('textfield[myNameIs=cField1]')[0]; 
                    myVal.setValue('None');
                    myVal = Ext.ComponentQuery.query('textfield[myNameIs=textField2]')[0]; 
                    myVal.setValue('');
                    var map = Ext.ComponentQuery.query('agc')[0];
                    map.getCriteriaFromFilter('None');
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
