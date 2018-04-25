function test_json(){
    var packJson  = {"name":"Liza<p></p>?!@#$%^&*()_+'\\\"", "password":"123"} ;  
  
    for(var k in packJson ){//遍历packJson 对象的每个key/value对,k为key  
       alert(k + " " + packJson[k]);  
    } 
    //console.log(obj[0].name)
}
function getUrlParam(name){//得到get参数
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
}
function get_year(datestr){//datestr===>"2018-04-19 08:10:12"
    var date = new Date(datestr); 
    
    var year=date.getFullYear();
    //console.log(year); 
    //var month=date.getMonth()+1;
    //console.log(month); 

    return year;
}
function IEVersion() {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                } else if(fIEVersion == 8) {
                    return 8;
                } else if(fIEVersion == 9) {
                    return 9;
                } else if(fIEVersion == 10) {
                    return 10;
                } else {
                    return 6;//IE版本<=7
                }   
            } else if(isEdge) {
                return 'edge';//edge
            } else if(isIE11) {
                return 11; //IE11  
            }else{
                return -1;//不是ie浏览器
            }
        }
// 首先对xml对象进行判断
var  checkXMLDocObj = function (xmlFile) {
    var xmlDoc = loadXML(xmlFile);
    if (xmlDoc == null) {
        //alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
        window.location.href = './index.html';

    }
    return xmlDoc;
}
// 加载xml文档
var loadXML = function (xmlFile) {
    var xmlDoc;
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
        xmlDoc.async = false;
        xmlDoc.load(xmlFile);
        console.log("IE");
        //alert("IE");
    }
    else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0) { //火狐浏览器
    //else if (document.implementation && document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
        
        xmlDoc = document.implementation.createDocument('', '', null);
        xmlDoc.load(xmlFile);
        console.log("Firefox");
        //alert("Firefox");
    }else{ //谷歌浏览器
      var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET",xmlFile,false);
        xmlhttp.send(null);
        if(xmlhttp.readyState == 4){
          //console.log(xmlhttp.responseText);
          //xmlDoc = xmlhttp.responseXML.documentElement;
        xmlDoc = xmlhttp.responseText;
        } 
        console.log("google");
        //alert("google");
    }

    return xmlDoc;
}