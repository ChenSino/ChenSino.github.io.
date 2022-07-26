(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{636:function(t,a,s){"use strict";s.r(a);var e=s(10),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"一-用于合并当前分支的多个commit记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-用于合并当前分支的多个commit记录"}},[t._v("#")]),t._v(" 一，用于合并当前分支的多个commit记录")]),t._v(" "),s("p",[t._v("应用场景，如下第2-4次提交是对同一功能的代码提交记录，完全可以合并成一次提交记录。这个时候rebase就很有用了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724180044950.png",alt:"image-20220724180044950"}})]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"找到想要合并的commit-使用rebase-i"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到想要合并的commit-使用rebase-i"}},[t._v("#")]),t._v(" "),s("strong",[t._v("找到想要合并的commit, 使用rebase -i")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rebase -i bd0d758(第一次提交的commitId)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("注意 git rebase -i [startPonit] [endPoint]")]),t._v(" "),s("p",[t._v("前开后闭 区间 这里的 [startPonit] 是指需要合并的commit的前一个commit (即当前示例中的 “bd0d758: 第一次提交”)。 因为, 三个commit肯定要基于上一个commit合并成了新的commit。\n谨慎使用[endPoint] 省略, 即默认表示从起始commit一直到最后一个，但是一旦你填写了, 则表示 [endPoint]后面的commit全部不要了!")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724181559992.png",alt:"image-20220724181559992"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724181803651.png",alt:"image-20220724181803651"}})]),t._v(" "),s("h4",{attrs:{id:"_2-进入interact交互界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-进入interact交互界面"}},[t._v("#")]),t._v(" 2，进入Interact交互界面")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724181831357.png",alt:"image-20220724181831357"}})]),t._v(" "),s("p",[s("strong",[s("code",[t._v("说明")])])]),t._v(" "),s("ul",[s("li",[t._v("最上面三行, 就是刚刚选中的三个commit, 按时间顺序依次往下排序(和git log的展示顺序是反的, 大家查看的时候要注意)")]),t._v(" "),s("li",[t._v("前面的三个Pick 其实就是下面 "),s("strong",[t._v("Commands展示的7种命令中的第一个p")]),t._v(", 也就是使用commit。")])]),t._v(" "),s("h4",{attrs:{id:"_3-使用s命令-合并到上一个commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用s命令-合并到上一个commit"}},[t._v("#")]),t._v(" 3，使用s命令 合并到上一个commit")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724182138971.png",alt:"image-20220724182138971"}})]),t._v(" "),s("h4",{attrs:{id:"_4-修改commit记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改commit记录"}},[t._v("#")]),t._v(" 4.修改commit记录")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724182435924.png",alt:"image-20220724182435924"}})]),t._v(" "),s("p",[t._v("再此执行git log 可以发现234此提交合并为一个了")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724182807371.png",alt:"image-20220724182807371"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724182912368.png",alt:"image-20220724182912368"}})]),t._v(" "),s("h3",{attrs:{id:"二、使用rebase替代merge合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、使用rebase替代merge合并分支"}},[t._v("#")]),t._v(" 二、使用rebase替代merge合并分支")]),t._v(" "),s("p",[t._v("2.1 使用merge合并分支代码")]),t._v(" "),s("p",[s("strong",[t._v("注意：当只有dev分支有提交，master分支没有任何提交，dev分支merge到master分支上，依旧是保持一条直线，也没有多余的提交。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724212609039.png",alt:"image-20220724212609039"}})]),t._v(" "),s("p",[s("strong",[t._v("给master新增两个提交，dev分支与master分支立即就会不重合，不在一条直线上。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724213219850.png",alt:"image-20220724213219850"}})]),t._v(" "),s("p",[t._v('再给dev分支新增一个commit  "dev新增代码1"可以看出提交节点是按事件排序的，可以看到dev分支的节点显示再master前面。')]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724213304415.png",alt:"image-20220724213304415"}})]),t._v(" "),s("p",[t._v("3,切换到master分支，直接merge dev")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724213729960.png",alt:"image-20220724213729960"}})]),t._v(" "),s("p",[t._v("提示产生冲突，因为master前两次提交，与dev最后一次提交都更改过了readme.txt文件，所以合并分支会产生冲突。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724214028599.png",alt:"image-20220724214028599"}})]),t._v(" "),s("p",[t._v('合并代码，->commit "合并分支dev到master上面"')]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724214057554.png",alt:"image-20220724214057554"}})]),t._v(" "),s("p",[t._v("git 分支就显示如下图所示")]),t._v(" "),s("p",[t._v("!(http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724214320960.png)")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724214614292.png",alt:"image-20220724214614292"}})]),t._v(" "),s("p",[t._v("总之，merge dev分支到master上会出现以下结果：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("会保留所有的commit(hashId不变)")])]),t._v(" "),s("li",[s("p",[t._v("按提交顺序排序")])]),t._v(" "),s("li",[s("p",[t._v("产生新的commit点(Merge branch ‘XXX’ into develop)（这里的我的显是合并分支dev到master上面）")])])]),t._v(" "),s("p",[t._v("2.2 使用rebase合并dev分支到master上")]),t._v(" "),s("p",[s("strong",[t._v("1,切换当前分支为dev")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch  dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("2，给dev变基到master (如果有冲突需解决冲突)")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724220033035.png",alt:"image-20220724220033035"}})]),t._v(" "),s("p",[s("strong",[t._v("3，提示解决冲突，去冲突文件解决冲突。解决冲突后，执行命令")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'冲突文件'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("执行完"),s("code",[t._v("git rebase --continue")]),t._v(" 进入以下界面\n"),s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724220336167.png",alt:"image-20220724220336167"}})]),t._v(" "),s("p",[t._v("这里是修改commit 信息")]),t._v(" "),s("p",[t._v("修改完按"),s("code",[t._v(":wq")]),t._v("保存退出。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724220742643.png",alt:"image-20220724220742643"}})]),t._v(" "),s("p",[t._v("此时"),s("code",[t._v("dev")]),t._v("分支和"),s("code",[t._v("master")]),t._v("分支已经重合")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724221217031.png",alt:"image-20220724221217031"}})]),t._v(" "),s("p",[s("strong",[t._v("4，合并dev代码到master上")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("此时master分支与dev分支在同一个提交节点了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://afatpig.oss-cn-chengdu.aliyuncs.com/blog/image-20220724221734501.png",alt:"image-20220724221734501"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);