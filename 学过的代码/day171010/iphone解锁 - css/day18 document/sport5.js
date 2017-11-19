// 对象:{  }
//obj ： 操作的对象 
//callback :回调函数  回头再调用  
function startMove(obj,json,callback){
	clearInterval(obj.timer);//为每一个对象添加一个定时器属性 让每一个对象都有自己对应的定时
	obj.timer = setInterval(function(){
		var flag = true;//如果falg为true，停止定时器
		//获取当前操作的元素在样式值  每启动一次定时器  该值就会发生变量
		for( var attr in json ){
			var current = 0;
			//判断attr是否是opacity 如果是需要单独处理
			if( attr == "opacity" ){
				//操作透明度
				current = parseFloat( getStyle(obj,attr) )*100 ;
				
			}else{
				current = parseInt( getStyle(obj,attr) );
			}
			var speed = (json[attr]- current)/10;
			
			speed = speed>0?Math.ceil(speed) : Math.floor(speed);
			
			//如果某个样式的目标值 ！= 当前设置的样式值 就关闭开关
			if( json[attr]  != current ){//动作结束
				flag = false;
			} 
			
			//样式改变
			if( attr == "opacity" ){
				obj.style.opacity = (current + speed)/100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
		
		//循环结束后 判断flag是否是true  如果是就停止定时器
		if( flag ){
			clearInterval(obj.timer);
			//下一个动作可以是任意的
			//调用回调函数
			if( callback ){
				callback();
			}
		}
	},30)
} 


function getStyle(obj,attr){
	//注意返回的是字符串
	return window.getComputedStyle ? window.getComputedStyle(obj,false)[attr] : obj.currentStyle[attr];
}
	