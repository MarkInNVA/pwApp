Ext.define('PWApp.view.TestFieldView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.fieldlist',

    title: 'All Users',

    store: 'FieldStore',

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