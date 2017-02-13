import MetaHandler from '../http-request-handlers/meta.handler';
import {Router} from 'express';
import settings from '../configuration';

const routes = new Router();
const version = settings.apiVersion;

routes.get(`${version}/meta`, MetaHandler.index);

export default routes;
