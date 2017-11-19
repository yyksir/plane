/**
 * 将完整的一个页面输出到前端
 */
var http = require("http");

var html = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="keywords" content="" />
            <meta name="description" content="不超过150个字符" />
            <meta name="robots" content="index,follow" />
            <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
            <meta name="format-detection" content="telphone=no, email=no" />
            <title></title>
          </head>
          <body>
            我是一个页面
          </body>
        </html>`;


var app = http.createServer((req, res) => {
 
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

  res.write(html);
  
  res.end();
});

app.listen(3000);

console.log("your server is running at http://localhost:3000");
