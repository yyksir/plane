
//吸顶
$(window).scroll(function(){
	var sTop=$("body,html").scrollTop();
	if(sTop>764){
		$(".tag").css({"position":"fixed","top":0,"width":"1200px"})
		$(".tag-right").show();
	}else{
		$(".tag").css("position","static");
		$(".tag-right").hide();
	}
//	console.log($(".detail-after").offset().top)
	
	$(".shopinformation").click(function(){
		$("body,html").scrollTop(764);
	})
	$(".usercomment").click(function(){
		$("body,html").scrollTop(4870);
	})
	$(".afterserver").click(function(){
		$("body,html").scrollTop(5960);
	})
})
//count数量增加
var count=1
$(".icon-up").click(function(){
	count++;
	$(".number input").val(count)
})
$(".icon-down").click(function(){
	if(count>1){
	count--;
	$(".number input").val(count)
		
	}
})



//放大镜效果
$(".bottom li").mouseover(function(){
	$(".small img").eq($(this).index()).show().siblings().hide();
	$(".big img").eq($(this).index()).show().siblings().hide();
})
$(".small").mouseover(function(){
	$(".big").show();
	$("#mask").show();
})
$(".small").mouseout(function(){
	$(".big").hide();
	$("#mask").hide();
})
$("#mask").mousemove(function(e){
	var e=e||event;
	var x=e.pageX-$("#mask").width()/2-$(".goods-show").offset().left;
	var y=e.pageY-$("#mask").height()/2-$(".goods-show").offset().top;

	var xMax=$(".goods-show").width()-$("#mask").width();
	var yMax=$(".goods-show").height()-$("#mask").height();
	x=Math.min(xMax,Math.max(0,x));
	y=Math.min(yMax,Math.max(0,y));
//	
	$("#mask").css({
		"left":x,
		"top":y
	})
		var bigx=x*$(".bigImg").width()/$(".small img").eq(0).width();
   		var bigy=y*$(".bigImg").height()/$(".small img").eq(0).height();
   		$(".bigImg").css({
   			"left":-bigx,
   			"top":-bigy
   		})
	
})

