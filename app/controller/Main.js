Ext.define('PWApp.controller.Main', {
    extend: 'Ext.app.Controller',

    init: function() {
//		console.log('From controller Main');
		this.control({
			'[myNameIs=initialExtent]' : {
				click: this.initialExtent
			}
		});

		this.control({
			'[myNameIs=help]' : {
				click: this.help
			}
		});
	},

	initialExtent: function() {
		var map = Ext.ComponentQuery.query('agc')[0];
		map.setInitExtent();
	},

	help: function() {
		console.log("Help!");
	}

});
