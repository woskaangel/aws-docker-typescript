import 'dotenv/config';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const healthCheck = async (ctx: Koa.ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = 'OK';
};

const startServer = async () => {
  const app = new Koa();
  const route = new Router();
  route.use('', healthCheck);
  app
    .use(route.routes())
    .use(route.allowedMethods())
    .use(bodyParser())
    .listen(8080);
};

startServer();
