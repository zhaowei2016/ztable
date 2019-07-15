# z-table
> 基于vue的简单table表格 实现了自定义任意行、单元格等样式 排序,自定义thead tfoot等功能

## API
---

### props

属性|说明|类型|默认值
|:--|:--|:--|:--|
show-head|是否显示表头|Boolean|true
border-x|是否显示横向边框|Boolean|true
border-y|是否显示纵向边框|Boolean|false
columns|表格列的相关配置,具体项见后文|Array|[]
data|显示的结构化数据|Array|[]
row-class-name|行的class的回调方法,传入参数:<br>  row : 当前行数据 <br>index : 当前行索引 |Function|-
cell-class-name|行的class的回调方法,传入参数:<br>  row : 当前行数据 <br>index : 当前行索引 |Function|-
row-style|行的class的回调方法,传入参数:<br>  row : 当前行数据 <br>index : 当前列索引 |Function|-
cell-style|行的class的回调方法,传入参数:<br>  row : 当前行数据 <br>index : 当前列索引 |Function|-
:color-map|当第一列展示type为icon时候,传递的颜色数据<br> {circle:true,color:'#3282FF'}<br>其中circle为true则显示圆形icon|Array|随机颜色

### columns

属性|说明|类型|默认值
|:-|:-|:-|:-|
title|列头显示的文字|String|-
key|对应data里列内容的字段名|String|-
align|对齐方式,可选值为left right center |String|center
color|列字体颜色|String|-
width|列宽度|String|-
sortable|该列是否启用排序|Boolean|false
ellipsis|是否启用超出隐藏...|Boolean|false
type|`{type: 'index',width: '20px'}`可选index icon 此处设置需放在columns第一个|String|index



