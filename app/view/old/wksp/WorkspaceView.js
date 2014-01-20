Ext.define('PWApp.view.wksp.WorkspaceView', {
    extend: 'Ext.panel.Panel',
    name: 'myWorkspace',

    // requires: [
    //     'Ext.form.*'
    // ],
//    xtype: 'form-workspace',
    alias: 'widget.workspaceview',
    
    bodyPadding: 15,  // Don't want content to crunch against the borders
    width: 300,
    height: 300,
//    title: 'Filters',
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Map',
            myNameIs: 'mapType',
            value: 'Cached',
            height:20
        },
        {
            xtype: 'textfield',
            myNameIs: 'textField1',
            fieldLabel: 'Criteria 1',
            value: ''
        }, 
        {
            xtype: 'textfield',
            myNameIs: 'textField2',
            fieldLabel: 'Criteria 2',
            value: ''
        },
        {
            xtype: 'textfield',
            myNameIs: 'numberOfPoints',
            fieldLabel: 'Result Count'
        }

    ],

   // Reset and Submit buttons
    buttons: [
        {
            text: 'Reset',
            handler: function() {
            //    this.up('form').getForm().reset();
              //  console.log("Form reset!");
              //  console.log(this.up());
              var myVal = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield')[0];
              var myVal2 = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield')[1];
              myVal.setValue('');
              myVal2.setValue('');
          //    console.log('s :', myVal.getValue(),' e :', myVal2.getValue());
            }
        }, 
        {
            text: 'Submit',
            //width: 250,

            handler: function() {
 //                var myVal = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield')[0];
 //                var myVal2 = Ext.ComponentQuery.query('panel[name=myWorkspace] textfield')[1];
 // //               console.log('s :', myVal.getValue(),' e :', myVal2.getValue());
//                PWApp.app.fireEvent('haveCriteria', myVal, myVal2);
                PWApp.app.fireEvent('haveCriteria');
            }
        }
    ]
});



        var form =Ext.create('Ext.form.Panel', {
            title: 'filter',
            name: 'myForm',
            bodyPadding: 5,
            height:300,
            width: 250,


            layout: 'absolute',
            // defaults: {
            //     anchor: '100%'
            // },

            defaultType: 'textfield',
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
                    x: 10, y: 200
                }, 
                {
                    xtype: 'textfield',
                    myNameIs: 'textField2',
                    fieldLabel: 'Criteria 2',
                    value: '',
                    width: 175,
                    x: 10, y: 300

                },
                {
                    xtype: 'textfield',
                    myNameIs: 'numberOfPoints',
                    fieldLabel: 'Result Count',
                    value: '',
                    width: 175,
                    x: 10, y: 400

                },
                {
                    xtype: 'textfield',
                    myNameIs: 'totalPoints',
                    fieldLabel: 'Total points in extent',
                    value: '',
                    width: 175,
                    x: 10, y: 500

                }
            ],

        // Reset and Submit buttons
            buttons: [{
                text: 'Reset',
                handler: function() {
                    this.up('form').getForm().reset();
                    me.resetCacheMap();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function() {
           //       console.log(this.up('form').getForm())
                    // var mapType = Ext.ComponentQuery.query('form[name=myForm] displayfield[myNameIs=mapType]')[0];

                    var myVal = Ext.ComponentQuery.query('form[name=myForm] textfield[myNameIs=cField1]')[0];
                    var criteria1 = myVal.getValue();

    //              console.log('cool answer is ',criteria1);

                    var map = Ext.ComponentQuery.query('agc')[0];

                    map.getPointCount(criteria1);
                }
            }]
        });

