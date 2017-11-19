//target 目标值
//obj  要操作的对象
//attr  要操作的属性
//  fn 用来接收一个功能   fn就是一个函数名称 
function startMove(obj,json,fn){
	//再次点击按钮时  清除定时器
	clearInterval(obj.timer); //为每一个obj对象 添加一个 timer属性
	obj.timer = setInterval(function(){
		for (var attr in json) {//遍历json对象  attr代表操作的属性名称
			var current = 0;
			//获取当前操作对象的实际属性值
			if( attr == "opacity" ){
				current = parseFloat(getStyle(obj,attr))*100;//透明度操作整数
			}else{
				current =parseInt(getStyle(obj,attr)) ;	//非透明度获取值
			}
			
			var speed = (json[attr] - current)/10;
			speed = speed>0?Math.ceil(speed) : Math.floor(speed);
			if( json[attr] ==  current  ){ //表示某个功能结束
				clearInterval(obj.timer);
				if(fn){//如果fn存在，就调用该函数
					fn();//函数调用：上一个功能结束后，进入下一个函数的执行
				}
			}else{
				//如果attr值是一个透明度  单独操作
				if(attr == "opacity"){
					obj.style.opacity = (current + speed)/100;//设置小数
				}else{
					obj.style[attr] = current + speed + "px";
				}
			}	
		}
	},30)
}

function getStyle(obj,attr){
	return window.getComputedStyle?window.getComputedStyle(obj,false)[attr]:obj.currentStyle[attr];
}