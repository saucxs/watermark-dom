/**
 * Created by Safeguard on 2017/4/26.
 */
watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" });
var wm_txt = document.getElementById("wm_txt");
wm_txt.value="测试水印，1021002301，测试水印，100101010111101";

//test button
function wm_test() {
    var config={};
    //watermark content
    var wm_txt = document.getElementById("wm_txt");
    config.watermark_txt=wm_txt.value;
    //x
    var wm_x=document.getElementById("wm_x");
    config.watermark_x=parseFloat(wm_x.value);
    //y
    var wm_y=document.getElementById("wm_y");
    config.watermark_y=parseFloat(wm_y.value);
    //rows
    var wm_rows=document.getElementById("wm_rows");
    config.watermark_rows=parseInt(wm_rows.value);
    //cols
    var wm_cols=document.getElementById("wm_cols");
    config.watermark_cols=parseInt(wm_cols.value);
    //x_space
    var wm_x_space=document.getElementById("wm_x_space");
    config.watermark_x_spacer=parseFloat(wm_x_space.value);
    //y_space
    var wm_y_space=document.getElementById("wm_y_space");
    config.watermark_y_spacer=parseFloat(wm_y_space.value);
    //font
    var wm_font=document.getElementById("wm_font");
    config.watermark_font=wm_font.value;
    //font-color
    var wm_color=document.getElementById("wm_color");
    config.watermark_color=wm_color.value;
    //font-size
    var wm_size=document.getElementById("wm_size");
    config.watermark_fontsize=wm_size.value+'px';
    //alpha
    var wm_alpha=document.getElementById("wm_alpha");
    config.watermark_alpha=parseFloat(wm_alpha.value);
    //width
    var wm_width=document.getElementById("wm_width");
    config.watermark_width=parseFloat(wm_width.value);
    //height
    var wm_height=document.getElementById("wm_height");
    config.watermark_height=parseFloat(wm_height.value);
    //angle
    var wm_angle=document.getElementById("wm_angle");
    config.watermark_angle=parseFloat(wm_angle.value);
    //all push
    watermark.load(config);
}

//clear button
function wm_clear() {
    wm_txt.value="测试水印，1021002301，测试水印，100101010111101";
    wm_x.value="20";
    wm_y.value="20";
    wm_rows.value="0";
    wm_cols.value="0";
    wm_x_space.value="100";
    wm_y_space.value="50";
    wm_font.value="微软雅黑";
    wm_color.value="black";
    wm_size.value="18";
    wm_alpha.value="0.15";
    wm_width.value="150";
    wm_height.value="100";
    wm_angle.value="15";
    document.getElementById("wm_content").style.display = "block";
    document.getElementById("wm_show").value="隐藏";
    wm_test();
}

// show and hide 显示和隐藏
function wm_show() {
    var wm_show = document.getElementById("wm_show");
    if (wm_show.value == "显示"){
        wm_show.value = "隐藏";
        document.getElementById("wm_content").style.display = "block";
    }
    else {
        wm_show.value = "显示";
        document.getElementById("wm_content").style.display = "none";
    }
}

//create random number
function GetRandomNum(Min,Max){
    var Range=Max-Min;
    var Rand=Math.random();
    return (Min+Math.round(Rand*Range));
}

// random char 随机字符串
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n){
    var res="";
    for(var i=0;i<n;i++){
        var id=Math.ceil(Math.random()*(chars.length-1));
        res+=chars[id];
    }
    return res;
}

// random word 随机文字
word1=new Array;
word1=["大数据","测试水印","我是新插件","阿里巴巴","什么才是真正的随机","我说的随机就是随机"];
word2=new Array;
word2=["隶书","微软雅黑","宋体","新宋体","楷体","仿宋","华文彩云","华文中宋","ADMUI3Lg","Calibri","Wingdings 2"];

//random button 随机按钮
function wm_random(){
    //随机字体
    wm_font.value= word2[GetRandomNum(0,10)];
    //随机文字，字母，数字等水印
    wm_txt.value=word1[GetRandomNum(0,5)]+generateMixed(15)+wm_font.value;
    wm_x.value=parseFloat(GetRandomNum(0,40));
    wm_y.value=parseInt(GetRandomNum(0,40));
    wm_rows.value=parseInt(GetRandomNum(5,20));
    wm_cols.value=parseInt(GetRandomNum(5,20));
    wm_x_space.value=parseFloat(GetRandomNum(50,100));
    wm_y_space.value=parseFloat(GetRandomNum(50,100));
    wm_color.value='#'+Math.floor(Math.random()*0xffffff).toString(16);
    wm_size.value=parseFloat(GetRandomNum(10,30))+"px";
    wm_alpha.value=Math.random()*2;
    wm_width.value=parseFloat(GetRandomNum(100,300));
    wm_height.value=parseFloat(GetRandomNum(50,200));
    wm_angle.value=parseFloat(GetRandomNum(0,180));
    wm_test()
}
