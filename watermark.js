(function (watermark) {
    window.watermarkdivs = [];
    // 加载水印
    var loadMark = function (settings) {
        var def = {
            id: 'wm_div_id', //水印总体的id
            txt: "测试水印", //水印的内容
            x: 20, //水印起始位置x轴坐标
            y: 20, //水印起始位置Y轴坐标
            rows: 0, //水印行数
            cols: 0, //水印列数
            x_space: 100, //水印x轴间隔
            y_space: 50, //水印y轴间隔
            font: '微软雅黑', //水印字体
            color: 'black', //水印字体颜色
            fontsize: '18px', //水印字体大小
            alpha: 0.15, //水印透明度，要求设置在大于等于0.003
            width: 150, //水印宽度
            height: 100, //水印长度
            angle: 15 //水印倾斜度数
        };

        //采用配置项替换默认值，作用类似jquery.extend
        if (arguments.length === 1 && typeof arguments[0] === "object") {
            var src = arguments[0] || {};
            for (key in src) {
                if (typeof src[key] !== typeof def[key])
                    continue;
                if (src[key] != def[key])
                    def[key] = src[key];
            }
        }
        //如果元素存在就移除
        var old_element = document.getElementById(def.id);
        if (old_element) {
            var _parentElement = old_element.parentNode;
            if (_parentElement) {
                _parentElement.removeChild(old_element);
            }
        }

        //获取页面最大宽度
        var page_width = Math.max(document.body.scrollWidth, document.body.clientWidth) - 30;
        //获取页面最大长度
        var page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) - 30;

        // 是否支持ShadowRoot
        var IsShadowRoot = typeof document.createShadowRoot === 'function';
        //var IsIE78=/msie [6|7|8]/i.test(window.navigator.userAgent);
        //var cosv=0;
        //var sinv=0;
        //var M12=0;
        //if(IsIE78){
        //    var fv=360-def.angle%360;
        //    cosv=Math.cos(fv);
        //    sinv=Math.sin(fv);
        //    M12=-sinv;
        //}

        //创建水印外壳div
        var otdiv = document.getElementById(def.id);
        if (!otdiv) {
            otdiv = document.createElement('div');
            //创建shadow dom
            otdiv.id = def.id;
            otdiv.style.pointerEvents = "none";
            //判断浏览器是否支持createShadowRoot方法
            if (typeof otdiv.createShadowRoot === 'function') {
                shadowRoot = otdiv.createShadowRoot();
            } else {
                shadowRoot = otdiv;
            }
            //将shadow dom随机插入到body内的任意位置
            var nodeList = document.body.children;
            var index = Math.floor(Math.random() * (nodeList.length - 1));
            if (nodeList[index]) {
                document.body.insertBefore(otdiv, nodeList[index]);
            } else {
                document.body.appendChild(otdiv);
            }
        } else if (otdiv, shadowRoot) {
            shadowRoot = otdiv.shadowRoot;
        }

        //水印倾斜后的宽高会发生变化,需要重新计算
        var aheight = def.height;
        var awidth = def.width;
        if (def.angle > 0) {
            var vradian = (def.angle % 90) * 0.017453293 //Math.sin(X)必需。一个以弧度表示的角。将角度乘以 0.017453293 （2PI/360）即可转换为弧度。
            aheight = Math.ceil(aheight * Math.sin(vradian) + awidth * Math.cos(vradian));
            awidth = Math.ceil(aheight * Math.cos(vradian) + awidth * Math.sin(vradian));
        }

        //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
        if (def.cols == 0 || (parseInt(def.x + awidth * def.cols + def.x_space * (def.cols - 1)) > page_width)) {
            def.cols = parseInt((page_width - def.x + def.x_space) / (awidth + def.x_space));
            def.x_space = parseInt((page_width - def.x - awidth * def.cols) / (def.cols - 1));
        }
        //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
        if (def.rows == 0 || (parseInt(def.y + aheight * def.rows + def.y_space * (def.rows - 1)) > page_height)) {
            def.rows = parseInt((def.y_space + page_height - def.y) / (aheight + def.y_space));
            def.y_space = parseInt(((page_height - def.y) - aheight * def.rows) / (def.rows - 1));
        }
        if (isNaN(def.cols) || def.cols <= 0)
            def.cols = 1;
        if (isNaN(def.x_space) || def.x_space <= 0)
            def.x_space = 20;
        if (isNaN(def.rows) || def.rows <= 0)
            def.rows = 1;
        if (isNaN(def.y_space) || def.y_space <= 0)
            def.y_space = 20;

        //如果只有一列，就水平居中显示
        if (def.cols == 1 && def.x_space + def.x + awidth > page_width)
            def.x = awidth > page_width ? (awidth - page_width) / 2 : (page_width - awidth) / 2;

        //如果只有一行，就垂直居中显示
        if (def.rows == 1 && def.y_space + def.y + aheight > page_height)
            def.y = aheight > page_height ? (aheight - page_height) / 2 : (page_height - aheight) / 2;

        var x;
        var y;
        for (var i = 0; i < def.rows; i++) {
            y = def.y + (def.y_space + aheight) * i;
            for (var j = 0; j < def.cols; j++) {
                x = def.x + (awidth + def.x_space) * j;

                var mask_div = document.createElement('div');
                mask_div.innerHTML = def.txt;
                // 设置水印相关属性start
                mask_div.id = def.id + i + j;
                //设置水印div倾斜显示
                mask_div.style.webkitTransform = "rotate(-" + def.angle + "deg)";
                mask_div.style.MozTransform = "rotate(-" + def.angle + "deg)";
                mask_div.style.msTransform = "rotate(-" + def.angle + "deg)";
                mask_div.style.OTransform = "rotate(-" + def.angle + "deg)";
                mask_div.style.transform = "rotate(-" + def.angle + "deg)";
                mask_div.style.visibility = "";
                mask_div.style.position = "absolute";
                //选不中
                mask_div.style.left = x + 'px';
                mask_div.style.top = y + 'px';
                mask_div.style.overflow = "hidden";
                mask_div.style.zIndex = "9999";
                mask_div.style.opacity = def.alpha;
                mask_div.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (def.alpha * 100) + ")";
                //if(IsIE78) //ie7 8
                //    mask_div.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+cosv+",M12="+M12+",M21="+sinv+",M22="+cosv+",SizingMethod='auto expand')progid:DXImageTransform.Microsoft.Alpha(Opacity="+(def.alpha*100)+")";
                mask_div.style.fontSize = def.fontsize;
                mask_div.style.fontFamily = def.font;
                mask_div.style.color = def.color;
                mask_div.style.textAlign = "center";
                mask_div.style.width = def.width + 'px';
                mask_div.style.height = def.height + 'px';
                mask_div.style.display = "block";
                if (!IsShadowRoot) {
                    mask_div.onclick = function () {
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
        var vtag = getXYTagByTagName("input", doc, clientX, clientY, fleft, ftop);
        if (vtag != null)
            return vtag;

        vtag = getXYTagByTagName("textarea", doc, clientX, clientY, fleft, ftop);
        if (vtag != null)
            return vtag;
        vtag = getXYTagByTagName("select", doc, clientX, clientY, fleft, ftop);
        if (vtag != null)
            return vtag;

        vtag = getXYTagByTagName("a", doc, clientX, clientY, fleft, ftop);
        if (vtag != null)
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
            //兼容IE8
            if (window.addEventListener) {
                window.addEventListener('load', function () {
                    loadMark(settings);
                });
                window.addEventListener('resize', function () {

                    loadMark(settings);
                });
                window.addEventListener('DOMContentLoaded', function () {
                    loadMark(settings);
                })
            } else {
                window.attachEvent('onload', function () {
                    loadMark(settings);
                });
                window.attachEvent('onresize', function () {

                    loadMark(settings);
                });
                window.attachEvent('onreadystatechange', function () {
                    loadMark(settings);
                })
            }
        } catch (ex) {
            loadMark(settings);
        }
    };
    //手动加载水印
    watermark.load = function (settings) {
        loadMark(settings);
    };

})(window.watermark = {});