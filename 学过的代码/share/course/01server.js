var http = require("http");

var app = http.createServer((req,res) => {
  res.end("helloworld")
});

app.listen(3000)
