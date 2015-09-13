
var example=(function(){
	

	message="Welcome to jQuery Programming";	

 return{
	 
	 getMessage:function()
	 {

	      return message;
	 	
	 }

 } ;
	
})();


function init(selector){
	
   var msg=example.getMessage();
   
  
	$(selector).html(msg);
}



$(function(){
	
	init('div');
});

