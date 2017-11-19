//target : 目标值
//attr  ：  操作样式
//obj ： 操作的对象
function startMove(target,attr,obj){
	clearInterval(obj.timer);//为每一个对象添加一个定时器属性 让每一个对象都有自己对应的定时
	obj.timer = setInterval(function(){
		//获取当前操作的元素在样式值  每启动一次定时器  该值就会发生变量
		var current = 0;
		//判断attr是否是opacity 如果是需要单独处理
		if( attr == "opacity" ){
			//操作透明度
			current = parseFloat( getStyle(obj,attr) )*100 ;
			
		}else{
			current = parseInt( getStyle(obj,attr) );
		}
		var speed = (target- current)/10;
		
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		
		if( target  == current ){
			clearInterval(obj.timer);
		}else{
			if( attr == "opacity" ){
				obj.style.opacity = (current + speed)/100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	},30)
} 

function getStyle(obj,attr){
	//注意返回的是字符串
	return window.getComputedStyle ? window.getComputedStyle(obj,false)[attr] : obj.currentStyle[attr];
}
	