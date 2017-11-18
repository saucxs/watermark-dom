## watermark-dom

`watermark.js`是一个给B/S网站系统加一个很浅的水印插件，确保系统的保密性，安全性，降低数据泄密风险。

水印插件内容，包含1、水印插件-使用，2、水印插件-testTool（测试工具），3、API介绍，4、支持浏览器

## 1、水印插件-使用

### 1.1 本地引入封装的js文件

只是简单的加一个很浅的水印，实现起来很容易。不需要引入jquery插件。

`watermark.js`是必须要引进的组件

第一步：获取组件方式：`git clone https://github.com/saucxs/watermark.git`

第二步：clone后，在需要加水印的相关页面引入水印文件"watermark.js":
```
        script type="text/javascript" src="./watermark/watermark.js"></script>
```

第三步：在确保页面DOM加载完毕之后，调用watermark的load方法:
```
        <!--watermark start-->
        		  <script>watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
         <!--watermark end-->
```

使用插件的效果地址：http://www.chengxinsong.cn


![image](./examples/img/demo.png)

获取一个watermark_demo1的源码（watermark_demo1文件夹）

## 2、水印插件-testTool（测试工具）

获取方式：`git clone https://github.com/saucxs/watermark.git`

用浏览器打开index.html

查看地址：http://suning.mwcxs.top

看到水印插件-测试demo的效果
![image](./examples/img/demo2.png)


## 3、API介绍
    
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

## 4、支持浏览器
Chrome,FireFox,IE11