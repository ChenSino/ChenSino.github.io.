---
title: 事件总线Mitt
date: 2022-03-09 16:57:01
author: qianxun
categories: 
  - vue知识点
tags: 
  - 必会
---



**1,安装mitt库**

```vue
npm install mitt
```

**2,在main.ts中引入mitt库**

```vue
import mitt from 'mitt'
app.config.globalProperties.mittBus = mitt()
```



**3，触发事件**

```vue
 const { proxy } = <any>getCurrentInstance();
     
 proxy.mittBus.emit("Add", callbackFun(res));  //触发add事件，并向外传递了一个函数形式的参数
```

**4，监听事件**

```
 proxy.mittBus.on("Add", (callback: Function) => {  //监听事件并接受函数形式的参数
            handleNewSubmit(callback); 
        });
```

