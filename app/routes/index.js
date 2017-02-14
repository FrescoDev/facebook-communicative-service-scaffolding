import MetaHandler from '../http-request-handlers/meta.handler';
import WebHookhandler from '../http-request-handlers/webhook.handler';
import {Router} from 'express';
import settings from '../configuration';
import {Bot, Elements} from 'facebook-messenger-bot';
require('babel-polyfill');

const bot = new Bot(settings.fb.myPageToken, settings.fb.myVerification);

const routes = new Router();
const version = settings.apiVersion;

bot.on('message', async message => {
    const {sender} = message;
    await sender.fetch('first_name');

    const out = new Elements();
    out.add({text: `hey ${sender.first_name}, how are you!`});

    await bot.send(sender.id, out);
});

// Use fb bot framework middleware
routes.use(`${version}/webhook`, bot.router());
routes.get(`${version}/meta`, MetaHandler.index);
//routes.get(`${version}/webhook`, WebHookhandler.index);


export default routes;
