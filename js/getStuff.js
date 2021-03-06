$(document).ready(function(){
	
	// load data from text file
	$("#getDemoBtn").click(function(){
		$("#demo").load("js/demo.txt");
	});

	// load data from json
	$("#getJson").click(function(){
		$.getJSON( "js/theJson.json", function( json ) {
		    console.log( "JSON Data received, hobby is " + json.hobby);
		    $("#jsonStuff").html("<h1>attached via .html method</h1>");
		    $("#scndJsonStuff").append(json.pets[0].name + "</br>");
		    $("#scndJsonStuff").append(json.name + " is " +
		    	json.age + " years old.");
		});
	});

	// load database content
	$("#getDbAction").click(function(){
		if($("#loadedDbStuff").length === 0){
			$("#dbStuff").append("<div id=\"loadedDbStuff\"></div>");
		}
		$("#loadedDbStuff").load("php/db_action.php");
	});

	
	// add content to database
	$("#setDbAction").click(function(){
		let number;
		number = $("#nr").val();
		$.ajax({
	      url: 'php/db_add_action.php',
	      type: 'post',
	      data: {'numby': number},
	      success: function(data, status) {
	        if(this.status == 200) {
	          
	          console.log(status);
	        }
	      },
	      error: function(xhr, desc, err) {
	        console.log(xhr);
	        console.log("Details: " + desc + "\nError:" + err);
	      }
	    }); // end ajax call

	});



	//create new Database
	$("#createNewDBAction").click(function() {
		$.ajax({
			url: 'php/create_db.php',
		});
	});
	
});


