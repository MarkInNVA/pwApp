<?php
//print_r($_GET);
//echo $_GET['field']; 
//$field = $_GET['field']; 
//$where = $_GET['where'];
$f = $_GET['filter'];
//print_r($f);
$nURL = "http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?";
// http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app3/MapServer/0/query?
// http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?
// where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects
// &relationParam=&outFields=GEOLAGE&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=GEOLAGE&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=true&f=pjson

$nWhere = "where=1%3D1";
//$nFields = "&outFields=".$field."&returnGeometry=false&orderByFields=".$field."&returnDistinctValues=true&f=pjson ";


// nXXX concat  http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson


//$getD = $nURL.$nWhere.$nFields;

// $ch = curl_init();


// 	curl_setopt($ch, CURLOPT_URL, $getD );
// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// 	$outputD = curl_exec($ch);


// curl_close($ch);


// $json_D = json_decode($outputD,true);
$json_F = json_decode($_GET['filter'], true);
print_r($json_F[0]['value']);

// echo json_encode(array(
// //	'success' => true,
// //	'total' =>$json_cnt['count'],
// 	'data' => $json_D['features'] ,
// 	'filter' => $json_F[$_GET['filter']]
// 	)
// );

?>

