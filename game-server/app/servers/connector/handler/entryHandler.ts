import { Application, FrontendSession } from 'pinus';

export default function (app: Application) {
    return new Handler(app);
}

export class Handler {
    constructor(private app: Application) {

    }

    /**
     * New client entry.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    async entry(msg: {username: string}, session: FrontendSession) {
        let self = this;
        let rid = "MainScene"; // 当前所在的游戏场景
        let uid = msg.username;
        let sessionService = self.app.get('sessionService');

        // duplicate log in
        if (!!sessionService.getByUid(uid)) {
            return {
                code: 500,
                error: true
            };
        }

        await session.abind(uid);
        session.set('rid', rid);
        session.push('rid', function (err) {
            if (err) {
                console.error('set rid for session service failed! error is : %j', err.stack);
            }
        });
        session.on('closed', this.onUserLeave.bind(this));

        // put user into channel
        let user_info = await self.app.rpc.scene.sceneRemote.add.route(session)(uid, self.app.get('serverId'), rid, true);

        return user_info;
    }

    
    /**
     * User log out handler
     *
     * @param {Object} app current application
     * @param {Object} session current session object
     *
     */
    onUserLeave(session: FrontendSession) {
        if (!session || !session.uid) {
            return;
        }
        this.app.rpc.scene.sceneRemote.kick.route(session, true)(session.uid, this.app.get('serverId'), session.get('rid'));
    }
}