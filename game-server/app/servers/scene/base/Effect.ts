export interface Effect {
    run():void;//运行效果
    is_run():Boolean;//效果是否运行中
    kill():void;//强制kill运行中的效果
}