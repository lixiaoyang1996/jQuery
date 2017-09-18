$(function(){
	//$('li:first').css('backgroundColor','#ccc');//第一个
	//$('li:last').css('backgroundColor','#ccc');//最后一个
	//$('li:not(.red)').css('backgroundColor','#ccc');//不是Class为red
	//$('li:even').css('backgroundColor','#ccc');//偶数
	//$('li:odd').css('backgroundColor','#ccc');//奇数
	//$('li:eq(2)').css('backgroundColor','#ccc');//索引为2
	//$('li:gt(2)').css('backgroundColor','#ccc');//索引大于2
	//$('li:lt(2)').css('backgroundColor','#ccc');//索引小于2
	//$('div :header').css('backgroundColor','#ccc');
	$('input').get(0).focus();
	$(':focus').css('backgroundColor','red'); //选择当前被焦点的元素
	
	//$('li').first().css('backgroundColor','#ccc');
	//$('li').last().css('backgroundColor','#ccc');
	//$('li').not('.red').css('backgroundColor','#ccc');
	//$('li').eq(2).css('backgroundColor','#ccc');
	
	//$('div:contains("hello")').css('backgroundColor','#ccc');
	//$("div:empty").css('backgroundColor','#ccc').css('height','20px').css('width','100%');
	
	//$('ul:has(.red)').css('backgroundColor','#ccc'); //选取子元素含有类为red的元素，而不是选取red元素
	//$('ul').has('.red').css('backgroundColor','#ccc');
	
	//$('div:parent').css('backgroundColor','#ccc'); //选取div中的非空元素

	
//alert($('i').parent().size());
	//alert($('li').parent().get(0).nodeName);
	//$('li').parent().css('backgroundColor','#ccc'); //有关li元素的父元素都被选取
	//$('li').parents().css('backgroundColor','#ccc'); //有关li元素的父元素以及祖先元素都被选取
	//$('li').parentsUntil('body').css('backgroundColor','#ccc');
	
	
	//$('div:hidden').css('backgroundColor','#ccc').sh=(1000);
	//alert($('div:hidden').size());
});