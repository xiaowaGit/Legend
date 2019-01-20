import { Actor } from "./Actor";
import { Effect } from "./Effect";

export abstract class Target {
    
    private effect_stack:Effect[] = [];//效果栈

    constructor() {
    }

    public pushEffect(e:Effect):void {
        this.effect_stack.push(e);
    }
    ///获得效果栈
    public getEffectStack():Effect[] {
        return this.effect_stack;
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

    abstract getTarget():Actor[];
}