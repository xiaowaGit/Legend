import { Actor } from "./Actor";
import { Effect } from "./Effect";

/*
    目标类
    不能提供删除效果的接口，要移除效果只能调用效果的kill方法
*/
export abstract class Target {
    
    private _effect_stack:Effect[] = [];//效果栈

    constructor() {
    }
    ////kill 某类型效果
    public killEffectByName(effect_name:string):void {
        let effect_stack:Effect[] = this.getEffectStack();
        effect_stack.forEach(element => {
            if (element.getName() == effect_name) {
                element.kill();
            }
        });
    }
    ////是否有某个效果了
    public hasEffect(effect_name:string):boolean {
        let ret = false;
        this._effect_stack.forEach(element => {
            if (element.getName() == effect_name) ret = true;
        });
        return ret;
    }

    public pushEffect(e:Effect):void {
        this._effect_stack.push(e);
    }
    ///获得效果栈
    public getEffectStack():Effect[] {
        return this._effect_stack;
    }

    public run():void { // 运行角色身上的效果
        for(let i=0;i<this._effect_stack.length;i++) {
            let e:Effect = this._effect_stack[i];
            e.run();
        }
        let del_list:Effect[] = [];
        this._effect_stack.forEach(element => {
            let is_run = element.is_run();
            if (!is_run) del_list.push(element);
        });
        del_list.forEach(element => {
            let index = this._effect_stack.indexOf(element);
            if (index != -1) this._effect_stack.splice(index,1);
        });
    }

    abstract getTarget():Actor[];
}