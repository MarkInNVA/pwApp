<?php

require_once('Spreadsheet/Excel/Writer.php');
//require_once 'config2.php'

//$myPt = $_GET['t'];
//	echo $myPt; 

//	echo "<p>Hi<p>";
//$myA = split(",",$myPt);
//	print_r($myA);
//	echo "\<p>";
//	echo count($myA);

//$myPt = pg_escape_string(utf8_encode($_POST['sqlstr']));

//$conn = pg_connect("host=igsaaaegaser002 dbname=postgres user=loader password=loader");
// $conn = pg_connect("host=$lhost dbname=$ldb user=$luser password=$lpw");
// if (!$conn)
// {
//         print "Unable to Connect to DB";
//         exit;
// }


//$result = pg_query("select * from " . $myPointFile . " where $myPt");
//$result = pg_query("select * from " . $myPointFile . " where 1=2");

//if (!$result)
// {
//         print "Unable to retrieve data";
//         exit;
// }

//$numColumns = pg_num_fields($result);

$sheetTitle = "USGS Produced Waters Samples";

//Creating a workbook
$workbook = new Spreadsheet_Excel_Writer();
 
//Sending HTTP headers
$workbook->send('Search_Export.xls');
 
//Creating a worksheet
$worksheet=&$workbook->addWorksheet('Points');
$worksheet->setLandscape();
 
// //set all columns same width
// $columnWidth = 28;
// $worksheet->setColumn (0, $numColumns, $columnWidth);
 
// //Setup different styles
// $sheetTitleFormat =& $workbook->addFormat(array('bold'=>1,
//   						'size'=>10));

// $columnTitleFormat =& $workbook->addFormat(array(	
// 	'bold'=>1,
//   	'top'=>1, 'bottom'=>1,'left'=>1, 'right'=>1,
//   	'size'=>9));

// $regularFormat =& $workbook->addFormat(array('size'=>9,
//   'align'=>'left',
//   'textWrap'=>1));

// $row=0;
// $column=0;

// //Write sheet title in upper left cell
// //$worksheet->write($row, $column, $sheetTitle, $sheetTitleFormat);
 
 
// //Write column titles two rows beneath sheet title
// //$row += 1;

// for ($j = 0; $j < $numColumns; $j++) {    
// 	$worksheet->write($row, $j, pg_field_name($result, $j), $columnTitleFormat);
// }



// while ($arr = pg_fetch_row($result)) {
// 	$row++;
// 	for ($j = 0; $j < $numColumns; $j++) {    
// 		$worksheet->write($row,$j,$arr[$j], $regularFormat);		
// 	}
// }


// pg_close($conn);


$workbook->close();
	
?>