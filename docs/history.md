# 历史版本
1.0.49
   - 日志时间纠正

1.0.48
   - 解决node0.12.7安装时出现ls: no such file or directory的问题

1.0.47
   - fix npm-shrinkwrap.json里源统一成淘宝源

1.0.46
   - 增加日志信息

1.0.45
   - 单台机器多个进程同时安装时安装目录进行隔离

1.0.44
   - 修复单独安装模块时会误删工程node_modules
   - qupload上传时自动获取时version为文件名，不再和project拼装
   - 修复zk模式下，同步触发失效问题以及非版本模块的支持

1.0.43
   - 解决启用zookeeper时，zkCache加载有时会丢失的问题

1.0.42
   - 回滚npm5.3.0关于npm-shrinkwrap.json对require的支持，理解有出入

1.0.41
   - 支持npm5.3.0 npm-shrinkwrap.json格式，requires的描述

1.0.40
   - read-package-json版本2.0.11依赖json-parse-better-errors，会导致node低版本语法错误

1.0.39 需要同时更新Client和Server
   - 兼容npm5中无版本号的问题
   - 安装遇到getaddrinfo时结束安装
   - 模块策略管理，当前支持三种策略
        * 强制安装(ignoreCache): 会忽略本地缓存以及公共缓存，每次都会重新安装
        * 忽略本地缓存(alwaysUpdate): 会忽略本地缓存，每次都从公共缓存获取，比如SNAPSHOT版本默认会采用这种方式
        * 安装后执行(postInstall): 会在安装完成之后，执行对应模块package.json里scripts配置的脚本，比如postinstall,多个值以逗号分隔

1.0.38
   - 修复npm-shrinkwrap中模块值为空对象的情景
   - 修复yarn.lock中dependencies模块带双引号的情景

1.0.37
   - 解决服务端查看包大小出错问题
   - 解决qupload无法上传问题

1.0.36
   - 支持npm5生成npm-shrinkwrap.json中version的格式

1.0.35
   - 修复服务端缓存与swift不同步的问题

1.0.34
   - repository对于带协议头的支持
   - server端支持zookeeper，解决多进程同步的问题

1.0.33

   - 增加config配置说明
   - 命名约束只针对package.json中name属性，不再限制前后端关联的场景
   - 解决公共缓存服务和swift源不一致问题，优化下载

1.0.32

   - 针对包发布、前后端关联增加对工程命名的约束
   - download和qdownload不需要权限限制，直接下载
   - 增加snapshot和release的区分

1.0.31

   - 增加全局错误捕获，错误退出码为1
   - qdonwload时文件类型识别错误

1.0.30

   - 增加文件名后缀
   - 废除上传下载里notTar参数，支持zip压缩
   - 单文件上传时也会压缩

1.0.29

   - 被快速过度了，忽略

1.0.28

   - 修复install时读取yarn.lock文件时丢失尾部依赖

1.0.27

   - config指令支持指定配置文件
   - download指令对带/的文件名下载能生成对应目录路径

1.0.26

   - 可指定配置文件
   - qupload和qdownload文件名拼接为name + "/" + version
   - 支持单个文件上传和下载

1.0.25

   - fix bug for command annotation

1.0.24

   - 补充文档

1.0.23

   - 增加swift便捷操作

1.0.22

   - qupload和qdownload支持auto参数

1.0.21

   - qupload和qdownload支持根据配置信息动态创建swift的container

1.0.20

   - 新增前后端资源关联，前端上传qupload，后端下载qdownload

1.0.19

   - upload功能重命名为publish

   - 追加上传下载静态资源（从swfit）的功能：upload／download

1.0.18

   - 追加upload功能，可以本地直接上传一个私有包到中央缓存

   - 私有包可以使用alwasySync（相当于snapshot）功能，每次安装都会去中央缓存上最新代码

   - 优化了安装单个模块的流程

1.0.17

   - fix

1.0.16

   - 安装时使用指定npm路径，参数-n或者--npm

1.0.15

   - 增加快捷指令ncs

1.0.14

   - 添加安装前置的对npm-shrinkwrap.json和package.json一致性的校验

1.0.13

   - 添加本地开发与对yarn.lock的支持

1.0.12

   - 修复拷贝隐藏文件的问题

1.0.11

   - 修复强依赖平台的包的过滤
