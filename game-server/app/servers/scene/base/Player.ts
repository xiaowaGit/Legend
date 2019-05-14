import { Actor } from "./Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";
import { Arms } from "../Res/Arms";
import { Res, ResInfo } from "../Res/Res";
import { Helmet } from "../Res/Helmet";
import { Clothes } from "../Res/Clothes";
import { Shoes } from "../Res/Shoes";
import { Jewelry } from "../Res/Jewelry";
import { Necklace } from "../Res/Necklace";
import { Pet } from "./Pet";
import { ResConfig } from "../../../util/resConfig";
import { SkillBook } from "../Res/SkillBook";

/*
     角色类
*/
export class Player extends Actor {
    
    public arms:Arms;
    public helmet:Helmet;
    public clothes:Clothes;
    public shoes:Shoes;
    public jewelry:Jewelry;
    public necklace:Necklace;
    private _ress:Res[];
    private _pets:Pet[];

    constructor(name:string,map_w:number,map_h:number,scene:MainScene) {
        let pactor:PActor = {prev:null,next:null,player:null};
        super(name,map_w,map_h,scene,pactor);
        pactor.player = this;
        this.move_to(this.point);
        this.arms = null;
        this.helmet = null;
        this.clothes = null;
        this.shoes = null;
        this.jewelry = null;
        this.necklace = null;
        this._ress = [];
        this._pets = [];
        //____T:
        this.test_fun();
    }
    // 测试函数
    public test_fun() {
        let books = ResConfig.skillBook_list;
        books.forEach(element => {
            this._ress.push(new SkillBook(element));
        });
        let arms1 = ResConfig.arms_knife_list[0];
        this._ress.push(new Arms(arms1));
        let arms2 = ResConfig.arms_staff_list[0];
        this._ress.push(new Arms(arms2));
        let arms3 = ResConfig.arms_stick_list[0];
        this._ress.push(new Arms(arms3));
        let clothes1 = ResConfig.clothes_list[0];
        this._ress.push(new Clothes(clothes1));
        let clothes2 = ResConfig.clothes_list[1];
        this._ress.push(new Clothes(clothes2));
    }
    /////获得角色信息
    public get_info():{} {
        let arms = this.arms && this.arms.get_res_info();
        let helmet = this.helmet && this.helmet.get_res_info();
        let clothes = this.clothes && this.clothes.get_res_info();
        let shoes = this.shoes && this.shoes.get_res_info();
        let jewelry = this.jewelry && this.jewelry.get_res_info();
        let necklace = this.necklace && this.necklace.get_res_info();
        let player = {name:this.name,blood:this.blood,blood_limit:this.blood_limit,
        magic:this.magic,magic_limit:this.magic_limit,physics_attack:this.physics_attack,
        magic_attack:this.magic_attack,physics_defense:this.physics_defense,
        magic_defense:this.magic_defense,point:this.point,speed:this.speed,is_die:this.is_die};
        return {arms:arms,helmet:helmet,clothes:clothes,shoes:shoes,jewelry:jewelry,
        necklace:necklace,player:player,config_name:this.get_config_name()};
    }
    ////获得角色背包
    public get_bag():ResInfo[] {
        let bag:ResInfo[] = [];
        for (let index = 0; index < 18; index++) {
            const element = this._ress[index];
            if (element)bag[index] = element.get_res_info();
            else bag[index] = null;
        }
        return bag;
    }
    /////是否存在某个类型的宠物
    public has_type_pet(config_name:string):boolean {
        let ret = false;
        this._pets.forEach(element => {
            if (element.get_config_name() == config_name) ret = true;
        });
        return ret;
    }
    ////添加一个宠物
    public add_pet(pet:Pet):boolean {
        if (this.has_type_pet(pet.get_config_name())) return false;
        this._pets.push(pet);
        return true;
    }
    //////移除一个宠物
    public remove_pet(pet:Pet):void {
        let index:number = this.find_pet_obj(pet);
        if (index == null) return;
        this._pets.splice(index,1);
    }
    //////发现pet
    public find_pet_obj(pet:Pet):number {
        for (let index = 0; index < this._pets.length; index++) {
            const element:Pet = this._pets[index];
            if (element == pet) return index;
        }
        return null;
    }
    /**
     * 所有宠物设置目标
     * @param target 
     */
    public set_pet_target(target:Actor) {
        this._pets.forEach(element => {
            element.set_attack_target(target);
        });
    }
    /////获得指定位置的物品
    public get_res_by_index(index:number):Res {
        return this._ress[index];
    }
    /////包裹是否有空位
    public is_package_gap():Boolean {
        for (let index = 0; index < 18; index++) {
            const element = this._ress[index];
            if (element == null) return true;
        }
        return false;
    }

    /////获得包裹的一个空位
    public get_package_gap():number {
        for (let index = 0; index < 18; index++) {
            const element = this._ress[index];
            if (element == null) return index;
        }
        return null;
    }
    ///向包裹指定位置放置物品
    public dis_package_index(index:number,res:Res):boolean {
        if (index >= 18 || index < 0)return false;
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
    ////从包囊中发现物品
    public find_package_obj(res:Res):number {
        for (let index = 0; index < 18; index++) {
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
    
    public get_config_name():string {
        return '人';
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