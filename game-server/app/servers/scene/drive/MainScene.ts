import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { ChannelService, Channel } from "pinus";
import { PActor } from "../base/PActor";
import { PRes } from "../base/PRes";
import { Player } from "../base/Player";
import { Point } from "../base/Point";
import { Move } from "../Effect/Move";

export interface PTerm {//项
    player:PActor;
    res:PRes;
}

interface Message {//消息
    handler:string;//消息处理函数名
    body:any;//消息体
}
/*
    场景驱动
*/
export class MainScene extends Target {

    private static _instance:MainScene = null;//场景单例

    public static getInstance():MainScene {
        if(!this._instance) this._instance = new MainScene();
        return this._instance;
    }

    public name:string = null;
    private _message_stack:Message[] = [];
    private _actors_dic:{} = {};
    private _actors:Actor[] = [];
    public grid_map:number[][] = [];
    public term_map:PTerm[][] = [];
    private _tick_timer:NodeJS.Timer = null;
    private _channelService: ChannelService;
    private _channel: Channel;

    constructor() {
        super();
        this.name = "绝地求生";
        this._tick_timer = setInterval(this.tick.bind(this),1000/60); // 游戏世界刷新时间为1/60秒每帧
        for (let i = 0; i < 500; i++) {
            this.grid_map[i] = [];
            this.term_map[i] = [];
            for (let j = 0; j < 500; j++) {
                this.grid_map[i][j] = 1;
                this.term_map[i][j] = {player:null,res:null};
            }
        }
    }

    public push_message(msg:Message):void {
        this._message_stack.push(msg);
    }

    private tick():void {
        this.handler_message();
        this.execute_effect();
        this.manager_res();
    }
    private handler_message():void {////处理客户端消息（每帧处理）
        while(this._message_stack.length > 0) {
            let msg:Message = this._message_stack.shift();
            if (this[msg.handler]) {
                this[msg.handler](msg.body);
            }else{
                console.error("MainScene not has "+msg.handler+" function!");
            }
        }
    }
    private manager_res():void {////管理地图资源，生成和销毁吃鸡装备

    }
    ////执行游戏世界中的各种效果
    private execute_effect():void {
        this._actors.forEach(element => {///所有角色的效果
            element.run();
        });
        this.run();///全局效果
    }
    ///进入游戏世界
    public enter_game(user_name):Player {
        let pactor:PActor = {prev:null,next:null,player:null};
        let player:Player = new Player(user_name,this.grid_map[0].length,
            this.grid_map.length,this,pactor);
        pactor.player = player;
        player.move_to(player.point);
        this._actors.push(player);
        this._actors_dic[user_name] = player;
        // this.notice_all_player("onCreate",player);
        return player;
    }
    ///离开游戏世界
    public leave_game(user_name):void {
        let player:Player = this._actors_dic[user_name];
        if (player) {
            player.out();//离开地图
            let index:number = this._actors.indexOf(player);
            this._actors.splice(index,1);
            this._actors_dic[user_name] = null;
            this.notice_all_player("onDelete",player);
        }
    }

    public set_channel(channelService: ChannelService, channel: Channel):void {
        this._channelService = channelService;
        this._channel = channel;
    }
    /// 向某个玩家通知消息
    public notice_one_player(onType:string,body:Object,tuid:string):void {
        let tsid = this._channel.getMember(tuid)['sid'];
        this._channelService.pushMessageByUids(onType, body, [{
            uid: tuid,
            sid: tsid
        }]);
    }
    ////向地图的所有玩家推送消息
    public notice_all_player(onType:string,body:Object):void {
        this._channel.pushMessage(onType, body);
    }

    public getTarget():Actor[] {
        return this._actors;
    }

    public Destructor():void {// 程序退出，清理场景
        clearInterval(this._tick_timer);
        this._channel = null;
        this._channelService = null;
        MainScene._instance = null;
    }

    ////////----------------message 处理函数-----------------------------

    private handler_move_to(body:{pot:Point,target:string}):void {
        let player:Player = this._actors_dic[body.target];
        if (player) {
            let move:Move = new Move(body.pot,this.grid_map,player);
            player.pushEffect(move);
        }
    }
}