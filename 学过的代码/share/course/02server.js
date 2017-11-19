/*
 * 同源策略
 *  协议  http 
 *  域名  localhost   127.0.0.1
 *  端口  3000
 *    端口被占用
 *      win+r
 *      cmd
 *      netstat -ano|findstr "8080"
 *        找到最后一个词   
 *      TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       17472
 *      打开任务管理器找pid选项为17472的应用，结束应用即可释放端口
 * 
 *  原生模块：https 、https 、fs、net 、url,querystring.....
 */
// 引入协议---http,https 都属于nodejs的原生模块 ---- 只要安装了node就会有的默认的模块
var http = require("http");

var app = http.createServer((req, res) => {
  //req,拿到前端所传递过来的数据
  //res,可以给前端返回数据
  //写头信息   文件类型  + 编码
  //文件类型
   /*
    * text/plain    ---   纯文本类型  --- 即使遇到html标签也会原样输出
    * text/html     -----  遇到标签  自动解析标签
    * charset=utf-8
    */
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  
  //res.write   字符串
  res.write("helloworld");
  res.write("<h1>helloworld</h1>");
  
  res.end();
});

app.listen(3000);

console.log("your server is running at http://localhost:3000");
