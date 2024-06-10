---
title: RNG
sidebar_position: 4
---

# RNG

RNG是**随机数生成器**的简写

看你怎么定义了，因为下面这几个东西本质上只是个计算器

**原理？**

计算机产生随机数不是真随机，而是根据已有的数据通过一个复杂的公式产生一个“随机数”

那么，如果你知道这个公式，并且知道要使用什么数据，通过操作进入公式的数据就可以使随机数变成自己想要的结果

现成的客户端mod：

- [clientcommands](https://www.mcmod.cn/class/4239.html)
- [EnchantmentCracker](https://github.com/Earthcomputer/EnchantmentCracker) 

# 能干啥？

## RNG附魔预测

没必要解释

## 耐久无损耗

因为耐久附魔不是增加物品的耐久，而是有概率不消耗耐久

## 钓鱼出指定宝藏

没必要解释

# 允许破解

[purpur](https://purpurmc.org/)和[leaves](https://leavesmc.org/)核心(包括它们的分支)可以调节是否允许破解rng

默认是反RNG的，不用改

`purpur.yml` 找

```
    settings:
      entity:
        shared-random: true
```

改为false就可以允许玩家预测RNG

`leaves.yml`找

```
use-vanilla-random: false
```

改为true就可以启用原版的RNG

如果你使用Gale,Leaf这些分支，你甚至不需要担心,因为他们的随机数发生器已经不再是原版的随机数发生器，就算你开了也没屌用

