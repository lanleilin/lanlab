
// const Koa=require('koa');

// const router = require('koa-router')();

// const app = new Koa();

// // log request URL:
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });

// // add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });

// // add router middleware:
// app.use(router.routes());

// app.listen(3002);
// console.log('app started at port 3002...');
// 

var http = require('http');
var urllib = require('url');

var port = 3002;
var data = {'name': 'jifeng', 'company': 'taobao'};

http.createServer(function(req, res){
  var params = urllib.parse(req.url, true);
  console.log(params);
  if (params.query && params.query.callback) {
    //console.log(params.query.callback);
    var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
    res.end(str);
  } else {
    res.end(JSON.stringify(data));//普通的json
  }     
}).listen(port, function(){
  console.log('server is listening on port ' + port);  
})