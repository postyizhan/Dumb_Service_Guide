---
title: 优化误区
sidebar_position: 6
---

# 优化误区

## 混合端

由于混合端本身的问题，混合端能进行的优化很少，并且混合端**不可以装大部分优化MOD**，但是你仍然可以进行除安装优化mod以外的其他优化操作

~~不使用混合端来达到最佳的优化~~

## 优化插件

:::warning

我们在这里列出的不建议使用的插件是一个类型的插件，而不是仅仅只是不推荐某个插件. 对于推荐的"优化插件"，其实大多数也是通过限制红石/漏斗/实体数量和AI等完成的，

在狭义上任何使用插件操作限制任何东西都不能称之为"*优化*"而是"*限制*"，这里只是以"*优化插件*"代指一些"*限制插件*".

所以说，使用这些"优化插件"，不如更换服务端核心，甚至不如优化启动参数和调优服务端配置文件

:::

## 不建议使用的"优化"插件

:::info
有很多优化是核心自带的，使用插件只是利用核心的 API，效率上是比不上核心的. 如 AI，村民，爆炸，区块卸载等...
:::

### 对于 AI 有影响的插件

使用 Pufferfish Fork（如Purpur/Leaf等）降低远处生物的 AI 比插件利用 API 更加有效和符合游戏逻辑，

因此，停止使用类似插件，如:

*LaggRemover （Fork） - 自以为是的AI移除，有时候会导致即使插件卸载，实体AI也被移除了，比不上Pufferfish（使用 Purpur Fork即可）根据距离衰减的AI.*

### 任何对于内存 GC 进行操作的插件

内存 GC 本身是受 JVM 本身控制的. GC 本身是会导致顿卡的，而并不能起到"清理内存"的作用.

因此，停止使用类似插件，如:

*Spartan - 一款性能非常差的付费反作弊，如果你买了那么恭喜你你被骗了（大嘘），如果近期购买请立即申请退款!*

### 村民优化插件

