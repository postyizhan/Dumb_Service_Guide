---
sidebar_position: 2
---

# 下载和安装 Java

您的服务端和客户端都需要安装 Java 才能运行。各个游戏版本需要安装的 Java 版本不同。

原则上选择最新的兼容的 Java 版本，可以体验到最新的优化，并且大部分现代插件对最新版的特性有优化（比如AuthMeReReload)。

## 选择合适的版本

| Minecraft 版本    | 介绍                                                                  | 下载地址（直链，Zulu）                                                                                                                                                              |
|-----------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.0 - 1.16.5    | 推荐使用Java 8，其他版本会出现一些问题（如果使用的是SportPaper或者Beast，最好用Java 21）          | [Java 8 64位](https://cdn.azul.com/zulu/bin/zulu8.78.0.19-ca-jdk8.0.412-win_x64.msi) ，[Java 8 32位](https://cdn.azul.com/zulu/bin/zulu8.78.0.19-ca-jdk8.0.412-win_i686.msi) |
| 1.17.1 - 1.20.4 | 必须使用Java 17以上（1.17 至 1.17.1可以用Java 16），推荐使用Java 21(特别是Leaf，Beast核心) | [Java 17 64位](https://cdn.azul.com/zulu/bin/zulu17.50.19-ca-jdk17.0.11-win_x64.msi) ，[Java 17 32位](https://cdn.azul.com/zulu/bin/zulu17.50.19-ca-jdk17.0.11-win_i686.msi) |
| 1.20.5 +        | 必须使用Java 21以上，推荐使用Java 21                                           | [Java 21 64位](https://cdn.azul.com/zulu/bin/zulu21.34.19-ca-jdk21.0.3-win_x64.msi) ，[Java 21 32位(独家)](https://qcymc.cloud/f/4xOtl/jdk-21.0.3-windows-32bit.zip)                                                                                        |

:::danger

64位操作系统下不要使用32位JDK

最好不要使用32位操作系统开服

:::

## 手动下载

### Oracle 版

官方版本


<details>
  <summary>怎么找到官网并从官网下载</summary>

![](_images/Oracle-1.png)
![](_images/Oracle-2.png)
![](_images/Oracle-3.png)
![](_images/Oracle-4.png)

> 如果再往下翻的话可以看到 Java 8 / 11。

![](_images/Oracle-5.png)

> 但是在这里 Java 8 需要登录才能下载。
>
> 你可以在下方链接直接下载 Java 8。
>
> > https://www.java.com/zh-CN/download/
</details>

### Zulu 版

根据各路大佬的测试 Zulu 相较 Oracle (你可以看做"公版")更适合开 MC 服务器

<details>
<summary>怎么找到官网并从官网下载</summary>
![](_images/Zulu-1.png)

> 往下翻，找到这个，选择你想要的版本

![](_images/Zulu-2.png)

> 找到 64-bit (64位) （如果你的电脑是32位的，不建议开服）。

![](_images/Zulu-3.png)

> 如果您不能安装此软件（如不兼容），请关闭此文档，且**不要向**文档编写者们提问，感谢。
</details>


## 验证 Java 安装

打开 Windows 终端 / PowerShell / CMD。

[怎么打开 Windows 终端](https://cn.bing.com/search?q=%E6%80%8E%E4%B9%88%E6%89%93%E5%BC%80windows%E6%8E%A7%E5%88%B6%E5%8F%B0)

![](_images/cmd-1.png)

输入

```
java -version
```

并回车

![](_images/cmd-2.png)

> 返回类似的消息即为java已安装
