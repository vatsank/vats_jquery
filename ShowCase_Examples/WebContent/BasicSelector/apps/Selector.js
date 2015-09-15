/**
 * 
 */


$(function(){
	
		
	$("#id").click(function(){
		       
		$("#hd1").css("border","3px solid blue");
		
		
	});
	
$("#cls").click(function(){
		
		$(".style1").addClass("style3");
			
	});
	
$("#name").click(function(){
	
	$("img").css("border","3px solid blue");
});
	
$("#all").click(function(){
	
	$("*").css("font-style","italic");
});
	
	
$("#multi").click(function(){
	
		
	$("#list1, #img2").css("border", "2px solid red");
	

	
});
	
	$("#ctx").click(function(){
	
		
	$("li", $("#colLef")).css("border", "2px solid red");
	
  });

$("#id8").click(function(){
	
		
	$("ul>li:eq(2)").css("border", "2px solid blue");
	
  });
  

$("#selectAll").click(function () {
	      $('.case').attr('checked', true);
});

$("#unSelect").click(function () {
    $('.case').attr('checked', false);
});


});

