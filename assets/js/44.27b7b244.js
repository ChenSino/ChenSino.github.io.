(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{601:function(t,s,a){"use strict";a.r(s);var _=a(10),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-使用场景"}},[t._v("#")]),t._v(" 一，使用场景")]),t._v(" "),a("p",[t._v("在开发的过程中，经常会遇到，几个分支并行进行。当在A分支开发，突然发现有个线上bug，需要临时切换到B分支进行处理，同时，A分支上的代码还未编写完整，不想提交上去。这个时候，"),a("code",[t._v("git stash")]),t._v("的好处就提现出来了。")]),t._v(" "),a("h2",{attrs:{id:"二-stash的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-stash的作用"}},[t._v("#")]),t._v(" 二，stash的作用")]),t._v(" "),a("p",[t._v("stash会跟踪文件的修改与暂存的改动——然后将未完成的修改保存到一个栈上， 而你可以在任何时候重新应用这些改动（甚至在不同的分支上）。")]),t._v(" "),a("h2",{attrs:{id:"三-使用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-使用命令"}},[t._v("#")]),t._v(" 三，使用命令")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("git status")]),t._v("查看哪些文件发生变化")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("git stash")]),t._v("把所有改动暂存起来，"),a("strong",[t._v("git stash")]),a("code",[t._v("等同于")]),a("strong",[t._v("git stash push")]),t._v("，可以给当前stash增加message方便后续查看")]),t._v(" "),a("p",[a("strong",[t._v('git stash push -m "message"')]),t._v(",执行完，会发现git status当前分支变得跟没有改动时一样干净")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("git stash list")]),t._v("  查看当前栈中有多少暂存记录")])]),t._v(" "),a("li",[a("p",[t._v("恢复栈最新的一个暂存可以**git stash pop,**取暂存中的某一份"),a("code",[t._v("git stash apply stash@{1}")])])]),t._v(" "),a("li",[a("p",[t._v("pop"),a("code",[t._v("和")]),t._v("apply"),a("code",[t._v("都可以恢复暂存，但是，apply执行后，暂存记录还存在。")]),t._v("pop`则会从栈中移除")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("git stash clear")]),t._v("  删除所有缓存的stash")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("git stash drop stash@")]),t._v("{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储")])])]),t._v(" "),a("h2",{attrs:{id:"四-本地解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-本地解决冲突"}},[t._v("#")]),t._v(" 四，本地解决冲突")]),t._v(" "),a("p",[t._v("1、把自己开发的代码储藏起来git stash\n2、git pull 拉取最新代码\n3、git stash pop 把暂存文件恢复\n4、查看冲突，解决冲突 git status -s\n5、解决完冲突后就可以像正常提交代码一样操作了，\ngit add xxx\ngit commit -m “xxx”\ngit push origin master:my_branch")])])}),[],!1,null,null,null);s.default=v.exports}}]);