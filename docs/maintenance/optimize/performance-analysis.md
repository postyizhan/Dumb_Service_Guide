---
title: 性能分析
sidebar_position: 5
---

# 性能分析

性能分析是一切"优化"的依据. 如果你不知道服务器导致卡顿的元凶，那么将毫无意义.

## Spark

Spark是一个Minecraft的性能分析器，支持广泛（Bukkit，BungeeCord，Velocity，Forge，Fabric等）

:::info

`官网` :https://spark.lucko.me

`官网下载` :https://spark.lucko.me/download

`文档(英文)` :https://spark.lucko.me/docs

`文档(中文)` :https://snowcutieowo.github.io/spark

`SpigotMC` :https://www.spigotmc.org/resources/spark.57242/

`Modrinth` :https://modrinth.com/mod/spark

`GitHub` :https://github.com/lucko/spark

`MC百科` :https://www.mcmod.cn/class/4073.html

:::

### 使用方法

首先将spark.jar文件插件放到服务端的 mods 或者 plugins 文件夹中.(如果服务端是Purpur Fork很可能你可以直接在/pl中查看到Spark，直接用就好)

#### /spark profiler

如果分析器已经启动，你可以输入下面这些命令：

/spark profiler open 打开分析报告页而无需停止；

/spark profiler stop 停止分析并浏览分析结果；

/spark profiler cancel 取消分析操作，并取消上传报告.

在其他情况下，你可以使用这些基本的操作命令：

/spark profiler start 在默认操作模式下开始分析；

/spark profiler info 检查当前分析的状态.

这是主要的指令，为了更多的功能，更精准的分析等可以在后面加上参数.具体请查看[profiler指令使用方法](https://snowcutieowo.github.io/spark/#/spark.command-usage)

#### /spark health

子命令 health 会产生一份服务器的健康报告，其中包含 TPS、CPU、内存和硬盘的使用情况

#### /spark tps

Spark默认会替代服务器的TPS输出(但可能被CMI覆盖，请关闭CMI的/tps指令或者输入完整/spark tps获取)

## Timings

Timings是一个Paper自带的性能分析器，由于其监听每一个事件，性能开销比较大，在很多服务器核心(如Purpur等)本身也是被移除的，**不推荐**.

:::warning

在可预见的未来Timings将会被移除，作为新手可以直接跳过. 如果你使用Paper服务器，请禁用Timings！虽然它是一个很好的诊断工具，

但由于其不断不断启动和停止虚拟“秒表”，会对性能产生非常大的影响. 因此无论服务器规模大小只需禁用计时即可实现 *10-30%* 的性能提升.

可以通过在 timings.enabled /config/paper-global.yml中设为 false 禁用.

:::

## 其他软件分析

:::warning

这部分需要一些基础知识，一般Spark分析不出来才会尝试其他软件. *一般服主不必要学习这部分内容*.

:::

### arthas

Arthas 是一款阿里巴巴开发的在线性能分析软件，可实时查看应用 JVM/内存/GC/线程 的状态信息，甚至包括查看方法调用的出入参、异常，监测方法执行耗时等，一般用于排查某些插件的CPU占用情况和插件线程占用分析.

[官方文档链接](https://arthas.aliyun.com/doc/)

### jprofiler

jprofiler是一款付费的易用的性能分析软件，甚至可以对MySQL，内存泄漏进行分析，可视化展示.

[官方链接](https://www.ej-technologies.com/products/jprofiler/overview.html)
