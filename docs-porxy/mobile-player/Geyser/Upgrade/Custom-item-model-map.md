---
title: 自定义物品模型映射
sidebar_position: 5
---

# 自定义物品模型映射

Geyser提供了自定义物品映射功能，可以为CustomModelData物品注册基岩版行为，以实现自定义物品

## Kas-tle的java2bedrock

java2bedrock.sh(俗称转换器)是一个自动资源包转换工具，可以将JAVA版的资源包转化成基岩版资源包的工具

:::tips

不建议过度依赖转换器，转换出来的资源包也仅供参考学习，没有手写的效果好，不过如果你能接受也不是不能用

转换器并非是完美的存在，他依然存在许多缺陷

:::

[项目地址](https://github.com/Kas-tle/java2bedrock.sh)

### 本地使用

:::tips

转换器需要在linux系统上运行，如果你使用WINDOWS，你可以选择wsl或者虚拟机

:::

本地运行你只需要执行

```
./converter.sh 资源包名称.zip
```

如果你需要更加复杂的转换，请查看项目的Github

### 在线转换

:::tips

你需要拥有一个GitHUB账号才可以

:::

#### 操作步骤

* 首先你需要新建一个Issue
* 在类型选择**Pack Conversion**
* 在**Java Pack Direct Download URL** 填上你的资源包下载地址（不能是网盘，要求是直链）
* 最后勾上最下面的用户协议，点击开始就可以
* 转换好后，有个机器人会提醒你去Github Action下载，下载就来就是转换好的基岩版资源包
* 将

## 人工手写映射

:::tips

此教程需要你有一定的动手和理解基岩版资源包结构，你可以动脑去看[基岩版资源包模板](https://github.com/Mojang/bedrock-samples/releases)学习

此教程假设你已能熟练使用ItemsAdder插件、并且正在边看[Geyser Wiki](https://wiki.geysermc.org/geyser/custom-items/)边看这文档学着做

:::

#### 物品映射

这里我非常推荐使用[Geyser Wiki](https://wiki.geysermc.org/geyser/custom-items/)中的Json映射

(施工中)

#### 手持3D模型

(施工中)

#### 饰品(帽子翅膀类)

(施工中)

#### 自定义方块映射

[Geyser自定义方块映射](https://wiki.geysermc.org/geyser/custom-blocks/)

(施工中)
