////配置文件信息  引入文件模块     包括为文件重命名    
//requirejs.config({
//	paths : {  //引入模块文件  并为文件重命名
//		jquery : "jquery-1.11.1.min",
//		eq : "equal"
//	}
//})
//
////调用引入的模块   进行功能实现
//requirejs(["jquery","eq"],function(jquery,eq){//参数代表某个模块  通过参数可以调用模块中的某个方法
//	//功能实现
//	$("body").css("background","#0033FF");
//	
//	alert( eq.add(23,45) );
//})

requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min",
	}
}) 

requirejs(["jquery"],function(){
	$("body").css("background","aquamarine")
})