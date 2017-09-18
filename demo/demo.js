
/*
$( function(){
$('input').click(function(){
	alert('第一个按钮');
});
});



$(function(){
	$('#box').css('color','red');
	
		
	alert($);    //jQuery对象的内部
	alert($());  //返回的jQuery对象
	alert($('#box'));  //返回的也是jQuery对象
	alert($('#box') .css('color','red'));  //还是返回jQuery对象
	
	
	$('#box').css('color','red').css('font-size','10px').css('font-weight','bold');
	alert(1);
	alert(2);
});
*/



/*
jQuery(function(){
	jQuery('#box').css('color','red');
});


alert($===jQuery);
*/

/*$(function(){
	//alert($('#box'));  //返回的jQuery对象
	//alert(document.getElementById('box'));  //[object HTMLDivElement],原生DOM对象
	//alert($('#box').get(0));   //[object HTMLDivElement]
	
	alert($(document.getElementById('box')).css('color','red')); //jQuery对象和DOM对象之间的互换
});*/


$(function(){
	$('#box').css('color','gray').css('height','200px').css('background-color','red');
});




