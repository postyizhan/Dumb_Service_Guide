---
sidebar_position: 2
---

```
Essentials (Global)
行数 21

重要位置

# 传送功能的冷却时间(以秒为单位),如/home, /tp, etc 等命令
teleport-cooldown: 0
行数 93

# 传送延迟时间(以秒为单位),在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击,传送将取消.
teleport-delay: 0
行数 96

# 当该选项开启后 (例如. delay < 0) 则玩家使用过一次该项工具包以后
# 将从玩家的kit列表中删去该项可用工具包
skip-used-one-time-kits-from-kit-list: false
行数 331

# 启用后，只要玩家的盔甲槽是空的，就会自动装备领取的kit包中的盔甲。
kit-auto-equip: false
行数 335

# 默认为false。 应该是说，开启后kit可以存nbt的东西了
use-nbt-serialization-in-createkit: false
行数 350

# 自动AFK   驿站:使用命令/afk 暂时离开
# 在此超时（以秒为单位）后，用户将被设置为 AFK。
# 此功能需要玩家拥有essentials.afk.auto 节点。
# 设置为 -1 表示没有超时。
auto-afk: 300
行数 451

# 挂机太久就给老子踢啦！
# 在此超时（以秒为单位）后，用户将被踢出服务器。
#essentials.afk.kickexempt 节点覆盖此功能。
# 设置为 -1 表示没有超时。
auto-afk-kick: -1
行数 457

# 设置玩家AFK时的列表名称。 默认情况下为 none，它指定 Essentials
# 不应干扰 AFK 玩家的列表名称。 none我改成了 挂机中
# 您可以使用颜色代码，使用 {USERNAME} 玩家的名称或 {PLAYER} 作为玩家的显示名称。
afk-list-name: "挂机中"
行数 495

# 您可以在此处禁用 Minecraft 的死亡消息。
death-messages: true
行数 505

# 您可以在此处设置自定义加入和退出消息。 将此设置为“none”以使用默认的 Minecraft 消息，
custom-join-message: "&e[&a+&e]&6比驿站丑的 {USERNAME} 加入了游戏"
custom-quit-message: "&e[&c-&e]&6比驿站丑的 {USERNAME} 退出了游戏"
行数 528

custom-new-username-message: "&e[&a+&e]&6比驿站丑的新玩家 {USERNAME} 加入了游戏"
行数 556

# 设置为true,启用每个世界传送单独的权限.
# 给予玩家某个世界的传送权限 essentials.world.<worldname>
world-teleport-permissions: false
行数 571



Homes

重要位置

# 设置为 true 将给予玩家跨越世界传送回家的权限
# 这个设置只适用于'/home'命令.
# 对于其他传送命令,给予玩家多世界间传送的权限 essentials.world.<世界名称> 可以允许玩家跨世界传送
world-home-permissions: false
行数 748

# 如果没有设置家，你想让玩家去出生点吗？
# 如果设置为false，玩家在没有设置家的情况下运行/home时不会被传送。
spawn-if-no-home: true
行数 775



Economy

重要位置

# 定义新玩家开始的平衡(应该是说默认的钱)。 默认为 0。
starting-balance: 0
行数 792



help

重要位置

啊应该是木有！



EssentialsX Chat
注意:你需要安装 EssentialsX Chat 才可以使用 不过推荐用别的聊天插件

重要位置

format: '<{DISPLAYNAME}> {MESSAGE}'
行数 903



EssentialsX Protect
注意:你需要安装 EssentialsX Protect 才可以使用

重要位置

  # 总体的物理现象或行为的设置
  prevent:  # 阻止以下现象(译注:true就是阻止,false是允许,这里需要注意一下)
行数 943
一直到 1048 行，可调的东西挺多，保护插件可以考虑这个



EssentialsX AntiBuild
注意:你需要安装 EssentialsX AntiBuild 才可以使用

重要位置

    # 玩家是否可以建造:
        build: true
行数 1089

    # 玩家是否可以使用物品(当玩家没有build权限的时候):
    use: true
行数 1097

    # 玩家无法建造时是否提示玩家
    warn-on-build-disallow: true
行数 1099

    # 阻止玩家放置以下方块   看这里！！！
    placement: LAVA,TNT,LAVA_BUCKET

    # 阻止玩家使用以下物品   看这里！！！
    usage: LAVA_BUCKET
行数 1111



EssentialsX Spawn + New Players
注意:你需要安装 EssentialsX Spawn 才可以使用

重要位置

announce-format: '&7[&b驿站&7]&a欢迎大傻蛋来服务器！'
行数 1140

  # 是否想要玩家第一次进入服务器时赠送新手礼物? 设置为 ''禁用此功能.
  # 这个赠送不会花费金钱,也可以给予权限.
  #kit: ''
  kit: tools
行数 1146

-驿站忆行(185839426)
```