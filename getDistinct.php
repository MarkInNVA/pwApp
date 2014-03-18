<?php
//print_r($_GET);
//echo $_GET['field']; 
$field = $_GET['field']; 
//$where = $_GET['where'];
//$field = 'GEOLAGE';

$nURL = "http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app4iddb/MapServer/0/query?";
//$nURL = "http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?";
// http://igsaaaegaser003.er.usgs.gov/arcgis/rest/services/pw/pw_app3/MapServer/0/query?
// http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?
// where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects
// &relationParam=&outFields=GEOLAGE&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=GEOLAGE&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=true&f=pjson

$nWhere = "where=1%3D1";
//$nWhere = "where=GEOLAGE+is+not+null";
$nFields = "&outFields=".$field."&returnGeometry=false&orderByFields=".$field."&returnDistinctValues=true&f=pjson ";


// nXXX concat  http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson


$getD = $nURL.$nWhere.$nFields;
//echo $getD;
$ch = curl_init();


	curl_setopt($ch, CURLOPT_URL, $getD );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	$outputD = curl_exec($ch);


curl_close($ch);


$json_D = json_decode($outputD,true);
//$json_F = json_decode($_GET['filter'], true);
//print_r($outputD);
echo json_encode(array(
//	'success' => true,
//	'total' =>$json_cnt['count'],
//	'data' => $outputD['features'] ,
	'data' => $json_D['features'] ,
//	'filter' => $json_F[$_GET['filter']]
	)
);

?>

