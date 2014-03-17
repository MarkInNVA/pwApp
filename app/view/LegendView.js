Ext.define('PWApp.view.LegendView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.legendview',
    itemId: 'legendview',

    requires:[  ],
    config: {
        myMap:null,
        myId: null
    },

//    title: 'Panel',
    layout: 'border',
	bodyPadding: 10,
    padding: 10,
	x: 25,
	y: 120,
	height: 225,
	width: 225,
    closeAction: "hide",
    floating: true,
    frame:true,
//    width: 350,
  //  autoShow: true,

    initComponent: function() {
   // 	console.log('filter edit : initCompent')
        var local_id = this.getId();
        this.setMyId(local_id);
//        console.log('local_id :', local_id);
        var map = Ext.ComponentQuery.query('agc')[0];
        this.setMyMap(map);
        this.callParent(arguments);        
    },
    afterRender: function() {
        // console.log('after render');
        // console.log('map :', this.getMyMap().getArcMap() );
        var s = this.getMyMap().getArcMap().getLayer('wells');

    // var mymap = this.getArcMap();
    // var fl = mymap.getLayer("wells");

        var layers = [
            {
                layer: s,
                title: 'Total organic carbon'
            }
        ];
// console.log('s :', layers);
        var legend = new esri.dijit.Legend({
            map:this.getMyMap().getArcMap(),
            layerInfos: layers
        },this.getMyId());
        legend.startup();

    },

//     items : [
//         {
//             xtype: 'panel',
// //            title: 'Legend',
// //            autoScroll: true,
// 			height: 200,
// 			width: 340,
//             bodyPadding: 5,
//             layout: 'vbox',
//         } ,
                           
//     ]
    
});
