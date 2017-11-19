<?php
	$uname = $_POST["uname"];
	$upwd = $_POST["upwd"];
	//假设用户名 admin   密码111  登录成功
	if( $uname == "admin" && $upwd == "111" ){
		echo 0; //登录成功 
	}else{
		echo 1; //登录失败
	}
?>