
var example=(function(){
	
	 pageHead='jQuery Example';
	var item ={
	 itemName:"Mobile Phone",
	 image:"../images/Mobile1.jpg",
	 price:14500.00
	};
		
 return{
	 
	 getItem:function()
	 {

      return item;
	 	
	 },
     
      getHeading:function(){
    	  
    	  return pageHead;
      }

 } ;
	
})();


function init(){
	
	
 var  product=example.getItem();
   
 $("h1").html(example.getHeading());
  
 $("h2").html(product.itemName);
 $("#itemImage").attr("src",product.image);
 $(".style1").html(product.price);
}



$(function(){

	init();
});

