var koa = require('koa');
var parse = require('co-body');

var app = new koa();
var port = process.argv[2];

app.use(function *(){
  var body = yield parse(this);
  this.body = body.name.toUpperCase();
});

app.listen(port);