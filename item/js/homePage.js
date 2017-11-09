var index=0;
var timer=null;
timer=setInterval(autoPlay,2000)
function autoPlay(){
	if(index==5){
		index=0
	}
	$(".da-ad ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	$(".da-ad ol li").eq(index).addClass("current").siblings().removeClass("current")
										
	index++;
}
	$(".da-ad ol li").mouseover(function(e){
		e.stopPropagation();
		clearInterval(timer);
		$(".da-ad ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
		$(".da-ad ol li").eq($(this).index()).addClass("current").siblings().removeClass("current");
		})
	$(".da-ad ol li").mouseout(function(){
		timer=setInterval(autoPlay,2000)
		
	})
	
	
	
	$(".slide ul li").mouseover(function(e){
		e.stopPropagation();
		$(".slide ul li").css("background","#e8e3eb");
		$(this).css("background","white")
		
		$(".slide ol li").css("display","none")
		$(".slide ol li").eq($(this).index()).css("display","block")
		
	})
	$(".slide ol li").mouseover(function(){
		$(".slide ul li").css({"background":"#e8e3eb",
		"borderLeft":"1px solide #654579"
		});
		
		$(this).css("display","block");
		
	})
	$(".slide ol li").mouseout(function(){
		$(".slide ul li").css("background","#e8e3eb");
		$(this).css("display","none");
		
	})
	
	$(".index-good-tab ul li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".index-good-list ul").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
	//手风琴  买了又买
		
		
		$(".index-buy-list dl dd").mouseenter(function(){
	  	
			$(this).parent().find(".exfirst").show();
			$(this).find(".exfirst").hide();
			
			$(this).parent().find(".first").hide();
			$(this).find(".first").show();
			
			
			
		}).mouseleave(function(){
			$(this).find(".exfirst").show();
			$(this).find(".first").hide();
		})
		
		$(".index-buy-list dl").mouseleave(function(){
			$(this).find(".exfirst").eq(0).hide();
			$(this).find(".first").eq(0).show();
			
			
		})
		

function timeDiff(start,end){
	return Math.abs(start.getTime()-end.getTime());
}
var timer =setInterval(showTime,1000);
showTime()
function showTime(){
	var newTime=new Date( "2017-11-10 14:00:00");
	var now=new Date();
	var t=timeDiff(newTime,now)/1000;
	
	var h=parseInt(t/3600);
	var min=parseInt((t-h*3600)/60)
	var sec=parseInt(t-h*3600-min*60)
	
	$(".timediff").html(h+":"+min+":"+sec)
}

$(".flash-expand").click(function(){
	$(".index-sale-more").css("display","block");
	$(this).css("display","none")
})



//	$(".goTop").click(function(){
////		$("body,html").scrollTop(0)	
//		$("body,html").animate({"scrollTop":0},1000)
//		
//	})
//	
//	var flag=true
//	$(".sidebar-btn").click(function(){
//		if(flag){
//			$(".sidebar").animate({"width":280},500)
//			$(".sider-data").css("display","block")
//			flag=false;
//		}else{
//			flag=true;
//			$(".sidebar").animate({"width":40},500)
//			$(".sider-data").css("display","none")
//		}
//		
////		$(".sider-data").css("display","block")
////		$(".sidebar").animate({"width":280},500,function(){
////			$(".sidebar-btn").click(function(){
////				
////				$(".sider-data").css({"display":"none",
////				"width":"40px"})
////			})
////		})
//		
//	})


