---
title: 数据库相关
sidebar_position: 5
---

# 数据库相关

:::info

数据库好处都有啥? 谁说对了就给他!

1. 数据库的备份维护等所占用的时间远比将整个服务器停止后打包压缩备份快得多;

2. 同样的数据量， MySQL比yml/txt/sqlite等占用也小得多.特别是对于数据量大的插件(30Gb的dynmap文件使用MySQL后整个数据库将压缩到15Gb);

3. 读取速度快， 某些插件使用yml储存数据时启动一个插件甚至需要10s+， 换用mysql后服务器启动速度快;

4. Redis/MySQL 等数据库配合可轻松完成玩家数据同步等;

5. 在数据量较大时候相较sqlite有更好的性能， 查询时需要的时间短， 特别是某些经济插件付款时避免顿卡.

:::
# MySQL / MariaDB

MariaDB是著名的MySQL分叉，只是服务器腐竹的话，你只需要知道这两个东西差不多就好了

:::info

当 MariaDB Server 的前身 MySQL 于 2009 年被 Oracle 收购时，MySQL 创始人 Michael “Monty” Widenius 出于对 Oracle 管理权的担忧而分叉了该项目，并将新项目命名为 MariaDB。

> 来自 https://mariadb.org/zh/

:::

# 安装

我会告诉你 **我认为** 最简单的几种安装数据库的方法

## 小皮数据库

<details>
  <summary>从官网下载和安装</summary>

![](_images/数据库相关/1.png)

![](_images/数据库相关/2.png)

![](_images/数据库相关/3.png)

![](_images/数据库相关/4.png)

![](_images/数据库相关/5.png)

![](_images/数据库相关/6.png)

</details>

<details>
  <summary>卸载MySQL5和安装MySQL8</summary>

MySQL5 版本太低了，很多插件需要更高版本的，装MySQL8就够用了

![](_images/数据库相关/7.png)

![](_images/数据库相关/8.png)

</details>

<details>
  <summary>配置数据库</summary>

安装好后在首页启动 MySQL

![](_images/数据库相关/9.png)

更改root账户的密码

:::danger

不要设置过于简单的密码！

尤其是你打算把数据库开到公网，**绝对不要**设置过于简单的密码！

**这真的很严重**

:::

![](_images/数据库相关/10.png)

![](_images/数据库相关/11.png)

然后你就可以建数据库了，建好之后把你填这里的信息填到插件的配置文件里

</details>

## 宝塔面板

<details>
  <summary>从官网下载和安装</summary>

![](_images/数据库相关/12.png)

![](_images/数据库相关/13.png)

![](_images/数据库相关/14.png)

![](_images/数据库相关/15.png)

![](_images/数据库相关/16.png)

![](_images/数据库相关/17.png)

![](_images/数据库相关/18.png)

![](_images/数据库相关/19.png)

宝塔面板是必须要绑定账号的

按照提示去做

![](_images/数据库相关/20.png)

全 x 掉，一个都不需要装

![](_images/数据库相关/21.png)

</details>

<details>
  <summary>安装MySQL</summary>

![](_images/数据库相关/22.png)

![](_images/数据库相关/23.png)

![](_images/数据库相关/24.png)

</details>

<details>
  <summary>配置数据库</summary>

TODO

</details>

### 配置

1. 请一定记得关闭远程数据库访问;

2. 如果一定要开启远程数据库请设置复杂密码;

3. 必须要先创建数据库插件才有权限创建表(这不废话吗不然插件配置文件里填什么);

:::info

语句示例:

```sql
CREATE DATABASE <数据库名称> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```
解释: `CHARACTER SET utf8mb4` 将数据库字符集设置为 utf8mb4， 能够存储包括表情符号在内的所有 Unicode 字符。 `utf8mb4_general_ci` 是一种不区分大小写（case-insensitive）的排序规则，如果你想区分大小写，可以改为 `utf8mb4_bin`，`_bin` 意为以二进制方式比较字符。

:::

4. 数据库参数记得调整(TODO)

## Redis

TODO

