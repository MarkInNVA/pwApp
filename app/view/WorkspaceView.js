Ext.define('PWApp.view.WorkspaceView', {
    extend: 'Ext.panel.Panel',
    name: 'myWorkspace',

    // requires: [
    //     'Ext.form.*'
    // ],
//    xtype: 'form-workspace',
    alias: 'widget.workspaceview',
    
    bodyPadding: 15,  // Don't want content to crunch against the borders
    width: 300,
    title: 'Filters',
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

