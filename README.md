# [watermark-dom](https://github.com/saucxs/watermark-dom)
[![](https://img.shields.io/badge/Powered%20by-saucxs%20-brightgreen.svg)](https://github.com/saucxs/watermark-dom)
[![GitHub license][license-image]][license-url]
[![GitHub version][version-image]][version-url]
[![GitHub stars][stars-image]][stars-url]
[![GitHub forks][forks-image]][forks-url]
[![GitHub issues][issues-image]][issues-image]
[![npm download][download-image]][download-url]
[![HitCount][hits-image]][hits-url]


[license-image]: https://img.shields.io/github/license/saucxs/watermark-dom.svg
[license-url]: https://github.com/saucxs/watermark-dom/blob/master/LICENSE
[version-image]: https://img.shields.io/github/package-json/v/saucxs/watermark-dom.svg
[version-url]: https://github.com/saucxs/watermark-dom/blob/master/package-json
[stars-image]: https://img.shields.io/github/stars/saucxs/watermark-dom.svg
[stars-url]: https://github.com/saucxs/watermark-dom/stargazers
[forks-image]: https://img.shields.io/github/forks/saucxs/watermark-dom.svg
[forks-url]: https://github.com/saucxs/watermark-dom/network
[issues-image]: https://img.shields.io/github/issues/saucxs/watermark-dom.svg
[issues-url]: https://github.com/saucxs/watermark-dom/issues
[download-image]: https://img.shields.io/npm/dm/watermark-dom.svg
[download-url]: https://npmjs.org/package/watermark-dom
[hits-image]: http://hits.dwyl.io/saucxs/https://githubcom/saucxs/watermark-dom.svg
[hits-url]: http://hits.dwyl.io/saucxs/https://githubcom/saucxs/watermark-dom


`watermark.js`是基于DOM对象实现的BS系统的水印，确保系统保密性，安全性，降低数据泄密风险，简单轻量，支持多属性配置，动态计算水印，水印防被删（监听水印组件元素删除并重新添加，监听改变水印的属性并重新添加）。

特性：
+ 多属性配置，简单易上手
+ 动态计算水印
+ **水印防被删(监听水印组件元素删除并重新添加，监听改变水印的属性并重新添加)**
+ 支持2种导入使用：本地引用，npm引用
+ 水印测试工具：testTool工具
+ 内置3种全局API方法：init()，load(), remove()。
+ 原理：pointer-events事件穿透属性，Shadow DOM(影子DOM)，opacity等

注意：基于本项目源码从事科研、论文、系统开发，"最好"在文中或系统中表明来自于本项目的内容和创意，否则所有贡献者可能会鄙视你和你的项目。 使用本项目源码请尊重程序员职业和劳动

## 1、版本及功能
+ 版本v 2.3.0  更新时间：2019.12.14
  - 新增功能：监听前端页面手动删除水印挂载的父元素，或删除影子DOM里的单个水印，当删除时会自动添加新水印。
  
+ 版本v 2.2.2  更新时间：2019.12.11
  - 优化：水印图层会撑开页面高度的问题。

+ 版本v 2.2.1  更新时间：2019.11.19
  - 解决水印图层会撑开页面高度的问题，谢谢[JeanZhao](https://github.com/saucxs/watermark-dom/issues/33)和[paperscz ](https://github.com/saucxs/watermark-dom/issues/33)

+ 版本v 2.2.0  更新时间：2019.11.11
  - 解决watermark_parent_node不管用，谢谢[Tianruo](https://github.com/saucxs/watermark-dom/issues/28)和[sunweiconfidence](https://github.com/saucxs/watermark-dom/issues/28)
  - 解决水印显示不全，谢谢[ydCao](https://github.com/saucxs/watermark-dom/issues/32)和[Altamill](https://github.com/saucxs/watermark-dom/issues/32)提出。

+ 版本v 2.1.1  更新时间：2019.11.02
  - 解决水印可以被隐藏，谢谢[maqingbo](https://github.com/saucxs/watermark-dom/issues/29)
  - 解决水印图层会撑开默认页面宽度的情况，谢谢[dyh333](https://github.com/saucxs/watermark-dom/issues/30)和[rumenxiaozi](https://github.com/saucxs/watermark-dom/issues/30)和[jixiang155](https://github.com/saucxs/watermark-dom/issues/30)提出。

+ 版本v 2.1.0  更新时间：2019.08.16
     - 新增支持滚屏，谢谢[ishwy](https://github.com/saucxs/watermark-dom/issues/27)提出。
     - 解决缩放存在水印消失的问题，谢谢[wangmeng1991](https://github.com/saucxs/watermark-dom/issues/22)指出。
     - 解决loadMark多次调用时defaultSettings变量的复用问题，谢谢[shellphon](https://github.com/saucxs/watermark-dom/issues/23)指出。

+ 版本v 2.0.3  更新时间：2019.06.18
     - 发布最新npm包`npm i watermark-dom @2.0.3`，支持方法：`init(), load(), remove()`,放心使用

+ 版本v 2.0.2  更新时间：2019.06.17
    - 作为更新npm包，出现的问题，请不要用这个版本的包
    - 发布到最新npm包，有问题，误用  
 
+ 版本v 2.0.1  更新时间：2019.06.12
    - 1、支持移除水印方法remove()
    - 2、废弃生成水印的createShadowRoot方法，而使用attachShadow方法。（使用上没有影响，因为最初设计时候做了兼容处理）
    - 3、未发布到最新npm包  

+ 版本v 2.0.0
    - 1、支持AMD，CommonJs，ES6 module模块规范；
    - 2、支持浏览器：Chrome，Firefox，Safari，IE9及以上；
    - 3、未发布到最新npm包  

+ 版本v 1.0.0
    - 1、支持文本水印；
    - 2、支持本地js，支持npm包；
    - 2、支持浏览器：Chrome，Firefox，Safari；
    - 3、支持api

## 2、水印插件-使用

### 2.1 本地引入封装的js文件

只是简单的加一个很浅的水印，实现起来很容易。不需要引入jquery插件。

`watermark.js`是必须要引进的组件

第一步：获取组件方式：`git clone https://github.com/saucxs/watermark-dom.git`

第二步：clone后，在需要加水印的相关页面引入水印文件"watermark.js":
```
<script type="text/javascript" src="./watermark.js"></script>
```

第三步：在确保页面DOM加载完毕之后，调用watermark的load方法(手动加载):
```
   <script>watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
```
注意：我们提供了init方法，用来初始化水印，添加load和resize事件
```
   <script>watermark.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
```

使用插件的效果地址1：http://www.chengxinsong.cn

Sample One：https://www.mwcxs.top/static/testTool/examples/examples-simple/index.html

Sample Two：https://www.mwcxs.top/static/testTool/examples/examples-setInterval/demo.html


![image](./examples/img/demo.png)

### 2.2 npm包引入

第一步：npm获取水印组件包： 
````
npm install watermark-dom
````
第二步：引入水印模块：
````
import watermark from 'watermark-dom'
或者
var watermarkDom = require("watermark-dom")
````
第三步：在确保页面DOM加载完毕之后，调用watermark的load方法(手动加载):
```
   <script>watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
```
注意：(1)我们提供了init方法，用来初始化水印，添加load和resize事件
```
   <script>watermark.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
```
注意：(2)我们提供了remove方法，用来移除水印
```
   <script>watermark.remove({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
```

## 3、水印插件-testTool（测试工具）

查看地址：https://www.mwcxs.top/static/testTool/index.html

看到水印插件-测试demo的效果
![image](./examples/img/demo2.png)


## 4、内置方法

### 4.1 watermark.init(setting);
初始化水印，添加load和resize事件

例子
```js
watermark.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" });
``` 

### 4.2 watermark.load(setting); 
手动加载水印

例子
```js
watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" });
``` 

### 4.3 watermark.remove(); 
手动移除水印

例子
```js
watermark.remove();
``` 



## 5、支持各种属性配置使用
```
watermark_id: 'wm_div_id',          //水印总体的id
watermark_prefix: 'mask_div_id',    //小水印的id前缀
watermark_txt:"测试水印",             //水印的内容
watermark_x:20,                     //水印起始位置x轴坐标
watermark_y:20,                     //水印起始位置Y轴坐标
watermark_rows:0,                   //水印行数
watermark_cols:0,                   //水印列数
watermark_x_space:100,              //水印x轴间隔
watermark_y_space:50,               //水印y轴间隔
watermark_font:'微软雅黑',           //水印字体
watermark_color:'black',            //水印字体颜色
watermark_fontsize:'18px',          //水印字体大小
watermark_alpha:0.15,               //水印透明度，要求设置在大于等于0.005
watermark_width:100,                //水印宽度
watermark_height:100,               //水印长度
watermark_angle:15,                 //水印倾斜度数
watermark_parent_width:0,      //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
watermark_parent_height:0,     //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
watermark_parent_node:null     //水印插件挂载的父元素element,不输入则默认挂在body上
```
上面的属性都支持配置的，怎么使用呢？

基本山需要自己配置的属性：`watermark_txt`,`watermark_color`,`watermark_fontsize`,`watermark_alpha`,`watermark_angle`，`watermark_width`,`watermark_height`这7个属性一般是经常用到的，其他属性一般用的偏少。需要用到的就设置一下，不需要用到的就可以不设置，插件内部会有默认值的。

比如load方法的属性配置

```
 watermark.load({ 
    watermark_txt:"测试水印，saucxs，测试水印，songEagle，工号等",  //水印的内容
    watermark_color:'#5579ee',            //水印字体颜色
    watermark_fontsize:'24px',          //水印字体大小
    watermark_alpha:0.5,               //水印透明度，要求设置在大于等于0.005
    watermark_angle:135,                 //水印倾斜度数
    watermark_width:200,                //水印宽度
    watermark_height:200,               //水印长度
});
```
 
 所以一般先在[watermark-dom的测试工具](http://www.mwcxs.top/static/testTool/index.html)上，把需要配置的属性值，调试好之后在写入代码中，这样效率更高。



## 6、API介绍
    
 格式：[请求类型:]URL地址
 
 例如：
 
     get:/api/watermark    //获取水印参数
     post:/api/watermark   //发布水印参数
     put:/api/watermark    //更新水印参数
     delete:/api/watermark   //删除水印参数
     
 PS：如果没有添加请求类型的话，默认为get请求。
 
 返回结果定义：
 
 返回结果根据不同的状态需要定义，返回结果`<<<`标识，例如：
 
    <<<
    success
    {
        "errNum":0,
        "retMsg":"success",
        "retData":{
              "watermark_txt":"测试水印",
              "watermark_x":20,//水印起始位置x轴坐标
              "watermark_y":20,//水印起始位置Y轴坐标
              "watermark_rows":0,//水印行数
              "watermark_cols":0,//水印列数
              "watermark_x_space":100,//水印x轴间隔
              "watermark_y_space":50,//水印y轴间隔
              "watermark_font":'微软雅黑',//水印字体
              "watermark_color":'black',//水印字体颜色
              "watermark_fontsize":'18px',//水印字体大小
              "watermark_alpha":0.15,//水印透明度，要求设置在大于等于0.003
              "watermark_width":150,//水印宽度
              "watermark_height":100,//水印长度
              "watermark_angle":15,//水印倾斜度数
        }
    }
    <<<
    error
    {
        "errNum":0,
        "retMsg":"success",
        "retData":[]
    }

## 7、支持浏览器

Chrome,FireFox,Safari,IE9及以上浏览器

## 8、其他

欢迎使用[watermark-dom](https://github.com/saucxs/watermark-dom)插件，功能：给B/S网站系统加一个很浅的dom水印插件。

欢迎使用[captcha-mini](https://github.com/saucxs/captcha)插件，功能：生成验证码的插件，使用js和canvas生成的

欢迎使用[watermark-image](https://github.com/saucxs/watermark-image)插件，目前功能：图片打马赛克

一些使用文章介绍：

【1】https://juejin.im/post/5cb686f451882532c1535199

【2】http://www.chengxinsong.cn/post/34



## 感谢支持

1、作者常用昵称有saucxs，songEagle，松宝写代码。「松宝写代码」公众号作者，每日一题，实验室等。一个爱好折腾，致力于全栈，正在努力成长的字节跳动工程师，星辰大海，未来可期。**内推字节跳动各个部门各个岗位。**

![松宝写代码](https://raw.githubusercontent.com/saucxs/full_stack_knowledge_list/master/image/songbao.png?raw=true)

2、长按下面图片，关注「松宝写代码」，是获取开发知识体系构建，精选文章，项目实战，实验室，**每日一道面试题**，进阶学习，内推字节跳动，思考职业发展，涉及到JavaScript，Node，Vue，React，浏览器，http，算法，端相关，小程序等领域，希望可以帮助到你，我们一起成长～

![松宝写代码](https://raw.githubusercontent.com/saucxs/full_stack_knowledge_list/master/daily-question/dongtai.gif?raw=true)

## 字节内推福利
公众号后台回复

+ 回复「校招」获取内推码
+ 回复「社招」获取内推
+ 回复「实习生」获取内推

后续会有更多福利

## 学习资料福利
回复「算法」获取算法学习资料

## 往期🔥「每日一题」🔥

持续更新中～

每日一题Github地址：https://github.com/saucxs/full_stack_knowledge_list

### 1、JavaScript && ES6

+ 第 28 题：[【每日一题】(28题)面试官:原型链与构造函数结合方法继承与原型式继承的区别？](https://mp.weixin.qq.com/s/uPUxo8gIGyHv-b_aWdgzaw)

+ 第 22 题：[【每日一题】(22题)面试官问：var与const,let的主要区别是什么？](https://mp.weixin.qq.com/s/wJ1cG7eQw85fpqpk_fHq7w)

+ 第 21 题：[【每日一题】(21题)面试官问：谈谈JS中的 this 的绑定？](https://mp.weixin.qq.com/s/WvDIjv_FNfDsD9OmB6SirA)

+ 第 20 题：[【每日一题】(20题)面试官问：谈谈JS中的 webSockets 的理解？](https://mp.weixin.qq.com/s/GA-Wl03ZDLhnBCAG0wTi0w)

+ 第 19 题：[【每日一题】面试官问：谈谈JS中的 XMLHttpRequest 对象的理解？](https://mp.weixin.qq.com/s/wxIEGJVmfxq0Q-8E4tbv1A)

+ 第 18 题：[【每日一题】面试官问：JS中的 Ajax 跨域与扩展 Comet ？](https://mp.weixin.qq.com/s/mb8TRlw1yzEOfDzMyYLW2g)

+ 第 17 题：[【每日一题】(17题)面试官问：JS中事件流，事件处理程序，事件对象的理解？](https://mp.weixin.qq.com/s/mb8TRlw1yzEOfDzMyYLW2g)

+ 第 16 题：[【每日一题】面试官问：JS中如何全面进行客户端检测？](https://mp.weixin.qq.com/s/-tNI1vwdK_SAxNGRQTCd1Q)

+ 第 15 题：[【每日一题】面试官问：JS类型判断有哪几种方法？](https://mp.weixin.qq.com/s/UwVgQMaVPg6Z0SVgn4kqwA)

+ 第 14 题：[【每日一题】面试官问：谈谈你对JS对象的创建和引申](https://mp.weixin.qq.com/s/-HTpVMFMRDu8sElNv-WqIw)

+ 第 13 题[[每日一题]面试官问：['1', '2', '3'].map(parseInt)输出，原因，以及延伸？](https://mp.weixin.qq.com/s/DJ6Av4tQgJpqa8hKAPk_uA)

+ 第 12 题[[每日一题]面试官问：JS引擎的执行过程（二）](https://mp.weixin.qq.com/s/CCUsCM2vzb6S1wcwIsjQuA)

+ 第 11 题[[每日一题]面试官问：JS引擎的执行过程（一）](https://mp.weixin.qq.com/s/Lhd5N5a1b8fAstWn5H3B3Q)

+ 第 10 题[[每日一题]面试官问：详细说一下JS数据类型](https://mp.weixin.qq.com/s/wm0EGVXTTHoHMcdUxMQmKA)

+ 第 8 题[[每日一题]面试官问：谈谈你对ES6的proxy的理解？](https://mp.weixin.qq.com/s/8loJlarVrmj47XjgrZLI1w)

+ 第 7 题[[每日一题]面试官问：for in和for of 的区别和原理？](https://mp.weixin.qq.com/s/RsynH85UkAwAgIAzwxs-Ag)

+ 第 6 题[[每日一题]面试官问：Async/Await 如何通过同步的方式实现异步？](https://mp.weixin.qq.com/s/UAYBnQvekRugR8DVEUPB3Q)

+ 第 3 道[「「每日一题」面试官问你对 Promise 的理解？可能是需要你能手动实现各个特性」](https://mp.weixin.qq.com/s/QuuPd2KCp50snN7F2o3oYg)

+ 第 2 道[「[每日一题]ES6 中为什么要使用 Symbol？」](https://mp.weixin.qq.com/s/omeVJdtabo5MeN3DItDfWg)

### 2、浏览器

+ 第 9 题[[每日一题]requestAnimationFrame不香吗？](https://mp.weixin.qq.com/s/4Ob_CEiZUyoHKxffAeAYdw)


### 3、Vue

+ 第 5 道[「每日一题」到底该如何回答：vue数据绑定的实现原理？](https://mp.weixin.qq.com/s/8eo4frdB-zMA7nD_1wdnLw)

### 4、HTML5
+ 第 29 道[【每日一题】(29题)面试官:HTML-HTML5新增标签属性的理解？](https://mp.weixin.qq.com/s/Lx5-bF-xliB9TBuEtE7dLw)

### 5、算法
+ 第 27 道[【每日一题】(27题)算法题:如何使用多种解决方案来实现跳一跳游戏？](https://mp.weixin.qq.com/s/EY99dnyjjTvdBflpE5T2Fw)

+ 第 26 道[【每日一题】(26题)算法题:最长公共前缀？](https://mp.weixin.qq.com/s/1TzP0JgrzqXbQes1jzzwFg)

+ 第 25 道[【每日一题】(25题)算法题:堆数据结构-前 K 个高频元素？](https://mp.weixin.qq.com/s/desqLK9Wst9v7XPcNyvwlQ)

+ 第 24 道[【每日一题】(24题)算法题:贪心算法-环游世界之如何加油？](https://mp.weixin.qq.com/s/ST6pf00iBZiDs4GpGK0eOw)

+ 第 4 道[「每日一题」与面试官手撕代码：如何科学高效的寻找重复元素？](https://mp.weixin.qq.com/s/jFZ_2f272LhBBPuuLaWnyg)

### 6、Node

+ 第 23 道[【每日一题】(23题)面试官问：详细描述事件循环Event Loop？](https://mp.weixin.qq.com/s/hE-tK_PbSYkMms8P9b2H7A)

### 7、Http

+ 第 1 道[「一道面试题是如何引发深层次的灵魂拷问？」](https://mp.weixin.qq.com/s/O8j9gM5tD5rjLz1kdda3LA)

