/**
 * 返回json格式的数据
 */
var http = require("http");
//模拟数据库获取的数据
var obj = {
  list:[
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    }
  ]
}


var app = http.createServer((req, res) => {
 
 	if(req.url!="/favicon.ico"){
 res.setHeader("Access-Control-Allow-Origin","*");
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  console.log("111111111") //打印了2次---捆绑销售---超市的塑料袋

  res.write(JSON.stringify(obj));
  
  res.end();
 }
});

app.listen(3000);

console.log("your server is running at http://localhost:3000");