村民非常吃性能，如果只需要保留公用交易性质可以使用 [Shopkeepers](https://www.spigotmc.org/resources/shopkeepers.80756/) 插件创建无 AI 的村民，如果你想保留村民和 AI 只需要在 purpur.yml 中搜索 lobotomize 启用即可，另外在 config/paper-world-defaults.yml 中有一部分可以优化的内容和村民相关，但这可能会导致村民看起来有一点呆.

<details>
  <summary>我应该怎么调整?</summary>

(其实你也可以用笨蛋脚本)

`paper`配置

```yaml
tick-rates:
  behavior:
    villager:
      validatenearbypoi: 120
  sensor:
    villager:
      secondarypoisensor: 240
```

`purpur`配置
```yaml
world-settings:
  default:
    mobs:
      zombie:
        aggressive-towards-villager-when-lagging: false
      villager:
        lobotomize:
          enabled: true
          search-radius:
            acquire-poi: 16
            nearest-bed-sensor: 16
```


</details>

因此，停止使用类似插件，如:

*[Villager Optimiser](https://www.spigotmc.org/resources/villager-optimiser-1-14-2-1-16-5.68517/) - 降低村民寻路操作的插件*

### 地面清理插件

地面上的物品很少会导致性能问题，而且物品往往会自行消失，如果你的服务器掉落物特别多，你可以将 /config/paper-world-default.yml 中的 alt-item-despawn-rate 调整为 true.

并将你需要快速消失的物品加在后面，数字的单位为刻，即下面这个例子里代表世界里的"cobblestone(原石)"和"cobbled_deepslate(深层板岩)"会在600tick(30s)后自动消失：

<details>
  <summary>我应该怎么调整?</summary>

```yaml
  spawning:
    all-chunks-are-slime-chunks: false
    alt-item-despawn-rate:
      enabled: true
      items:
        cobblestone: 600
        cobbled_deepslate: 600
        netherrack: 600
        rotten_flesh: 900
        ender_pearl: 900
        leather: 900
        bone: 1200
        bone_meal: 1200
        cactus: 900
        egg: 900
        feather: 900
        gunpowder: 1200
        arrow: 900
        blaze_rod: 1200
        cod: 1200
        salmon: 1200
        string: 1200
        ink_sac: 900
        slime_ball: 1200
        phantom_membrane: 900
```
除此之外，你还可以提升 spigot.yml 中的 merge-radius 从而使得更远的物品也能堆叠.

</details>

因此，停止使用类似插件，如:

*[ClearLagg](https://www.spigotmc.org/resources/clearlagg.68271/) - 清理物品插件*

### 生物清理插件

使用插件删除生物是笨蛋中的笨蛋才会做的事，生物如果达到服务器设定的上限则会停止生成. 而被清除后，服务器必须重新生成生物，这个过程也是非常费性能的.

如果你不需要那么多怪物，直接调整/config/paper-world-default.yml即可，例子如下，请自行查看 [paper 文档](https://docs.papermc.io/paper/reference/configuration) 知道你在干什么:

<details>
  <summary>我应该怎么调整?</summary>

```yaml
    spawn-limits:
      ambient: 1
      axolotls: 5
      creature: 5
      monster: 20
      underground_water_creature: 4
      water_ambient: 4
      water_creature: 4
```
</details>

因此，停止使用类似插件，如:

*[Cleaner](https://www.minebbs.com/resources/cleaner-addon.4816/) - 清理生物/物品插件*

### 实体堆叠插件

除非玩家乐意养殖非常非常多生物，否则对生物进行堆叠仍然会使服务器浪费性能在刷新更多的生物上，否则请不要安装堆叠插件.

因此，停止使用类似插件，如:

*[StackMob](https://www.spigotmc.org/resources/stackmob-enhance-your-servers-performance-without-the-sacrifice.29999/) - 实体密集时进行堆叠的插件(若一定要使用仍推荐本插件而不是其他堆叠插件)*

### 爆炸优化插件

paper 酱为你在 /config/paper-world-default.yml 中准备了爆炸优化.

<details>
  <summary>我应该怎么调整?</summary>

```yaml
optimize-explosions: true
```
</details>

### 区块卸载插件

服务器会自己卸载插件，与其使用插件一遍遍检查区块是否需要卸载不如让服务器自行卸载，

如果你需要更快卸载请调整 /config/paper-world-default.yml

<details>
  <summary>我应该怎么调整?</summary>

```yaml
delay-chunk-unloads-by: 8s #区块将在8s后卸载
keep-spawn-loaded: false #停止出生点区块常加载
```

</details>

### 多合一的"优化插件"

:::warning

大佬们，多合一插件大多数都是把几个开源的功能拼接到一起就说多合一说不定还付费了. 不要花钱在付费"优化"插件上

:::

#### Lagassist

跑路付费多合一"优化插件"，不要使用. 下面是吐槽(包含一定程度的恶意，问就是因为被骗过一百块)

<details>
  <summary>为什么不要用这个插件</summary>

1. ChunkAnalyser - 简单的搜索世界的红石，漏斗，实体之类，有很多平替插件如 [insights](https://modrinth.com/plugin/insights)/ [entitydetection](https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/)

2. LagMonitor，LagMap，Benchmark - 很鸡肋的性能检测(远不如spark)

3. RedstoneCuller - 直接破坏红石机器，平替插件 [AntiRedstoneClock](https://hangar.papermc.io/OneLiteFeather/AntiRedstoneClock-Remastered?fbclid=IwAR0sVVd50oTgHd9UVJJ7C8dTyL3PiVIBaJtpT6NyMy_D2T2Ho0umzrqtaDw)

4. ChunkHoppers - 有专门的区块漏斗插件，体验远好于此插件

5. ChunkLimiter - 平替插件 [Farmcontrol](https://www.spigotmc.org/resources/farmcontrol-1-15-1-19.86923/)/ [mob-farm-manager](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-20-hopper-support.15127/)，甚至更多配置项

6. Dynamic View Distance - 平替插件 [view-distance-tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/)

总之每个所谓优化都是槽点，插件占用的性能多于"优化"的性能，请不要继续使用了.

</details>

## 有用的~~优化~~限制插件

### FarmControl

功能

* 禁止在超大型动物养殖场和村民中繁殖。
* 减少生物农场内不必要的随机移动。
* 禁用农场中生物的 AI。
* 限制区域中允许的实体数。
* 高度可配置 - 允许您根据需要定制插件。
* 低影响 - 首当其冲的插件处理是异步执行的。

[下载地址](https://hangar.papermc.io/froobynooby/FarmControl)

### TooManyGen

限制玩家生成的区块数

该插件将计算每个玩家生成的区块数量。在某种程度上超过阈值，它将开始通过以下方式惩罚玩家：

* 增加对鞘翅的耐久损失
* 让玩家冒着失去鞘翅的风险
* 缩短他们的视距

[下载地址](https://modrinth.com/plugin/toomanygen)

### OkTreasures

原版 Minecraft 有一个错误，即埋藏的寻宝速度非常慢，有时会冻结您的游戏。这也发生在多人游戏中，如果有人打开埋藏的宝藏搜索，服务器有时会崩溃。并且很难发现真正的错误，从 Minecraft 1.20.1 开始，这还没有修复。

这个插件通过用一个自定义的、更快、更简单的搜索替换原版埋藏的寻宝来修复这些类型的崩溃：它只是在合理的距离内随机选择一个海滩并将宝藏放在那里。由于这主要是异步的，因此不会导致延迟。

详细使用和局限性，请看[官方页面](https://hangar.papermc.io/Kyle/OkTreasures)

### Chunky Border

一个设置世界边界的工具，比原版的好用多了，[下载地址](https://modrinth.com/plugin/chunkyborder)

### EntityDetection

这个插件可以用来寻找哪些东西在拖慢服务器，使用此插件，您可以快速找到包含大量怪物、动物甚至 漏斗 。

[查看地址](https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/)

### AntiRaidFarm

使用这个简单的插件阻止利用无限不祥之兆循环的作弊突袭农场。此插件没有命令。想要绕过冷却时间的玩家可以获得权限。

[下载地址](https://hangar.papermc.io/jmp/AntiRaidFarm)

### Insights

此插件是一个高性能的用来扫描世界红石加以限制的插件，爆杀大部分限制插件

[插件地址](https://modrinth.com/plugin/insights)


