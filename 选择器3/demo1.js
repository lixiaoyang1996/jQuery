/*
$(function(){
	$('#box').css('color','blue'); //添加一個行為                               alert($('#box').size); 只可以返回一個
	
	$('.pox').css('color','yellow');											// class    alert($('.pox').size);  可以返回多個類選擇器
	
	$('body').css('color','gray');												//body alert($('body').size);   也可以返回多個類選擇器	
	$('#box >p').css('color','yellow');
																								
});
*/

$(function(){
	$('#box').nextUntil('p').css('color','blue'); //同级下
	$('#box').prevUntil('p').css('color','blue');//同级上
});