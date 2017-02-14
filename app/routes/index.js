import MetaHandler from '../http-request-handlers/meta.handler';
import WebHookhandler from '../http-request-handlers/webhook.handler';
import {Router} from 'express';
import settings from '../configuration';

const routes = new Router();
const version = settings.apiVersion;

routes.get(`${version}/meta`, MetaHandler.index);
routes.get(`${version}/webhook`, WebHookhandler.index);

export default routes;
