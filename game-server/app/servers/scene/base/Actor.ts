import {Effect} from './Effect'
import {Point} from './Point'
import { Target } from './Target';
/*
    角色基类
*/
export abstract class Actor implements Target {

    public name:string = null;//玩家姓名
    public blood:number = 0;//气血
    public magic:number = 0;//魔法
    public point:Point = null;

    private effect_stack:Effect[] = [];//效果栈

    constructor(name:string,map_w:number,map_h:number) {
        this.name = name;
        this.blood = 1000;
        this.magic = 1000;
        this.point = {x : map_w * Math.random(),y : map_h * Math.random() };//人物初始化在随机位置
        this.point.x = Math.floor(this.point.x);
        this.point.y = Math.floor(this.point.y);
    }

    public pushEffect(e:Effect):void {
        this.effect_stack.push(e);
    }

    public run():void { // 运行角色身上的效果
        for(let i=0;i<this.effect_stack.length;i++) {
            let e:Effect = this.effect_stack[i];
            e.run();
        }
        let del_list:Effect[] = [];
        this.effect_stack.forEach(element => {
            let is_run = element.is_run();
            if (!is_run) del_list.push(element);
        });
        del_list.forEach(element => {
            let index = this.effect_stack.indexOf(element);
            if (index != -1) this.effect_stack.splice(index,1);
        });
    }
    
    public getTarget():Actor[] {
        return [this]
    }
}