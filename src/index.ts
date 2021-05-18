import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const route = new Router();
route.get('/', async (ctx: Koa.ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = 'OK';
});

const app = new Koa();
app
  .use(bodyParser())
  .use(route.routes())
  .use(route.allowedMethods())
  .listen(8080);

console.log('server run 8080');
