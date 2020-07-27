const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const db = require('./db/db')
const app = new Koa();

const logsSrevice = db.createService('logs');
const usersService = db.createService('users');
const router = new Router();
app.use(bodyParser());

router.get('/me',async ctx => {
  ctx.body = await usersService.findOne({});
});

router.post('/logs',async ctx => {
  await logsSrevice.create(ctx.request.body);
  ctx.body = 'Log added successfully!';
});

router.get('/logs',async ctx => {
  ctx.body = await logsSrevice.find({});
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8888);
console.log('listening on port 8888');
