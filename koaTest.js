const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hi girl';
  console.log(ctx)
});

app.listen(3000);