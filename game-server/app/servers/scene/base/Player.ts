import { Actor } from "./Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";

/*
     角色类
*/
export class Player extends Actor {
    
    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super(name,map_w,map_h,scene,pactor);
    }

    ////向地图的所有玩家推送消息
    public notice_all_player(onType:string,body:Object):void {
        this._scene.notice_all_player(onType,body);
    }

    /// 向某个玩家通知消息
    public notice_one_player(onType:string,body:Object):void {
        this._scene.notice_one_player(onType,body,this.name);
    }
}