---
title: 常见问题
sidebar_position: 1
---

# 常见问题

## Downloading mojang_x.x.x.jar

你的服务器卡在

```
Downloading mojang_x.x.x.jar
```

怎么办？使用魔法就好啦！

## 不会在命令行界面 (CMD / 终端 / Powershell) 使用魔法
假定你使用的是 Clash，在首页点击“服务模式”，点击“管理”——“安装”，然后“开启tun模式”。

装好小地球是亮着的

![](_images/常见问题/小地球.png)

在命令行界面（一般情况下，一个黑 / 蓝框框）中执行这两条

```shell
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
```

其中 `7980` 是你使用的魔法道具设置的端口，若于实际不同，请替换。

注：输入之后仅对这个命令行窗口有效，`开启新的 / 关闭它`之后要重新输入

> 大佬们，浏览器能用不是cmd能用，不然你猜我为什么写这个

## You need to agree to the EULA in order to run the server

去重读[这里](/docs/start/launch-server.md)

## 怎么搜索字符

按 `Ctrl+F`，你的浏览器 / 文本编辑器 (比如 VSCode) 会蹦出来一个搜索框，可以用来搜索文件 / 网页中的内容，这个快捷键几乎适用于所有软件。

如果你的浏览器没有弹出搜索框，试试使用现代浏览器 (Chrome / Edge / Firefox)。

## 如何关闭服务器

[看这里](/docs/start/basic/server-management-command.md#stop)

## 由于个人信息公钥丢失，聊天已被禁用

去 `server.properties` 把 `enforce-secure-profile` 改为 `false`。

## 进服角色没皮肤

试着安装皮肤插件

[跨服端 | SkinsRestorer](/docs/process/cross-server/plugin/BC&WF.md#skinsrestorer)

看你需求，如果你是单端就安装单端版的 SkinsRestorer

## Java 为什么 jar 包是个白纸

服务器根本没有安装 Java 程序或者服务器上 Java 未设置环境变量。（其实这个不影响任何东西，忽略即可）

## Java 怎么做绿色版以及绿色版怎么使用

下载 Java 时下载 `.zip` 或 `.tar.gz` 结尾的压缩包，将压缩包解压到任意位置。

随后可以修改环境变量 `JAVA_HOME` 即可，如果不懂看[这篇文章](https://blog.csdn.net/MrsHorse/article/details/82695353)

## 如何启用命令方块？

服务器中命令方块默认关闭

**并且不建议开启**

我想不明白为什么你要用性能低下的命令方块

如果你非要用的话：

在 `server.properties` 中

```
enable-command-block=false
```

将此项设置为true
