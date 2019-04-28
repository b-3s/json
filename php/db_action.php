
<html>
<body>
	
<?php

	// Verbindung aufnehmen

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "thetestdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

$sql = "SELECT * FROM tabl_01";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "nr: " . $row["nr"]. " - Datum: " . $row["Datum"]. " " . $row["Wochentag"]. " " . $row["Info"]."<br>";
    }
} else {
    echo "0 results";
}
$conn->close();


?>




</body>
</html>