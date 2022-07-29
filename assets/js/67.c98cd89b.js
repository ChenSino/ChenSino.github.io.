(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{624:function(s,a,e){"use strict";e.r(a);var t=e(10),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("strong",[s._v("背景：")])]),s._v(" "),e("blockquote",[e("p",[s._v("最近在改一个老项目，其中使用到框架是mybatis，有一个业务表"),e("code",[s._v("install_record")]),s._v(",代表装机记录，一个"),e("code",[s._v("accessory")]),s._v("代表备件表，一个"),e("code",[s._v("sys_file")]),s._v("代表文件表，业务关系是一个install_record对应多个accessory、以及多个sys_file，在一开始使用的是mybatis的嵌套查询的方式，但此方式有N+1的问题，比如一个装机表对应10个accessory、20个sys_file，则就要查询1+10+20 = 31次数据库，效率是很低的，因此想改成嵌套查询的方式。")])]),s._v(" "),e("h3",{attrs:{id:"_1、改造后的语句如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、改造后的语句如下"}},[s._v("#")]),s._v(" 1、改造后的语句如下")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("SELECT xxx   FROM\n\tccsx_weibao.install_record ir\n\tLEFT JOIN ccsx_weibao.install_record_accessory ira ON ira.host_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ir.id\n\tLEFT JOIN ccsx.sys_file f ON f.business_type "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n\tAND f.business_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ir.id \tLIMIT "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("install_record表中有8000数据，accessory表20000数据，sys_file 表240000数据，执行sql直接卡死")]),s._v(" "),e("h3",{attrs:{id:"_2、原因分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、原因分析"}},[s._v("#")]),s._v(" 2、原因分析")]),s._v(" "),e("p",[s._v("数据量其实很小，执行慢的原因是没有索引，使用"),e("code",[s._v("explain")]),s._v("分析sql")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("explain xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220428164618054.png",alt:"image-20220428164618054"}})]),s._v(" "),e("p",[s._v("可以看到key那一列，只有两个PRIMARY被索引，所以所有用于关联字段加上索引即可，此处给"),e("code",[s._v("business_id")]),s._v("、"),e("code",[s._v("host_id")]),s._v("加上索引就ok了")])])}),[],!1,null,null,null);a.default=r.exports}}]);