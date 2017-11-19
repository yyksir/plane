//
//var http=require("http");
//
//var obj={
//	list:[
//		{
//			id:1
//		},
//		{
//			id:3
//		},
//		{
//			id:5
//		}
//	]
//}
//
//var app=http.createServer((req,res)=>{
//	
//	if(req.url!=="/favicon.ico"){
//	res.setHeader("Access-Control-Allow-Origin","*")
//	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//	res.write(JSON.stringify(obj))
//	res.write("fndijfdf");
//	res.write("<h1>hdusihd</h1>");
//	res.end();x
//		
//	}
//	
//});
//
//app.listen(3000);
//console.log("your server is running at http://localhost:3000")

//var http=require('http');
//http.createServer((req,res)=>{
//		console.log(req.url)
//	if(req.url!=="/favicon.ico"){
//		res.setHeader("Access-Control-Allow-Origin","*")
//		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
//		res.write("这是客户端")
//		console.log("这是服务器端")
//		
//	}
//	
//}).listen(8080);
//console.log("your server is runing at http://localhost:3000")

var http=require("http")
http.createServer((req,res)=>{
	if(req.url!="/favicon.ico"){
		res.setHeader("Acess-Contrl-Allow-Origin","*")
		res.writeHead(200,{"Content-Type":"text/html;charest=utf-8"})
		res.write("customer")
		console.log("server")
		res.end();
	}
}).listen(5000)
console.log("your server is running at http://localhost:5000");





