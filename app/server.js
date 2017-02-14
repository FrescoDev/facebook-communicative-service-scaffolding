import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import routes from './routes';
import settings from './configuration';
import {Bot, Elements} from 'facebook-messenger-bot';
require('babel-polyfill');

const bot = new Bot(settings.fb.myPageToken, settings.fb.myVerification);

bot.on('message', async message => {
    const {sender} = message;
    await sender.fetch('first_name');

    const out = new Elements();
    out.add({text: `hey ${sender.first_name}, how are you!`});

    await bot.send(sender.id, out);
});


let app = express();

// Use fb bot framework middleware
app.use('/facebook', bot.router());

// Adds some security best practices
app.use(helmet());
app.use(cors());

// Logger
if (!settings.envs.test) {
  app.use(morgan('dev'));
}

// Properly Decode JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Add all HTTP methods
app.use(methodOverride());

// Mount API routes
app.use('/', routes);

// Only use error handler in development
if (settings.envs.development) {
  app.use(errorHandler());
}

app.listen(settings.port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    === App Server ===

    Connected on:
    
    Port: ${settings.port}
    Env: ${app.get('env')}
    
  `)
});

export default app;