/*
$(function(){
	$('#box').css('color','blue'); //添加一个行为                              alert($('#box').size); 只可以返回一个
	
	$('.pox').css('color','yellow');											// class    alert($('.pox').size);  可以返回多个类选择器
	
	$('body').css('color','gray');												//body alert($('body').size);   也可以返回多个类选择器
	
																								
});
*/

$(function(){
	//$('#box >p').css('color','yellow');
	
	//$('p,#box,strong').css('color','blue');
	
	//$('*').css('color','blue');
	
	//$('ul li a').css('color','blue');
	
	$('ul li a,#box').css('color','blue');
});