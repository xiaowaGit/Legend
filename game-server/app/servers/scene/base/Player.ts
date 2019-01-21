import { Actor } from "./Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";
import { Arms } from "../Res/Arms";
import { Res } from "../Res/Res";
import { Helmet } from "../Res/Helmet";
import { Clothes } from "../Res/Clothes";
import { Shoes } from "../Res/Shoes";
import { Jewelry } from "../Res/Jewelry";
import { Necklace } from "../Res/Necklace";

/*
     角色类
*/
export class Player extends Actor {
    
    public arms:Arms = null;
    public helmet:Helmet = null;
    public clothes:Clothes = null;
    public shoes:Shoes = null;
    public jewelry:Jewelry = null;
    public necklace:Necklace = null;
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
    //////卸下指定key的装备
    private un_equipment(key:string):boolean {
        if (!this[key]) return true;
        if (this[key] && this.is_package_gap() == false) return false;
        if (this[key]) {
            this[key].unuse(this);
            let index:number = this.get_package_gap();
            this.dis_package_index(index,this[key]);
            this[key] = null;
            return true;
        }
    }
    /////卸下武器
    public un_arms():boolean {
        return this.un_equipment('arms');
    }
    /////卸下头盔
    public un_helmet():boolean {
        return this.un_equipment('helmet');
    }
    /////卸下衣服
    public un_clothes():boolean {
        return this.un_equipment('clothes');
    }
    /////卸下鞋子
    public un_shoes():boolean {
        return this.un_equipment('shoes');
    }
    /////卸下首饰
    public un_jewelry():boolean {
        return this.un_equipment('jewelry');
    }
    /////卸下项链
    public un_necklace():boolean {
        return this.un_equipment('necklace');
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