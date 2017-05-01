# watermark
水印插件，包含1、水印插件，2、水印插件的测试demo，3、read.me

##1、水印插件-使用

只是简单的加一个很浅的水印，实现起来很容易。不需要引入jquery插件。

`watermark.js`是必须要引进的组件

在项目`javascript`中引入`watermark.js`

        <!--watermark start-->
        		       <script src="js/watermark.js"></script>
        		       <script>watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })</script>
         <!--watermark end-->

既可以看到效果，水印插件使用demo地址

http://www.chengxinsong.cn/sinaweibo/

获取一个watermark_demo1的源码（watermark_demo1文件夹）

`git clone https://github.com/saucxs/watermark.git`


##2、水印插件-测试参数-使用

`git clone https://github.com/saucxs/watermark.git`

用浏览器打开index.html

测试地址：http://www.chengxinsong.cn/watermark_test

（1）先下载watermark.js和index.js
（2）从copy start到copy end中间部分复制，粘贴在项目需要用到的页面中。
（3）页面中引入这2个js文件