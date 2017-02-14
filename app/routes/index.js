require('babel-polyfill');
import MetaHandler from '../http-request-handlers/meta.handler';
import {Router} from 'express';
import settings from '../configuration';
import {Bot, Elements} from 'facebook-messenger-bot';

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

export default routes;
