<?php


$nURL = "http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?";

// http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?
// where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects
// &relationParam=&outFields=GEOLAGE&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=GEOLAGE&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=true&f=pjson

$nWhere = "where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson ";


// nXXX concat  http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson

$cWhat = "&outFields=objectid%2C+cntry_name%2C+long_name%2C+samples%2C+usgs%2C+collab%2C+visible%2C+photos%2C+analysis%2C+chemical";

$cWhere = "&where=visible%3D1&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=false";
$cOrder = "&orderByFields=cntry_name";

$cOutputType =  "&f=pjson";

$sOrder = "&orderByFields=state_name";
$sOutputType =  "&f=pjson";

// ----------
//http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2/query?
$sWhereCnt = "where=visible%3D1";
$sWhatCnt = "&returnCountOnly=true";
// ----------

$getRecords = $cURL.$cWhere.$cWhat.$cOrder.$cOutputType;
$getCount  = $cURL.$sWhereCnt.$sWhatCnt.$sOutputType;

$getD = $nURL.$nWhere;

$ch = curl_init();

//	curl_setopt($ch, CURLOPT_URL, $getRecords );
//	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

//	$output = curl_exec($ch);

	// curl_setopt($ch, CURLOPT_URL, $getCount );
	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// $outputCnt = curl_exec($ch);

	curl_setopt($ch, CURLOPT_URL, $getD );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	$outputD = curl_exec($ch);


curl_close($ch);


// $json_b = json_decode($output,true);
// $json_cnt = json_decode($outputCnt,true);

$json_D = json_decode($outputD,true);

echo json_encode(array(
	'success' => true,
//	'total' =>$json_cnt['count'],
	'data' => $json_D['features'] 
	)
);

?>


// <?php


// $nURL = "http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?";

// // http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?
// // where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects
// // &relationParam=&outFields=GEOLAGE&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=GEOLAGE&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=true&f=pjson

// $nWhere = "where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson ";


// // nXXX concat  http://eerscmap.usgs.gov/arcgis/rest/services/pw/pw_20140219/MapServer/0/query?where=1%3D1&outFields=GEOLAGE&returnGeometry=false&orderByFields=GEOLAGE&returnDistinctValues=true&f=pjson

// $cWhat = "&outFields=objectid%2C+cntry_name%2C+long_name%2C+samples%2C+usgs%2C+collab%2C+visible%2C+photos%2C+analysis%2C+chemical";

// $cWhere = "&where=visible%3D1&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=false";
// $cOrder = "&orderByFields=cntry_name";

// $cOutputType =  "&f=pjson";

// $sOrder = "&orderByFields=state_name";
// $sOutputType =  "&f=pjson";

// // ----------
// //http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2/query?
// $sWhereCnt = "where=visible%3D1";
// $sWhatCnt = "&returnCountOnly=true";
// // ----------

// $getRecords = $cURL.$cWhere.$cWhat.$cOrder.$cOutputType;
// $getCount  = $cURL.$sWhereCnt.$sWhatCnt.$sOutputType;

// $getD = $nURL.$nWhere;

// $ch = curl_init();

// //	curl_setopt($ch, CURLOPT_URL, $getRecords );
// //	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// //	$output = curl_exec($ch);

// 	// curl_setopt($ch, CURLOPT_URL, $getCount );
// 	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// 	// $outputCnt = curl_exec($ch);

// 	curl_setopt($ch, CURLOPT_URL, $getD );
// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// 	$outputD = curl_exec($ch);


// curl_close($ch);


// // $json_b = json_decode($output,true);
// // $json_cnt = json_decode($outputCnt,true);

// $json_D = json_decode($outputD,true);

// echo json_encode(array(
// 	'success' => true,
// //	'total' =>$json_cnt['count'],
// 	'data' => $json_D['features'] 
// 	)
// );

