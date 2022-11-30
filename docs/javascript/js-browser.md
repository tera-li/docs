# Browser
## JavaScript 存储对象
- **localStorage 本地存储（长久存储，需要手动删除数据）**
- **sessionStorage：会话存储（临时存储，关闭窗口自动删除数据）**

**存储对象方法**

setItem("key","value")：保存数据需要key和value

getItem("key")：获取数据需要key

removeItem("key")：删除数据需要key

clear()：删除所有数据

**storage**事件

触发事件的属性

key：发生更改的数据的key

oldValue：旧值（如果时新增数据，则为null）

newValue：新值（如果时删除数据，则为null）

url：发生数据更新的文档的url

storageArea：发生数据更新的localStorage或sessionStorage对象

![clipboard.png](./assets/Aspose.Words.ee17646c-4108-4c74-bd9a-024f44493a52.001.png)

**浏览器数据库**

**indexedDB[indexedDB.note](note://B3D9316D40C0484DAB80072E96B14243)**

**History**

**包含浏览器中的URL**

**History对象属性**

length：历史列表中的网址数

**History对象属性**

back()：加载history中的前一个URL

forward()：加载history中的后一个URL

go(-1或1)：加载history列表中的某个具体页面

**Location 存储对象**

**包含当前URL的信息**

**存储对象属性**

**存储对象方法**

assign(URL)：载入一个新文档

reload(boolean)：重新载入当前文档（设置为true，会绕过缓存，从服务器重新下载该文档）

replace(newURL)：用新文档替换当前文档，**最好是使用replace，不要使用assgin**

![clipboard.png](./assets/Aspose.Words.ee17646c-4108-4c74-bd9a-024f44493a52.002.png)

**Navigator**

**包含有关浏览器的信息**

**Navigator对象属性**

appCodeName：浏览器代码名

appName：浏览器名称

appVersion：浏览器平台和版本信息

cookieEnabled：浏览器中是否启用cookie（返回boolean）

platform：运行浏览器的操作平台

**userAgent**：返回由客户机发送服务器的user-agent头部的值

plugins：返回浏览器的插件数组

**onLine**：检测该设备能否上网

window.addEventListener('online', navigator.onLine) // 设备**联网**时

window.addEventListener('offline', navigator.onLine) // 设备**断网**时

**connection**：浏览器与系统的联网的属性

downlink：10 // 当前设备宽带（Mbit/s）

effectiveType：4g // 当前设备连接速度与质量（2g、3g、4g）

rtt：250ms // 当前网络实际往返时间（延迟）

saveData：false // 表示当前用户是否启用”节流“

onchange：null // 当设备连接状态发生变化时激活change事件

navigator.connection.addEventListener('change')

navigator.connection.onchange = function  // 监听该连接事件

**hardwareConcurrency**：8 // 返回浏览器环境所拥有的的CPU核心数

**deviceMemory**：8 // 返回设备大致内存大小（0.5 == 500mb，1 === 1gb）

**maxTouchPoints**：0 // 返回设备触摸屏支持的最大关联触点数量，返回一个number

**Navigator对象方法**

javaEnabled()：浏览器中是否启用java

taintEnabled()：规定浏览器是否启用数据污点（data tainting）

**getBattery**()：访问设备电池与充电状态的信息

使用.then(result) -> 接收navigator.getBattery()的期约

result属性有：

charging：true // 该设备是否正接入电源充电

chargingTime：0 // 该设备的电池离充满还有多少秒

dischargingTime：0 || infinity // infinity表示该设备没有电池

level：1 || float number // 表示电量百分比

result方法有：

onchargingchange：监听电源充电变化

onchargingTimechange：监听电池充满时间的变化

ondischargingTimechange：监听电池耗尽时间的变化

onlevelchange：监听电池电量的变化

**Screen**

**包含有关客户端显示屏幕的信息**

**Screen对象属性**

availHeight：返回屏幕的高度（不包括windows的任务栏）

availWidth：返回屏幕的宽度（不包括windows的任务栏）

height：返回屏幕总高度

width：返回屏幕总宽度

colorDepth：返回设备或缓冲器上的调色板的比特深度（位数越高，颜色越多）

pixelDepth：返回屏幕的颜色分辨率（每像素的位数）

**Window**

**window对象表示浏览器中打开的窗口**

**如果文档中包含（frame或iframe标签）会为HTML创建一个新的Window对象**

**Window对象属性**



**Window对象方法**


![clipboard.png](./assets/Aspose.Words.ee17646c-4108-4c74-bd9a-024f44493a52.003.png)

![clipboard.png](./assets/Aspose.Words.ee17646c-4108-4c74-bd9a-024f44493a52.004.png)
