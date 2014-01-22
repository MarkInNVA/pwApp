Ext.define('PWApp.view.filter.edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.filteredit',

    title: 'Filter',
    layout: 'border',
    autoShow: true,
	bodyPadding: 10,
	x: 50,
	y: 200,
	height: 375,
	width: 280,

    initComponent: function() {
    	console.log('filter edit : initCompent')
        this.items = [
            {
                xtype: 'form',
				height: 350,
				width: 250,
	            layout: 'absolute',

                items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Map type',
                    myNameIs: 'mapType',
                    value: 'Cached',
                    width: 75,
                    x: 10, y: 10
                },
                {
                    xtype: 'textfield',
                    myNameIs: 'cField1',
                    fieldLabel: 'Criteria 1',
                    value: 'ph < 5.4',
                    width: 175,
                    x: 10, y: 50
                }, 
                {
                    xtype: 'textfield',
                    myNameIs: 'textField2',
                    fieldLabel: 'Criteria 2',
                    value: '',
                    width: 175,
                    x: 10, y: 90

                },
                {
                    xtype: 'textfield',
                    myNameIs: 'numberOfPoints',
                    fieldLabel: 'Result Count',
                    value: '',
                    width: 175,
                    x: 10, y: 130

                },
                {
                    xtype: 'textfield',
                    itemId: 'totalPointsId',
                    fieldLabel: 'Total points in extent',
                    value: '55',
                    width: 175,
                    x: 10, y: 170

                }                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            // {
            //     text: 'Reset',
            //     handler: function() {
            //         this.up('form').getForm().reset();
            //         me.resetCacheMap();
            //     }
            // },
            {
                text: 'Cancel',
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
