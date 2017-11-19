<?php
	header("content-type:text/html;charset=utf-8");
	$uname = $_GET["uname"];
	//模拟一个数组  存放几个用户名 判断 uname在数组中是否存在
	$arr = array("lichune","admin","xiaoming");
	$flag = true;//为真表示不存在
	for( $i = 0 ; $i < count($arr) ; $i++ ){
		if( $uname == $arr[$i] ){ //存在
			$flag = false;
			break;
		}
	}
	if( $flag ){ //不存在
		echo  0; // 0就表示不存在
	}else{
		echo 1;  //存在
	}
?>