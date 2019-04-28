$(document).ready(function(){
	
	$("#getDemoBtn").click(function(){
		$("#demo").load("js/demo.txt");
	});

	$("#getJson").click(function(){
		$.getJSON( "js/theJson.json", function( json ) {
		    console.log( "JSON Data received, hobby is " + json.hobby);
		    $("#jsonStuff").html("<h1>attached via .html method</h1>");
		    $("#scndJsonStuff").html(json.pets[0].name + "</br>");
		    $("#scndJsonStuff").append(json.name + " is " +
		    	json.age + " years old.");
		});
	});

	$("#dbAction").click(function(){
		$("#demo").load("php/db_action.php");
	});
	
});