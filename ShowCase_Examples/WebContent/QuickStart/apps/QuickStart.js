/**
 * 
 */

(function(){
	
	window.onload= function(){
		
		alert("Load Event-Version 1  Called");
	}	;
    
	window.onload= function(){
		
		alert("Load Event-Version 2  Called");
	};
	
}());



$(function(){
	
	alert("Ready Event  Called");
});