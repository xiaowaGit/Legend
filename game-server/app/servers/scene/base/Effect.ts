import { Target } from "./Target";

export interface EffectConfig {
    name:string;
    hurt_one_blood?:boolean;///单次气血伤害(伤害值由effect决定)
    hurt_one_magic?:boolean;///单次魔法伤害(伤害值由effect决定)
    add_one_blood?:number;///单次气血增加
    add_one_magic?:number;///单次魔法增加
    hurt_continue_blood?:boolean;///持续气血伤害(每秒)(伤害值由effect决定)
    hurt_continue_magic?:boolean;///持续魔法伤害(每秒)(伤害值由effect决定)
    add_continue_blood?:number;///持续气血增加(每秒)
    add_continue_magic?:number;///持续魔法增加(每秒)
    continue_time?:number;////持续时间(秒)
    add_one_physics_attack?:number;///单次物理攻击增加
    add_one_magic_attack?:number;///单次魔法攻击增加
    add_one_physics_defense?:number;////单次物理防御增加
    add_one_magic_defense?:number;/////单次魔法防御增加
    minus_one_physics_attack?:number;///单次物理攻击减少
    minus_one_magic_attack?:number;///单次魔法攻击减少
    minus_one_physics_defense?:number;////单次物理防御减少
    minus_one_magic_defense?:number;/////单次魔法防御减少
    attack_l:number;////效果攻击距离
    range_l:number;////效果攻击范围
    type:'attack'|'assist'|'hinder';//效果类型（攻击、辅助、障碍）
}

export interface Effect {
    getName():string;//效果名字
    getActive():Target;//效果的施放者
    getTarget():Target;//效果的目标对象
    run():void;//运行效果
    is_run():Boolean;//效果是否运行中
    kill():void;//强制kill运行中的效果
}