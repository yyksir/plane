
var http = require("http");

var obj = require("./md.js");


var app = http.createServer((req, res) => {
  console.log(req.url)

 if(req.url !== '/favicon.ico'){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  
    
    res.end();
 }
 
});

app.listen(3000);

console.log("your server is running at http://localhost:3000");
