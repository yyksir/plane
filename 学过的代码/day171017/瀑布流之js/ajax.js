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

function ajax(url,fnWin,fnFaild){
	var ajax = null;
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open("get",url,true);	
	ajax.send();
	ajax.onreadystatechange = function (){
		if (ajax.readyState==4) {
			if(ajax.status == 200){
				if (fnWin) { //判断该函数是否存在，如果存在，就调用  返回结果
					fnWin(ajax.responseText); 
				}			
			}else{
				if (fnFaild){
					fnFaild();
				}	
			}
		}
	}
}

