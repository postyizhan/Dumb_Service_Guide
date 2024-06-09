---
title: 怎么让大佬帮我
sidebar_position: 7
---

# 怎么让大佬帮我

1. 检查你的服务器有没有安装Spark插件， 尝试`/spark`命令或者`/pl`看看有没有Spark

如果没有， 手动安装一下[Spark](performance-analysis.md)

2. 开启Spark记录

```
spark profiler start
```

![](_images/怎么让大佬帮我/spark_start.png)

在你服务器卡顿的时候开启， **一段时间后**结束它

3. 结束Spark记录

```
spark profiler stop
```

它会给你一个链接， 你把这个链接发给大佬并**礼貌的**请求他帮助你

注:链接位置在下方图片中红框标记的部分

![](_images/怎么让大佬帮我/spark_stop.png)
