	
	//选项卡
	$(".login-tab a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		$(".login-ct form").eq($(this).index()).addClass("selected").siblings().removeClass("selected")
	})
	
	var flagName=null;
	$(".regiph").blur(function(){
		reg=/^\d{11}$/;
//		alert($(".regiph").val())
		if(reg.test($(".regiph").val())){
			flagName=true;
			$("#register-mobile-error").css("display","block")
			$("#register-mobile-error").html("正确")
		}else{
			flagName=false;
			$("#register-mobile-error").html("电话号码有误")
			$("#register-mobile-error").css("display","block")
		}
	})
	
	var flagYz=null;
	$(".confirm").blur(function(){
		var str=$("#yz").html();
		if($(".confirm").val()==str){
			flagYz=true;
			$("#register-yz-error").css("display","block")
			$("#register-yz-error").html("验证码正确")
		}else{
			flagYz=false;
			$("#register-yz-error").html("验证码错误")
			$("#register-yz-error").css("display","block")
		}
	})
	var flagPsd=null;
	$(".regpsd").blur(function(){
		reg=/^\w{6,}$/;
		if(reg.test($(".regpsd").val())){
			$("#register-psd-error").show()
			$("#register-psd-error").html("密码正确")
			flagPsd=true;
		}else{
			flagPsd=false;
			$("#register-psd-error").show()
			$("#register-psd-error").html("密码错误")
		}
	})
	
	$(".register-btn").click(function(){
		
		if(flagPsd&&flagName&&flagYz){
			document.cookie = "uname="+$(".regiph").val();
			document.cookie = "upwd="+$(".regpsd").val();
			alert("注册成功");
			
		}
	})
	$(".login-btn").click(function(){
		var uname=$(".logiph").val();
		var upsd=$(".logpsd").val();
		var str=document.cookie;
		var arr=str.split("; ")
		for(var i=0;i<arr.length;i++){
			item=arr[i].split("=");
			console.log(item)
			if(item[0] == "uname"){
				iname = item[1];
			}
			if(item[0] == "upwd" ){
				ipwd = item[1];
			}
		}
		if( iname == uname && ipwd == upsd ){
					alert("登录成功");
				location.href = "homePage.html";
				}else{
					alert("登录失败");
				}
		
		
	})
	
	
	
	
	
	

	