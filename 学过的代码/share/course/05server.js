/**
 * 塑料袋req.url
 */
var http = require("http");


var app = http.createServer((req, res) => {
  console.log(req.url)

 if(req.url !== '/favicon.ico'){//没有塑料袋
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  console.log('222222222')
    res.write("111111111");
    
    res.end();
 }
 
});

app.listen(8080);

console.log("your server is running at http://localhost:3000");
