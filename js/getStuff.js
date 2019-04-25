$(document).ready(function(){
	
	$("#getBtn").click(function(){
		$("#demo").load("js/demo.txt");
	});

	$("#getJson").click(function(){
		$.getJSON( "js/theJson.json", function( json ) {
		    console.log( "JSON Data received, hobby is " + json.hobby);
		    $("#jsonStuff").html("<h1>attached via .html method</h1>");
		});
	});
	

});