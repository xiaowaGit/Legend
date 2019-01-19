import { Target } from "./Target";

export interface Effect {
    getName():string;//效果名字
    getActive():Target;//效果的施放者
    getTarget():Target;//效果的目标对象
    run():void;//运行效果
    is_run():Boolean;//效果是否运行中
    kill():void;//强制kill运行中的效果
}