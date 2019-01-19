import {ILifeCycle ,Application} from "pinus";
import {events} from "pinus";
import { MainScene } from "./drive/MainScene";

export default function () {
    return new Lifecycle();
}

class Lifecycle implements ILifeCycle {

    afterStartAll(app:Application):void {
        console.log("------------------初始化场景-------------------");
        MainScene.getInstance()
    }

    beforeShutdown(app:Application):void {
        console.log("------------------clear场景-------------------");
        MainScene.getInstance().Destructor()
    }
}