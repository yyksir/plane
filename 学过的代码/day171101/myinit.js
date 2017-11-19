//引入模块并重命名
requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		vd : "validate"
	}
})

//操作页面元素  完成功能实现
requirejs(["jquery","vd"],function(jq,vd){
	//$("body").css("background","orange")
	$("form").submit(function(){
		//用户名
		var userflag = vd.checkName( $("#uname").val() );//true false
		if( !userflag ){
			alert("用户名不合法");
			return false;
		}
		
		//密码
		var pwdflag = vd.checkPwd( $("#upwd").val() );
		if( !pwdflag ){
			alert("密码不合法");
			return false;
		}
		
		
		//确认密码
		var upwdflag = vd.qpwd( $("#upwd").val() , $("#qpwd").val() );
		if( !upwdflag ){
			alert("两次密码不一致");
			return false;
		}
		
		return true;
	})
})