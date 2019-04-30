$(document).ready(function(){
	
	$("#getDemoBtn").click(function(){
		$("#demo").load("js/demo.txt");
	});

	$("#getJson").click(function(){
		$.getJSON( "js/theJson.json", function( json ) {
		    console.log( "JSON Data received, hobby is " + json.hobby);
		    $("#jsonStuff").html("<h1>attached via .html method</h1>");
		    $("#scndJsonStuff").append(json.pets[0].name + "</br>");
		    $("#scndJsonStuff").append(json.name + " is " +
		    	json.age + " years old.");
		});
	});

	$("#getDbAction").click(function(){
		if($("#loadedDbStuff").length === 0){
			$("#dbStuff").append("<div id=\"loadedDbStuff\"></div>");
		}
		$("#loadedDbStuff").load("php/db_action.php");
	});
	
});