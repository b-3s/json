
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

$sql = "INSERT INTO tabl_01 (nr, Datum, Wochentag, Info)
VALUES ($_POST[numby], '05.05.2019', 'So', 'Dr. Detzlhofer')";


if($_POST['action'] == "adding") {
  /**
   * we can pass any action like block, follow, unfollow, send PM....
   * if we get a 'follow' action then we could take the user ID and create a SQL command
   * but with no database, we can simply assume the follow action has been completed and return 'ok'
  **/

  echo "ok";
}


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();


?>

