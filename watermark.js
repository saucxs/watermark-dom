(function(watermark){
    window.watermarkdivs = [];
    // 加载水印
    var loadMark = function(settings) {
        var defaultSettings={
            watermark_id: 'wm_div_id',       //水印总体的id
            watermark_txt:"测试水印",        //水印的内容
            watermark_x:20,                 //水印起始位置x轴坐标
            watermark_y:20,                 //水印起始位置Y轴坐标
            watermark_rows:0,               //水印行数
            watermark_cols:0,               //水印列数
            watermark_x_space:100,          //水印x轴间隔
            watermark_y_space:50,           //水印y轴间隔
            watermark_font:'微软雅黑',      //水印字体
            watermark_color:'black',       //水印字体颜色
            watermark_fontsize:'18px',     //水印字体大小
            watermark_alpha:0.15,          //水印透明度，要求设置在大于等于0.003
            watermark_width:150,           //水印宽度
            watermark_height:100,          //水印长度
            watermark_angle:15             //水印倾斜度数
        };

        //采用配置项替换默认值，作用类似jquery.extend
        if(arguments.length === 1&&typeof arguments[0] ==="object" )
        {
            var src = arguments[0]||{};
            for(key in src)
            {
                if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
                    continue;
                else if(src[key])
                    defaultSettings[key]=src[key];
            }
        }
        //如果元素存在就移除
        var watermark_element = document.getElementById(defaultSettings.watermark_id);
        if(watermark_element){
            var _parentElement = watermark_element.parentNode;
            if(_parentElement){
                _parentElement.removeChild(watermark_element);
            }
        }

        //获取页面最大宽度
        var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth)-30;
        //获取页面最大长度
        var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight)-30;
        
        // 是否支持ShadowRoot
        var IsShadowRoot = typeof document.createShadowRoot === 'function';
        //var IsIE78=/msie [6|7|8]/i.test(window.navigator.userAgent);
        //var cosv=0;
        //var sinv=0;
        //var M12=0;
        //if(IsIE78){
        //    var fv=360-defaultSettings.watermark_angle%360;
        //    cosv=Math.cos(fv);
        //    sinv=Math.sin(fv);
        //    M12=-sinv;
        //}

        //创建水印外壳div
        var otdiv = document.getElementById(defaultSettings.watermark_id);
        if(!otdiv){
            otdiv = document.createElement('div');
            //创建shadow dom
            otdiv.id = defaultSettings.watermark_id;
            otdiv.style.pointerEvents = "none";
            //判断浏览器是否支持createShadowRoot方法
            if(typeof otdiv.createShadowRoot === 'function'){
                shadowRoot = otdiv.createShadowRoot();
            }else{
                shadowRoot = otdiv;
            }
            //将shadow dom随机插入到body内的任意位置
            var nodeList = document.body.children;
            var index = Math.floor(Math.random()*(nodeList.length-1));
            if(nodeList[index]){
                document.body.insertBefore(otdiv,nodeList[index]);
            }else{
                document.body.appendChild(otdiv);
            }
        }else if(otdiv,shadowRoot){
            shadowRoot = otdiv.shadowRoot;
        }

        //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
        if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
            defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
            defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
        }
        //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
        if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
            defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
            defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
        }

        var x;
        var y;
        for (var i = 0; i < defaultSettings.watermark_rows; i++) {
            y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
            for (var j = 0; j < defaultSettings.watermark_cols; j++) {
                x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

                var mask_div = document.createElement('div');
                mask_div.innerHTML = defaultSettings.watermark_txt;
                // 设置水印相关属性start
                mask_div.id = defaultSettings.watermark_id + i + j;
                //设置水印div倾斜显示
                mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.visibility = "";
                mask_div.style.position = "absolute";
                //选不中
                mask_div.style.left = x + 'px';
                mask_div.style.top = y + 'px';
                mask_div.style.overflow = "hidden";
                mask_div.style.zIndex = "9999";
                mask_div.style.opacity = defaultSettings.watermark_alpha;
                mask_div.style.filter="progid:DXImageTransform.Microsoft.Alpha(Opacity="+(defaultSettings.watermark_alpha*100)+")";
                //if(IsIE78) //ie7 8
                //    mask_div.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+cosv+",M12="+M12+",M21="+sinv+",M22="+cosv+",SizingMethod='auto expand')progid:DXImageTransform.Microsoft.Alpha(Opacity="+(defaultSettings.watermark_alpha*100)+")";
                mask_div.style.fontSize = defaultSettings.watermark_fontsize;
                mask_div.style.fontFamily = defaultSettings.watermark_font;
                mask_div.style.color = defaultSettings.watermark_color;
                mask_div.style.textAlign = "center";
                mask_div.style.width = defaultSettings.watermark_width + 'px';
                mask_div.style.height = defaultSettings.watermark_height + 'px';
                mask_div.style.display = "block";
                if(!IsShadowRoot)
                {
                    mask_div.onclick= function(){
                        var vcliEle = getElementsByClientXY(document, event.clientX, event.clientY, 0, 0);
                        if (vcliEle != null) {
                            switch (vcliEle.nodeName) {
                                case "A": 
                                    vcliEle.click();
                                    break;
                                case "SELECT":
                                    //找不到方法打开下拉框
                                    vcliEle.focus();
                                    break;
                                case "TEXTAREA":
                                    vcliEle.focus();
                                    break;
                                case "INPUT":
                                    var vtype = vcliEle.getAttribute("type").toLowerCase();
                                    switch (vtype) {
                                        case "radio":
                                        case "checkbox":
                                        case "button":
                                        case "submit":
                                        case "reset":
                                        case "file":
                                            vcliEle.click();
                                            break;
                                        default:
                                            vcliEle.focus();
                                            break;
                                    }
                                    break;
                            }
                        }
                    };
                }
                //设置水印相关属性end
                //附加到文档碎片中
                shadowRoot.appendChild(mask_div);
            };
        };
    };

    var getXYTagByTagName = function (tagname, doc, clientX, clientY, fleft, ftop) {
        //本级的控件
        var inputs = doc.getElementsByTagName(tagname);
        for (var i = 0, j = inputs.length; i < j; i++) {
            var vrect = inputs[i].getBoundingClientRect();
            var xmin = vrect.left + fleft;
            var ymin = vrect.top + ftop;
            var vwidth = vrect.width || inputs[i].offsetWidth;
            var vheight = vrect.height || inputs[i].clientHeight;
            var xmax = xmin + vwidth;
            var ymax = ymin + vheight;
            
            if (xmin <= clientX && xmax >= clientX && ymin <= clientY && ymax >= clientY) {
                return inputs[i];
            }
        }
        return null;
    }

    var getElementsByClientXY = function (doc, clientX, clientY, fleft, ftop) {
        //本级的控件
        var vtag = getXYTagByTagName("input",doc, clientX, clientY, fleft, ftop);
        if(vtag!=null)
            return vtag;

        vtag = getXYTagByTagName("textarea",doc, clientX, clientY, fleft, ftop);
        if(vtag!=null)
            return vtag;
        vtag = getXYTagByTagName("select",doc, clientX, clientY, fleft, ftop);
        if(vtag!=null)
            return vtag;

        vtag = getXYTagByTagName("a",doc, clientX, clientY, fleft, ftop);
        if(vtag!=null)
            return vtag;

        //检查是否有iframe
        var viframe = doc.getElementsByTagName("iframe");
        for (var k = 0, m = viframe.length; k < m; k++) {
            var vfrect = viframe[k].getBoundingClientRect();
            vfleft = fleft + vfrect.left;
            vftop = ftop + vfrect.top;
            var vframedoc = viframe[k].contentDocument || viframe[k].contentWindow.document;
            var ifrele = getElementsByClientXY(vframedoc, clientX, clientY, vfleft, vftop);
            if (ifrele != null)
                return ifrele;
        }

        return null;
    }

    //初始化水印，添加load和resize事件
    watermark.init = function (settings) {
        try {
            window.addEventListener('load', function () {
                loadMark(settings);
            });
            window.addEventListener('resize', function () {
                loadMark(settings);
            });
            window.addEventListener('DOMContentLoaded', function () {
                loadMark(settings);
            })
        }
        catch (ex)
        {
            loadMark(settings);
        }
    };
    //手动加载水印
    watermark.load = function (settings) {
        loadMark(settings);
    };

})(window.watermark = {});