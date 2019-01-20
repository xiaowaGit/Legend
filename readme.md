这是吃鸡传奇服务端
基于pinus框架的服务端
目前项目还处于开发环节，核心类已写完

1、game-server，游戏服务器

启动方法：
1、执行npm-install.bat或npm-install.sh
2、编译游戏服
cd game-server
npm run build
2、启动游戏服
cd dist
node app
显示“all servers startup in xxx ms”即表示启动成功


调试游戏服务器的方法：
1、安装vscode
2、在game-server目录启动vscode
3、按照正常流程启动游戏服
4、在“调试”界面，选择Attach To Connector或Attach To Master
5、按F5把调试器挂上去，然后就可以断点调试了。