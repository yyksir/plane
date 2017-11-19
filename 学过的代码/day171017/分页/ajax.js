// url :请求路径
// callback :  该参数是一个函数，回调函数
// data :  接口的参数
function ajaxPromise(url,data){
	if( data ){
		url = url + "?" + data;
	}
	var pro = new Promise(function(success,failed){
		var ajax = new XMLHttpRequest();
		ajax.open("get",url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if( ajax.status == 200 && ajax.readyState == 4 ){
				//通知成功了
				success( ajax.responseText );
			}
		}
		
		//承诺多久后没有执行成功 就宣告失败
		setTimeout(function(){
			failed();
		},3000)
	})		
	return pro;
}

function ajaxPost(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajax.open("POST",url);
	
	//设置请求头：
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText);
		}
	}	
	ajax.send(data);//向服务器端发送数据 用户名
}
