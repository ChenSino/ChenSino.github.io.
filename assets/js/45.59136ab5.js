(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{600:function(a,t,e){"use strict";e.r(t);var n=e(10),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"_1、降级包-arch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、降级包-arch"}},[a._v("#")]),a._v(" 1、降级包（Arch）")]),a._v(" "),e("p",[a._v("有时太新的包会有bug，我们希望降级到更老版本的包，并且降级后我们希望下次检查更新的时候跳过此包的检查。")]),a._v(" "),e("h3",{attrs:{id:"_2、解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、解决方法"}},[a._v("#")]),a._v(" 2、解决方法")]),a._v(" "),e("ol",[e("li",[a._v("安装downgrade程序\n"),e("code",[a._v("sudo pacman -S downgrade")])]),a._v(" "),e("li",[a._v("降级\n"),e("code",[a._v("sudo DOWNGRADE_FROM_ALA=1 downgrade ${packagename}")]),a._v("\n注意DOWNGRADE_FROM_ALA=1一定要按照我上边这样写，不能单独export DOWNGRADE_FROM_ALA=1\n设置忽略升级的包\n第二步会让你选择更新的时候是否要忽略更新，选择y的话，它会在/etc/pacman.conf添加一个忽略，如果不想湖绿，把下面的IgnorePkg注释即可")])])])}),[],!1,null,null,null);t.default=r.exports}}]);