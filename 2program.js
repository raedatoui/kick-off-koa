var koa = require('koa');
var koaRouter = require('koa-router');

var app = new koa();
var router = new koaRouter();

var port = process.argv[2];

router.get('/', function (ctx, next){
  ctx.body = 'hello koa';
});

router.get('/404', function (ctx, next){
  ctx.status = 404;
  ctx.body = 'page not found';
});

router.get('/500', function (ctx, next){
  ctx.status = 500;
  ctx.body = 'internal server error';
});


app.use(router.routes());

app.listen(port);