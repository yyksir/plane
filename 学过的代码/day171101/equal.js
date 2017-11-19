define(function(){
	//为什么要用return ？  
	//为什么 返回一个对象   ？ 
	return {
		isEqual : function(str1,str2){
			return str1==str2;
		},
		add : function(a,b){
			return a+b;
		},
		diff : function(a,b){
			return a-b;
		}
	};
})
