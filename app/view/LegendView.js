Ext.define('PWApp.view.LegendView', {
    extend: 'Ext.window.Window',
    alias: 'widget.legendview',
    itemId: 'legendview',

    requires:[ 'Ext.layout.container.Fit' ],

    config: {
        myMap:null,
        myId: null,
        layers: null
    },

//    title: 'Panel',
    layout: 'fit',
	// bodyPadding: 10,
//     padding: -10,
	x: 25,
	y: 120,
	height: 225,
	width: 205,
    closeAction: "hide",
    // floating: true,
    // frame:true,
//    width: 350,
//    autoShow: true,

    initComponent: function() {
        me = this;
//      console.log('filter edit : initCompent')
        var local_id = this.getId();
        this.setMyId(local_id);
//        console.log('local_id :', local_id);
        var map = Ext.ComponentQuery.query('agc')[0];
        this.setMyMap(map);

        this.callParent(arguments);        
    },
    afterRender: function() {
        // console.log('after render');

        var s = this.getMyMap().getArcMap().getLayer('wells');

        var layers = [
            {
                layer: s,
                title: 'Total organic carbon'
            }
        ];
        this.setLayers(layers);

        var legend = new esri.dijit.Legend({
            map:this.getMyMap().getArcMap(),
            layerInfos: layers
//        }, 'legendDiv' );
        },this.getMyId());

        legend.startup();
    },

    // items : [
    //     {
    //         xtype: 'component',
            // title: 'Legend',
            // height:285,
            // width: 275,
//             items: [ 
//                 {
//                     xtype: 'panel',
//                     // style: {
//                     //     height:'100%',
//                     //     width: '100%',
//                     //     'z-index': 100
//                     // },
 //                  html: '<div id="legendDiv"  style="width: 260px; height: 250px;"> <div>',
// //              //       height:225,
// // //                    width:275
//                 } 
//             ]
    //     }
    // ]
});
