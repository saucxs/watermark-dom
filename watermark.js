(function (root,factory) {
    if (typeof define === 'function' && define.amd) {
        /*AMD. Register as an anonymous module.
        *define([], factory); */
        define([], factory());
    } else if (typeof module === 'object' && module.exports) {
        /*Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.*/
        module.exports = factory();

    } else {
        /*Browser globals (root is window)*/
        root['watermark'] = factory();
    }
}(this, function () {

    /*Just return a value to define the module export.*/
    var watermark = {};

    /*加载水印*/
    var loadMark = function(settings) {
        var defaultSettings={
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
        };

        /*采用配置项替换默认值，作用类似jquery.extend*/
        if(arguments.length===1&&typeof arguments[0] ==="object" )
        {
            var src=arguments[0]||{};
            for(key in src)
            {
                if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])continue;
                /*veronic: resolution of watermark_angle=0 not in force*/
                else if(src[key] || src[key] === 0) defaultSettings[key]=src[key];
            }
        }

        /*如果元素存在则移除*/
        var watermark_element = document.getElementById(defaultSettings.watermark_id);
        if (watermark_element) {
            var _parentElement = watermark_element.parentNode;
            if(_parentElement){
                _parentElement.removeChild(watermark_element);
            }
        }

        /*获取页面最大宽度*/
        var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth) - defaultSettings.watermark_width/2;
        /*获取页面最大长度*/
        var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight,document.documentElement.clientHeight)-defaultSettings.watermark_height/2;

        var setting = arguments[0]||{};
        var parentEle = defaultSettings.watermark_parent_node;

        var page_offsetTop = 0;
        var page_offsetLeft = 0;

        if(setting.watermark_parent_width || setting.watermark_parent_height){
            setting.watermark_parent_width?(page_width = setting.watermark_parent_width-defaultSettings.watermark_width/2):(defaultSettings.watermark_parent_node)?(page_width = parentEle.offsetWidth-defaultSettings.watermark_width/2):void 0;
            setting.watermark_parent_height?(page_height = setting.watermark_parent_height-defaultSettings.watermark_height/2):(defaultSettings.watermark_parent_node)?(page_height = Math.max(parentEle.offsetHeight,parentEle.scrollHeight)-defaultSettings.watermark_height/2):void 0;

            /*指定父元素同时指定了宽或高*/
            if(parentEle){
                page_offsetTop = parentEle.offsetTop || 0;
                page_offsetLeft = parentEle.offsetLeft || 0;
                defaultSettings.watermark_x = defaultSettings.watermark_x + page_offsetLeft;
                defaultSettings.watermark_y = defaultSettings.watermark_y + page_offsetTop;
            }
        }else{
            if(parentEle){
                page_offsetTop = parentEle.offsetTop || 0;
                page_offsetLeft = parentEle.offsetLeft || 0;
                page_width = parentEle.offsetWidth-defaultSettings.watermark_width/2 || 0;
                page_height =(Math.max(parentEle.offsetHeight,parentEle.scrollHeight)-defaultSettings.watermark_height/2)|| 0;

                defaultSettings.watermark_x = defaultSettings.watermark_x + page_offsetLeft;
                defaultSettings.watermark_y = defaultSettings.watermark_y + page_offsetTop;
            }
        }

        /*创建水印外壳div*/
        var otdiv = document.getElementById(defaultSettings.watermark_id);
        var shadowRoot=null;

        if(!otdiv){
            otdiv =document.createElement('div');

            /*创建shadow dom*/
            otdiv.id = defaultSettings.watermark_id;
            otdiv.style.pointerEvents = "none";

            /*判断浏览器是否支持createShadowRoot方法*/
            if(typeof otdiv.createShadowRoot === 'function'){
                shadowRoot = otdiv.createShadowRoot();
            }else{
                shadowRoot = otdiv;
            }

            /*将shadow dom随机插入body内的任意位置*/
            var nodeList = document.body.children;
            var index = Math.floor(Math.random()*(nodeList.length-1 ));
            if(nodeList[index]){
                document.body.insertBefore(otdiv, nodeList[index]);
            }else{
                document.body.appendChild(otdiv);
            }

        }else if (otdiv.shadowRoot){
            shadowRoot = otdiv.shadowRoot;
        }


        /*如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔*/
        if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
            defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + page_offsetLeft) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
            defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x+ page_offsetLeft - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
        }
        /*如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔*/
        if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
            defaultSettings.watermark_rows = parseInt((page_height - defaultSettings.watermark_y + page_offsetTop) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
            defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y + page_offsetTop) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
        }

        var x;
        var y;
        for (var i = 0; i < defaultSettings.watermark_rows; i++) {
            y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
            for (var j = 0; j < defaultSettings.watermark_cols; j++) {
                x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

                var mask_div = document.createElement('div');
                var oText=document.createTextNode(defaultSettings.watermark_txt);
                mask_div.appendChild(oText);
                /*设置水印相关属性start*/
                mask_div.id = defaultSettings.watermark_prefix + i + j;
                /*设置水印div倾斜显示*/
                mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.visibility = "";
                mask_div.style.position = "absolute";
                /*选不中*/
                mask_div.style.left = x + 'px';
                mask_div.style.top = y + 'px';
                mask_div.style.overflow = "hidden";
                mask_div.style.zIndex = "9999999";
                mask_div.style.opacity = defaultSettings.watermark_alpha;
                mask_div.style.fontSize = defaultSettings.watermark_fontsize;
                mask_div.style.fontFamily = defaultSettings.watermark_font;
                mask_div.style.color = defaultSettings.watermark_color;
                mask_div.style.textAlign = "center";
                mask_div.style.width = defaultSettings.watermark_width + 'px';
                mask_div.style.height = defaultSettings.watermark_height + 'px';
                mask_div.style.display = "block";
                mask_div.style['-ms-user-select'] = "none";
                /*设置水印相关属性end*/
                shadowRoot.appendChild(mask_div);

            }
        }

    };

    /*初始化水印，添加load和resize事件*/
    watermark.init = function(settings) {
        window.addEventListener('load', function () {
            loadMark(settings);
        });
        window.addEventListener('resize', function () {
            loadMark(settings);
        });
        window.addEventListener('DOMContentLoaded', function () {
            loadMark(settings);
        });

    };

    /*手动加载水印*/
    watermark.load = function(settings){
        loadMark(settings);
    };

    return watermark;
}));
