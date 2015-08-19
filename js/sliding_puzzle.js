// JavaScript for sliding puzzle project
$(document).ready(function () {
	var numberOfPieces = 12;
	    aspect = "3:4",
	    aspectW = parseInt(aspect.split(":")[0]);
	    aspectH = parseInt(aspect.split(":")[1]);
	    container = $("#puzzle");
	    imgContainer = container.find("figure");
	    img = imgContainer.find("img");
	    path = img.attr("src");
	    piece = $("<div />");
	    peiceW = Math.floor(img.width() / aspectW); 
	    peiceH = Math.floor(img.height() / aspectH);
	    idCounter = 0;
	    positions = [];
	    empty = {
	    	top: 0,
	    	left: 0,
	    	bottom: peiceH,
	    	right: peiceW
	    };
	    
});