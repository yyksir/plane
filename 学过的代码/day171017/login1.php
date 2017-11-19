<?php
	$uname=$_POST["uname"];
	$upwd=$_POST["upwd"];
	
	if($uname=="admin"&&$upwd=="111"){
		echo 0;
	}else{
		echo 1;
	}
?>