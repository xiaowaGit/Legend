import { Actor } from "./Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";
import { Arms } from "./Arms";
import { Res } from "./Res";

/*
     角色类
*/
export class Player extends Actor {
    
    public arms:Arms = null;
    private _ress:Res[] = [];

    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super(name,map_w,map_h,scene,pactor);
    }
    /////包裹是否有空位
    public is_package_gap():Boolean {
        for (let index = 0; index < 20; index++) {
            const element = this._ress[index];
            if (element == null) return true;
        }
        return false;
    }

    /////获得包裹的一个空位
    public get_package_gap():number {
        for (let index = 0; index < 20; index++) {
            const element = this._ress[index];
            if (element == null) return index;
        }
        return null;
    }
    ///向包裹指定位置放置物品
    public dis_package_index(index:number,res:Res):boolean {
        if (index >= 20 || index < 0)return false;
        if (this._ress[index]) return false;
        this._ress[index] = res;
        return true;
    }
    /////卸下武器
    public un_arms():boolean {
        if (!this.arms) return true;
        if (this.arms && this.is_package_gap() == false) return false;
        if (this.arms) {
            this.arms.unuse(this);
            let index:number = this.get_package_gap();
            this.dis_package_index(index,this.arms);
            this.arms = null;
            return true;
        }
    }
    ////从包囊中发现物品
    public find_package_obj(res:Res):number {
        for (let index = 0; index < 20; index++) {
            const element:Res = this._ress[index];
            if (element == res) return index;
        }
        return null;
    }
    //////取出物品
    public out_package_index(index:number):Res {
        let res:Res = this._ress[index];
        this._ress[index] = null;
        return res;
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