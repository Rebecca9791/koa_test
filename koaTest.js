const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hi girl';
  console.log(ctx)
});

// app.listen(3000);
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);