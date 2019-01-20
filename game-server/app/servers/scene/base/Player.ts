import { Actor } from "./Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";

/*
     ???
*/
export class Player extends Actor {
    
    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super(name,map_w,map_h,scene,pactor);
    }

    ////????????????
    public notice_all_player(onType:string,body:Object):void {
        this._scene.notice_all_player(onType,body);
    }

    /// ?????????
    public notice_one_player(onType:string,body:Object):void {
        this._scene.notice_one_player(onType,body,this.name);
    }
}