---
sidebar_position: 2
---


# 💎首先是Xray（矿物透视）
为了防止玩家使用作弊端的xray功能

又或者是进行矿透材质包进行作弊

又或者在服务器地图上进行反推世界种子进行矿物查询

导致矿产资源大量泛滥

完完全全的破坏了服务器经济系统

---

❓如何阻止矿物透视

<details><summary>第一步-延长种子反推</summary>

使用paper的anti-xray

这是服务器核心自带的功能

这导致他只需要一些些带宽

就可以阻止你服务器上大量的矿透小子

那么该如何设置才最有效呢

首先请找到您的paper配置的yml文件

> 找到下列模块改成true

```
feature-seeds:
  generate-random-seeds-for-all: true
```
> 这是对每个建筑使用随机种子，防止您的世界种子轻易的被破解

> 还没完，继续找到spigot的yml文件

```
    seed-village: 10387312
    seed-desert: 14357617
    seed-igloo: 14357618
    seed-jungle: 14357619
    seed-swamp: 14357620
    seed-monument: 10387313
    seed-shipwreck: 165745295
    seed-ocean: 14357621
    seed-outpost: 165745296
    seed-endcity: 10387313
    seed-slime: 987234911
    seed-nether: 30084232
    seed-mansion: 10387319
    seed-fossil: 14357921
    seed-portal: 34222645
    seed-ancientcity: 20083232
    seed-trailruins: 83469867
    seed-trialchambers: 94251327
    seed-buriedtreasure: 10387320
    seed-mineshaft: default
    seed-stronghold: default

```

把以上所有数字全部打乱

完成以上设置可进一步防止反推种子

(没有完全杜绝的方法，只能拖延时间)

如果你使用Leaf(1.20.4 7C66D13及以上)或包含Matter 安全种子补丁的分支,那么恭喜你，你可以体验到安全功能种子，地形和生物群落的生成保持不变，但所有矿石和结构都是用 1024 位种子生成的，而不是通常的 64 位种子。这颗种子几乎不可能破解，因为所需的破解时间和资源极长无比，如果你正在使用，那么你基本不用担心种子破解

你也可以使用插件[AntiSeedCracker](https://www.spigotmc.org/resources/antiseedcracker-1-20-4.81495/),这个插件会发送一个虚假的种子到客户端，客户端仍然可以通过分析地形来破解，但难度会大大增强

(所以建议资源世界不定期重置)

</details>

<details><summary>第二步-设置假矿</summary>

解决完种子可以被轻而易举反推的问题

我们还得解决矿物透视的问题

使用paper自带的antixray即可拦截大量矿透

但我们也需要进行一些设置

(可直接抄作业)

⚠警告：engine-mode: 3在1.19.3往后的版本才添加⚠

> 主世界推荐配置

> 配置Ⅰ
```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 3
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - air
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - air
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    update-radius: 2
    use-permission: false
```
![test](_images/anticheat/antixray-mode3-1.png)

> 配置Ⅱ

```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - chest
    - coal_ore
    - deepslate_coal_ore
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - emerald_ore
    - deepslate_emerald_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    - air
    lava-obscures: false
    max-block-height: 64
    replacement-blocks: []
    update-radius: 2
    use-permission: false

```
![test](_images/anticheat/antixray-mode1-1.png)

> 配置Ⅲ-*推荐使用*

```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - air
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - air
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    update-radius: 2
    use-permission: false
```

![test](_images/anticheat/antixray-mode2-1.png)

> 主世界配置推荐使用 **配置Ⅲ**

---

那么下界呢？

该如何在下界使用其他的 antixray 配置呢？

找到 world_nether/paper-world.yml 

将下列你喜欢的配置进行复制粘贴即可

> 下界配置Ⅰ

```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    # See note about air and possible client performance issues above.
    - air
    - ancient_debris
    - bone_block
    - glowstone
    - magma_block
    - nether_bricks
    - nether_gold_ore
    - nether_quartz_ore
    - polished_blackstone_bricks
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - basalt
    - blackstone
    - gravel
    - netherrack
    - soul_sand
    - soul_soil
    update-radius: 2
    use-permission: false
```
![test](_images/anticheat/antixray-nether-mode2.png)

> 下界配置Ⅱ

```

anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - ancient_debris
    - nether_gold_ore
    - nether_quartz_ore
    lava-obscures: false
    max-block-height: 128
    # The replacement-blocks list is not used in engine-mode: 1. Changing this will have no effect.
    replacement-blocks: []
    update-radius: 2
    use-permission: false


```

![test](_images/anticheat/antixray-nerher-mode1.png)

> 下界配置Ⅲ

```

anticheat:
  anti-xray:
    enabled: true
    engine-mode: 3
    hidden-blocks:
    - air
    - ancient_debris
    - bone_block
    - glowstone
    - magma_block
    - nether_bricks
    - nether_gold_ore
    - nether_quartz_ore
    - polished_blackstone_bricks
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - basalt
    - blackstone
    - gravel
    - netherrack
    - soul_sand
    - soul_soil
    update-radius: 2
    use-permission: false


```

![test](_images/anticheat/antixray-nerher-mode3.png)

这边推荐使用**下界配置Ⅰ**

那么终末地配置呢？

我们推荐在终末地地图不使用假矿

所以world_the_end/paper.world.yml的配置

我们的推荐如下

```

anticheat:
  anti-xray:
    enabled: false


```
</details>

---

至此，这就是你不用插件就能做到反矿物透视的所有事

那么有什么antixray插件?

### RayTraceAntiXray（7美元）
[查看](https://builtbybit.com/resources/raytraceantixray.24914/)
用于服务器端异步多线程光线追踪的 Paper 插件，使用 Paper Anti-X ray 引擎模式 1 隐藏暴露在空气中的矿石。

（评分还挺高的）

### Orebfuscator

[查看](https://www.spigotmc.org/resources/orebfuscator-anti-x-ray.82710/)
Orebfuscator 不仅可以保护您世界的完整性，还可以让您微调防 X 射线措施以获得最佳游戏体验。

### XCatch
[查看](https://www.spigotmc.org/resources/xcatch-anti-xray-1-13-1-19.101227/)
不同于前面几个插件，这个插件通过观察玩家在短时间内发现多少回合以及发现多少稀有矿石来分析玩家的挖矿方式。然后通过算法推算出是否在xray

谢谢你看完本章节，希望对你有所帮助
