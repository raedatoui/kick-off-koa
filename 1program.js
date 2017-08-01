var koa = require('koa');

var app = new koa();

var port = process.argv[2];

app.use(function *() {
  // you can set the response body in handler like this
  this.body = 'hello koa';
});

app.listen(port);