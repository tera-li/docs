**flex**

**是什么？**网页布局

**作用？**可以简便、完整、响应式地实现各种页面布局

**弹性布局，为盒状模型提供最大的灵活性**

**Vue中深度选择器**

/deep/：当style设置了scoped时，使用/deep/选择器就会使样式对子组件生效

::v-deep：vue组件中的深度选择器

**flex父容器：flex**

使用display：flex

使用display：inline-flex

webkit内核：display：-webkit-flex


<!-- justify-content: center || flex-start || flex-end || space-between || space-around

主轴（横轴上的对齐方式）

flex-direction: row || row-reverse || column || column-reverse

决定主轴的方向（默认主轴为row水平方向）

flex-wrap: nowrap || wrap || wrap-reverse

子项是否都排在一条主轴上（默认nowrap不换行）

wrap：换行，按照顺序从上到下排

wrap-reverse：换行，按照顺序从下到上排

flex-flow：<flex-direction><flex-wrap>

集合flex-direction和flex-wrap属性值的简写

align-items: flex-start || center || flex-end || stretch || baseline -->

子项相对于主轴的垂直交叉轴如何对齐

主轴为横轴，交叉轴则为垂直交叉

flex-start：交叉轴的起点（顶部）

center：交叉轴的中点（居中）

flex-end：交叉轴的末尾（尾部）

baseline：与第一行字体基线的位置（下划线）对齐

stretch：默认值（auto）

align-content：定义多根轴线的对齐方式

**flex父容器：Grid**

display: grid

grid-template-columns: 200px 200px;

定义grid布局有几列，并定义宽度

grid-template-columns: 1fr 1fr 2fr;

定义grid布局有几列，并定义宽度比

属性例子：

repeat(2, 1fr 2fr)

repeat：重复，重复2次，第一个占比1列，第二个占比2列

repeat(auto-fill, minmax(200px, 1fr))

repeat：重复，自动填充，最小宽度为200px时，为1fr

grid-gap: 20px

同时定义row和column的间隙

row-gap: 20px

定义row行与行之间的间隙

column-gap: 20px

定义column列与列之间的间隙

grid-auto-row: 100px

定义网格的row的高度

**flex子容器**

flex：1

flex-grow：1;

// 值越大，扩展比例越大

// 相较于其他子容器，扩展比例

flex-shrink：1;

// 值越大，缩放比例越大

// flex子元素缩放规则，当子元素的默认宽度相加大于容器宽度时（才会发生收缩）

// 收缩的大小依据于flex-shrink的值

flex-basis：0;

// 相较于其他子容器，规定该容器的主轴初始长度

以上属性，每个子元素都需要设置对应同一属性才能生效

2