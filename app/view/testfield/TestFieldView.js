Ext.define('PWApp.view.testField.TestFieldView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',

    store: 'TestFieldStore',

    initComponent: function() {
        // this.store = {
        //     fields: ['name', 'email'],
        //     data  : [
        //         {name: 'Ed',    email: 'ed@sencha.com'},
        //         {name: 'Tommy', email: 'tommy@sencha.com'}
        //     ]
        // };

        this.columns = [
            // {header: 'Name',  dataIndex: 'name',  flex: 1},
            // {header: 'Email', dataIndex: 'email', flex: 1}
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Alias',  dataIndex: 'alias',  flex: 1},
            {header: 'Type', dataIndex: 'type', flex: 1}
        ];

        this.callParent(arguments);
    }
});