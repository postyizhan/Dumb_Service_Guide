---
sidebar_position: 1
---

# Residence

:::info

`SpigotMC` :https://www.spigotmc.org/resources/.11480/

`GitHub` :https://github.com/Zrips/Residence

`文档`:https://www.zrips.net/residence/

`插件百科` :https://mineplugin.org/Residence

`Bukkit（太老了不要用）` :https://dev.bukkit.org/projects/residence

`CurseForge（太老不要使用）` :https://www.curseforge.com/minecraft/bukkit-plugins/residence

:::

老牌领地插件

## 免费下载?

可以免费下载，自己去 SpigotMC 帖子找地址

## 前置?

Residence 需要前置插件 CMIlib

https://www.spigotmc.org/resources/cmilib.87610/

https://www.zrips.net/cmilib/

## 开源?

只有 src（源码） 没构建脚本，就是说你不能构建出jar文件

不如说是假开源

![](_images/Residence-github.png)

## 刷钱漏洞

5.1.4.2 版本之前存在刷钱漏洞

#### 修复方式一（推荐）

更新插件版本至最新

#### 修复方式二

禁止掉residence.command.bank权限

该权限res默认给予全体玩家

#### [LP]
```
lp group default permission set residence.command.bank false
```
#### [PEX]
```
pex group default add -residence.command.bank
```
#### [GM]
```
mangaddp builder -residence.command.bank
```