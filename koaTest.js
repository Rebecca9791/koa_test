const http = require('http')
const Koa = require('koa');
const io = require('socket.io')(http);
const app = new Koa();
const app2 = new Koa();
const net = require('net')
app2.use(async ctx => {
  ctx.body = 'hi,3001'
  console.log(3001)
}).listen(3001)
app.use(async ctx => {
  ctx.body = 'hi,3000'
  // const socketWeb = 'http://localhost:3001/';
  io.sockets.on('connection', socket => {
    // io.sockets.emit('connect', { 'status': '正确' });
    console.log('connected')
  });
  const client = new net.Socket()
  try {
    client.connect('http://localhost:3001/', () => {
      console.log('天')
    })
  } catch(err){
    console.log('destroy')
    client.destroy()
  }
});

app.listen(3000);
