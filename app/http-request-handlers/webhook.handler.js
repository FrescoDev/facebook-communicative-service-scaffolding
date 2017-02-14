import BaseHandler from './base.handler'
import settings from '../configuration'

class WebHookHandler extends BaseHandler {
    index(req, res) {
        if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === settings.fb.myVerification) {
            res
                .status(200)
                .send(req.query['hub.challenge']);
        } else {
            res.sendStatus(403);
        }
    }
}

export default new WebHookHandler()