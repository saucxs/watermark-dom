## 本地引用js文件
  第一步：下载后，在需要加水印的相关页面引入水印文件"index.js"或者"index.min.js":
                     <script type="text/javascript" src="./watermark/index.js"></script>
                    或者是：<script type="text/javascript" src="./watermark/index.min.js"></script>
  第二步：在确保页面DOM加载完毕之后，调用watermark的init方法:        
                     <script type="text/javascript">
                          watermark.init({ watermark_txt: "测试水印"});
                     </script>