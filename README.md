# watermark

`watermark.js`是一个给B/S网站系统加一个很浅的水印插件，确保系统的保密性，安全性。

水印插件内容，包含1、水印插件-使用，2、水印插件-测试demo，3、API介绍

#1、水印插件-使用

只是简单的加一个很浅的水印，实现起来很容易。不需要引入jquery插件。

`watermark.js`是必须要引进的组件

获取方式：`git clone https://github.com/saucxs/watermark.git`

在项目`javascript`中引入`watermark.js`，[注意]：这个要在dom加载完成之后添加，也就是在页面的最后添加这个段代码，可以参考watermark_demo1的源码。

        <!--watermark start-->
        		       <script src="js/watermark.js"></script>
        		       <script>watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
         <!--watermark end-->

就可以看到效果，水印插件使用demo地址

使用插件的效果地址：http://www.chengxinsong.cn

获取一个watermark_demo1的源码（watermark_demo1文件夹）

#2、水印插件-测试demo

获取方式：`git clone https://github.com/saucxs/watermark.git`

用浏览器打开index.html

效果地址：http://www.chengxinsong.cn/watermark_test

项目中使用插件的步骤：

（1）先下载watermark.js和index.js

（2）从copy start到copy end中间部分复制，粘贴在项目需要用到的页面中。

    <!--copy start-->
    <div class="wm_box" style="position: fixed;top:5px; left: 5px; z-index: 100;">
        <input type="button" class="btn" id="wm_test" value="测试" onclick="wm_test()" style="color: #fff;background-color:#2d86e1;font-size: 14px;font-weight: 400;text-align: center;border: 1px solid transparent;border-radius: 4px;line-height: 1.42857143;padding: 6px 12px" />
        <input type="button" class="btn" id="wm_clear" value="重置" onclick="wm_clear()" style="color: #fff;background-color:#2d86e1;font-size: 14px;font-weight: 400;text-align: center;border: 1px solid transparent;border-radius: 4px;line-height: 1.42857143;padding: 6px 12px" />
        <input type="button" class="btn" id="wm_show" value="显示" onclick="wm_show()" style="color: #fff;background-color:#2d86e1;font-size: 14px;font-weight: 400;text-align: center;border: 1px solid transparent;border-radius: 4px;line-height: 1.42857143;padding: 6px 12px" />
        <input type="button" class="btn" id="wm_random" value="随机" onclick="wm_random()" style="color: #fff;background-color:#2d86e1;font-size: 14px;font-weight: 400;text-align: center;border: 1px solid transparent;border-radius: 4px;line-height: 1.42857143;padding: 6px 12px"/>
    <!--watermark num-->
        <div id="wm_content" style="display: none">
         <form>
        <label>水印文字测试</label>
        <textarea id="wm_txt" placeholder="请输入值水印文字"></textarea>
    </form>
    <form>
        <label>起始x位置</label>
        <input id="wm_x"   value="20"></input>
    </form>
    <form>
        <label>起始y位置</label>
        <input id="wm_y" value="20"></input>
    </form>
    <form>
        <label>水印行数</label>
        <input id="wm_rows"  value="0"></input>
    </form>
    <form>
        <label>水印列数</label>
        <input id="wm_cols" value="0"></input>
    </form>
    <form>
        <label>水印x轴间隔</label>
        <input id="wm_x_space"  value="100"></input>
    </form>
    <form>
        <label>水印y轴间隔</label>
        <input id="wm_y_space" value="50"></input>
    </form>
    <form>
        <label>水印字体</label>
        <input id="wm_font"  value="微软雅黑"></input>
    </form>
    <form>
        <label>水印字体颜色</label>
        <input id="wm_color" value="red"></input>
    </form>
    <form>
        <label>水印字体大小</label>
        <input id="wm_size" value="18" ></input>
    </form>
    <div><label>水印透明度</label>
    <input id="wm_alpha" value="0.15"></input>
    </div>
    <form>
        <label>水印宽度</label>
        <input id="wm_width" value="150" ></input>
    </form>
    <form>
        <label>水印长度</label>
        <input id="wm_height" value="100"></input>
    </form>
    <form>
        <label>水印倾斜度</label>
        <input id="wm_angle" value="15"></input>
    </form>
    </div>
    </div>
     <!--引入2个js文件-->
    <script src="watermark.js"></script>
    <script src="index.js"></script>
    <!--copy end-->
    
（3）就可以看到水印插件-测试demo的效果



#3、API介绍
    
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
