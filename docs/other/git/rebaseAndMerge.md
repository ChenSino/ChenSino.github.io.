---
title: git rebase与merge的区别
date: 2022-07-26 16:57:01
categories: 
  - git 操作
tags: 
  - 必会

---

在codehub上有多个分支，每次的提交都会生成一个新的ID。如下图，假设开始各个分支都是根据ID2的提交更新后的代码进行修改，（ID号仅代表生成的时间顺序，实际的ID号是根据算法生成的）

![img](https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/4385e8c23d844b6e9c8b3f1171319b00.png)



如果我们需要将绿色分支修改的代码更新到蓝色分支，本地远程分支内与个人工作分支已经是蓝色分支对应库内最新代码，那么在绿色远程分支代码更新到个人的库后（fetch），需要将本地远程分支代码更新到个人工作分支，这时有两种方法，[rebase](https://so.csdn.net/so/search?q=rebase&spm=1001.2101.3001.7020)和merge。



**merge的方法是合并库时推荐使用的方法。**

如下图，merge操作会将绿色的所有修改合并，解决冲突后在蓝色分支的后面新建一个ID，成为蓝色分支的最新提交，实际上就是基于父节点ID7的提交，入库后将蓝色分支库上代码更新。

![img](https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/bec81683ac884300851f42bd731c4861.png)



如下图，rebase的方法是将提蓝色分支放到绿色分支后面提交，ID3\ID4\ID5\ID7都会转换为新的ID并进行提交，由于父节点改变，每次提交都需要解决一次冲突，因此会大大增加分支合并的难度。

![img](https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/7ed03a3ace22445b9b5f8646fb8f1cc4.png)