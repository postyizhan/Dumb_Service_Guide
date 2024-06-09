---
title: 网络优化
sidebar_position: 7
---

# 网络优化

网络优化主要目的是解决服务器上行带宽占用导致的玩家 **Ping**（即网络延迟）过高导致的糟糕游戏体验。

## 降低服务器视野距离（即 View distance）

:::warning

请注意视野距离和玩家体验相关性也较大，除非特殊情况否则不建议大幅压缩视野换取带宽占用。

:::

### 手动调整

在 spigot.yml 中可以设置服务器的视野距离

```
view-distance: 8  #视野距离为 8 chunks
```

如果你使用的默认 10 chunks 的视野距离，可能对于带宽来说有一定的压力，可以酌情减少，

### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/) 实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。

## 降低区块加载速度

在 /config/paper-global.yml 中有关于区块生成的一些参数

```
chunk-loading-basic:
  #注：以下的单位均为 chunks / seconds
  player-max-chunk-generate-rate: -1.0
  #为每个玩家生成分块的最大速率，设置为-1 则禁用。
  player-max-chunk-load-rate: 100
  #任何单个播放器加载块的最大速率，设置为-1 则禁用。
  player-max-chunk-send-rate: 75
  #服务器发送给单个玩家的最大速率。设置为-1 则禁用。
```

其中 player-max-chunk-send-rate 对应服务器每秒钟最多向玩家发送多少区块包，设置得越低玩家收到完整的地图信息越慢，

服务器虽然总是会发送几乎同样多的区块信息，但由于发送速度降低，这会降低上行带宽的最大占用率，从而避免大量跑图导致的顿卡。

## 控制实体数量

Minecraft 服务端会将每个实体的行为实时发送给附近的玩家客户端，这个包通常来说占用是很少的，但是大量玩家处于实体密集型区域时将出现大量带宽占用。

bukkit.yml 以及 config/paper-world-default.yml 中对于 spawn-limits 做了限制（若二者均有值时取 Paper 的，若 Paper 中为 -1 时取 Bukkit）

```
spawn-limits:
  monsters: 70
  #怪物包括 远古守卫者、末影人、监守者、蠹虫、猪灵蛮兵、流浪者、幻术师、骷髅、潜影贝、僵尸疣猪兽、守卫者、岩浆怪、僵尸村民、僵尸猪灵、卫道士、幻翼、猪灵、史莱姆、末影龙、溺尸、掠夺者、唤魔者、僵尸、蜘蛛、尸壳、恶魂、劫掠兽、疣猪兽、洞穴蜘蛛、女巫、枯萎、末影螨、凋灵骷髅、烈焰人、巨人、爬行者、恼鬼。

  animals: 10
  #动物包括 猪、北极熊、狐狸、猫、僵尸马、嗅探者、熊猫、兔子、狼、牛、海龟、青蛙、悦灵、行商羊驼、驴、蜜蜂、骆驼、绵羊、蝌蚪、豹猫、鸡、哞菇、马、羊驼、流浪商人、鹦鹉、山羊、骡、骷髅马刷、炽足兽.

  water-animals: 5
  # 包括鱿鱼和海豚

  water-ambient: 20
  # 包括鳕鱼、河豚、鲑鱼、热带鱼

  water-underground-creature: 5
  # 包括发光鱿鱼

  axolotls: 5
  # 美西螈

  ambient: 15
  # 只包括蝙蝠，建议0

```

大多数情况下，直接将所有限制降低到原来的 50% 是合理的，由于限制和实际实体数量不成线性，实际存在的实体数量大约是原来的 72%。

## 更低的实体显示距离（不推荐）

降低实体显示距离可以让服务器少发送实体的刷新数据包，但是代价是玩家看不到远处的实体，即使在服务器上这些实体是存在的。

```
entity-tracking-range:
  players: 48
  animals: 48
  monsters: 48
  misc: 32
  other: 64
```

## 选择更加合理的 AntiXray（反矿物透视）方式

停止使用 [Orebfuscator](https://modrinth.com/plugin/orebfuscator) 等矿物混淆插件，使用 Paper 自带的矿物混淆。

使用 Paper 矿物混淆时候，尽量不要在非主世界开启 mode 2 或 mode 3

***TODO***
