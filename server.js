/* const serve = require('koa-static');
const send = require('koa-send');
const koa = require('koa');
const app = koa();
const port = 8080;

app.use(serve(__dirname + '/dist'));
app.use(serve(__dirname + '/api/galleries'));

app.use(function* index() {
  yield send(this, './dist/index.html');
});

app.listen(port); */
