**Form**

**表示文档中的一个区域，用于向Web服务器提交信息**

**一、From属性**

accept-charset=’ISO-8859-1‘：规定表单提交时使用的字符编码

action=’URL‘：表单提交时，向何处发送表单数据

autocomplete：表单是否应该启用自动完成功能（预测对字段的输入）

enctype：表单数据发送到服务器之前如何对其进行编码（post时使用）

**application/x-www-form-urlencoded**：默认，**发送前对所有字符编码，原生form表单**

**multipart/form-data**：**上传文件时，使用的方式**

**application/json**：使用序列化后的JSON字符串，**数据上传方式**

**text/plain**：将空格编码“+”符号，但不编码特殊字符

method：发送表单数据的HTTP方法（get，post）

name：规定表单的名称key，用于在JavaScript中引用元素，表单数据

novalidate=Boolean：规定提交表单时不对表单数据进行验证

target：打开action URL的方式

\_blank：在新窗口打开

\_self：在同一框架中打开（默认）

\_parent：在父框架中打开

\_top：在整个窗口中打开

fieldset：存在于form表单中的标签，组合form表单中的输入框

fieldset属性：

disabled：禁用该fieldset（包含的输入框全部禁用）

form：来自哪个表单（form 必须定义id 和 该form相同）

name：fieldset的name属性值

legend：定义fieldset元素的标题

align：legend属性（top，bottom，left，right）定义标题位置

**二、form对象收集**

elements：包含表单中所有元素的数组（指定对应form元素，返回每个input的集合）

**三、Form对象方法/事件**

reset()：重置一个表单（指定对应form元素）

submit()：提交一个表单（指定对应form元素）

onreset：在重置表单元素之前调用

onsubmit：在提交表单之前调用

**四、input**

**type属性**

**text**：默认值，单行文本区域（maxlength，minlength，pattern，placeholder，readonly只读，size文本宽度，spellcheck控制是否可以检查文本框的拼写）

**number**：数字（value，placeholder，step=“10”按钮步进10，min，max，list预定义值，datalist id，option输出，required）

**password**：密码文本（autocomplete自动补全密码，required，maxlength，minlength，size，pattern，inputmode：numeric定义可能输入类型：在移动设备会选择数字键盘（inputmode属性值：<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode>））

**email**：邮箱地址（multiple可以输入多个元素，placeholder，size，value，maxlength，minlength）

**tel**：电话号码，拥有动态键盘的设备会显示数字键盘（placeholder，size，minlength，maxlength，value，required，pattern）

**search**：搜索字符串单行文本框，支持的浏览器会有清除文本框按钮（list和datalist，maxlength，minlength，pattern，placeholder，readonly，size，spellcheck）

**radio**：单选按钮（定义多个相同name的值，只会选择其中一个，value）

**checkbox**：复选框（checked，value）

**button**：按钮（在HTML使用button）

**color**：颜色（value十六进制，disabled，name，autofocus(bool)，autocomplete）

**file**：文件（accept文件类型image/\*，multiple，需要对form表单设置enctype编码）

**image**：带图像的submit按钮（src，alt，width，height，required，）

**range**：进度条之类的范围控件（list和datalist，max，min，step）

**submit**：提交表单按钮（value）

**reset**：重置表单按钮（不推荐）

**hidden**：不显示的控件，但仍会提交（value，name）

**date**：日期（年月日，value，min，max）

**month**：日期（年月，value，max，min，readonly，step）

**datetime**-local：日期（年月日时分，min，max，required）

**time**：时间（value，max，min，readonly，step）

**week**：年和周数（value，max，min，readonly，step）

**五、阻止表单提交**

在form标签上，onsubmit="return false"

在form中使用<input  type="text" onsubmit="event.preventDefault()" />

也可把onsubmit写入函数中使用event.preventDefault()

**六、表单提交**

<!-- ![clipboard.png](./assets/Aspose.Words.1be046b9-43b4-40fc-8138-bf1a378f39d7.001.png) -->

阻止浏览器默认表单提交**event.preventDefault()**

获取表单内容迭代处理

最后进行ajax提交

**六、表单中select**


<!-- ![clipboard.png](./assets/Aspose.Words.1be046b9-43b4-40fc-8138-bf1a378f39d7.002.png) -->

<!-- ![clipboard.png](./assets/Aspose.Words.1be046b9-43b4-40fc-8138-bf1a378f39d7.003.png) -->

**multiple**表示多选

**size**表示下拉列表中的可见行数

**optgroup**对选项进行分组

**options**获取**select**标签的选择集合

**.form**获取**select**标签所在的**form**对象

**七、表单中input**

属性

方法

ele.select()：选中input的文本value，可以使用addeventlistener监听这个方法触发
