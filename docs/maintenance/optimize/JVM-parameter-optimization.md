---
title: JVM 优化
sidebar_position: 7
---

# JVM 优化

## 参数

以下是编写完成的JVM优化参数(至少Java 17 以上)

**以下启动参数需要自己补全内存分配(-Xms和-Xmx) 和 服务端核心名(-jar 服务端名字.jar)**

<details>
  <summary>Mukul1127 Flag (ZGC)(推荐)</summary>

Mukul1127 Flag Plus是现代的启动参数,使用ZGC作为垃圾回收，**注意:Mukul1127 Flag Plus至少需要4c8g以上环境才可以发挥出优势,4c8g一下请使用aikar flag plus**,Mukul1127 Flag Plus需要Java17以上!

```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive
```

如果你使用Java 21 以上,你可以将`-XX:-ZProactive`换`-XX:+ZGenerational`,Java 22以上必须切换

</details>

<details>
  <summary>Mukul1127 Flag (ZGC)(GraalVM版本)(推荐)</summary>

GraalVM Java 17+ 的参数,


```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive
```

如果你使用Java 21 以上,你可以将`-XX:-ZProactive`换`-XX:+ZGenerational`,Java 22以上必须切换

### 以下是格外选项

更激进的内联，在 Graal 中通过`-Dgraal.BaseTargetSpending=160`（默认为 120）和 OpenJDK 中的其他一些标志。具有较大缓存的 CPU 可能会从中受益。

`-Dgraal.OptWriteMotion=true`和`-Dgraal.WriteableCodeCache=true`,它们看起来不稳定，但在 GraalVM 22.3.0+ 中可能更稳定

</details>

<details>
  <summary>Mukul1127 Flag (G1GC)</summary>


```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:GCTimeRatio=99 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16 
```

</details>

<details>
  <summary>Aikar's Flag </summary>

```shell
java -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

</details>

## 通用

### 内存优化

如果服务器内存足够,可以加上此参数`-XX:-ZUncommit`,要求Jvm总是提前把要用的内存申请好，并且阻止Jvm把临时空出来的内存还给系统

### 大页支持

当然，在动手前，让我们先试一试是不是系统已经支持了这项功能 ,在控制台执行此命令

```shell
java -Xlog:gc+init -XX:+UseLargePages -Xmx1g -version
```

如果你像我一样， 有一行 `UseLargePages disabled, no large pages configured and available on the system. `那么就说明当前系统并不支持大页，不过不要急，可以试一下这一行命令 `java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version` ,如果看到`Large Page Support: Enabled (Transparent)`,表示你的系统支持透明大页

但是如果你依然不支持或者想要追求极致性能，可以去百度搜索当前的系统如何开启大页，这里就不再过多的赘述了。(LargePages对服务器提升相当巨大)

如果支持LargePages,加上此参数`-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS`

如果支持TransparentHugePages(不要把两个都加上,优先LargePages),加上此参数`-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS`

### SIMD

如果你使用的是Pufferfish的分支(Purpur,Leaf,Leaves,Gale),你可以添加此参数`--add-modules=jdk.incubator.vector`

### 下载源加速

默认的SpigotLibraryLoader下载源在国内访问很慢,如果你使用的是Leaf,你可以添加`-DLeaf.library-download-repo=https://maven.aliyun.com/repository/public`参数启动国内下载源

## 参数解释

TODO 

## JDK

TODO
