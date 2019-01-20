import { SceneRemote } from '../remote/sceneRemote';
import {Application, BackendSession} from 'pinus';
import { FrontendSession } from 'pinus';
import { Point } from '../base/Point';
import { MainScene } from '../drive/MainScene';

export default function(app: Application) {
    return new SceneHandler(app);
}

export class SceneHandler {
    constructor(private app: Application) {
    }

    /**
     * Send messages to users
     *
     * @param {Object} msg message from client
     * @param {Object} session
     * @param  {Function} next next stemp callback
     *
     */
    async send_msg(msg: {content: string , target: string}, session: BackendSession) {
        let rid = session.get('rid');
        let username = session.uid;
        let channelService = this.app.get('channelService');
        let param = {
            msg: msg.content,
            from: username,
            target: msg.target
        };
        let channel = channelService.getChannel(rid, false);

        // the target is all users
        if (msg.target === '*') {
            channel.pushMessage('onChat', param);
        }
        // the target is specific user
        else {
            let tuid = msg.target;
            let tsid = channel.getMember(tuid)['sid'];
            channelService.pushMessageByUids('onChat', param, [{
                uid: tuid,
                sid: tsid
            }]);
        }
    }
    /////玩家移动操作
    async move_to(msg: {handler:string, body:{pot:Point,target: string}}, session: BackendSession) {
        if (session.uid != msg.body.target) {
            return {error : "你只能移动自己！"};
        }else{
            MainScene.getInstance().push_message(msg);
            return {ok : 200};
        }
    }
}