//为顶部ul绑定鼠标移入事件
var lis=document.querySelectorAll(".service,.app_jd");
lis[1].onmouseover=lis[0].onmouseover=function(){
    this.lastElementChild.style.display="block";
    this.children[1].className="hover";
};
lis[1].onmouseout=lis[0].onmouseout=function(){
    this.lastElementChild.style.display="";
    this.children[1].className="";
};
var cate=document.getElementById("category");
cate.onmouseover=function(){
    this.lastElementChild.style.display="block";
};
cate.onmouseout=function(){
    this.lastElementChild.style.display="";
};
var as=document.querySelectorAll("#preview>h1>a");
const LIWIDTH=62,OFFSET=20;
var ul=document.querySelector("#icon_list");
var lis=ul.children;
var moved=0;
as[1].onclick=function(){
    if(this.className=="forward"){
        moved++;
        ul.style.left=OFFSET+(-LIWIDTH*moved)+"px";
        checked();
    }
};
as[0].onclick=function(){
    if(this.className=="backward"){
        moved--;
        ul.style.left=-LIWIDTH*moved+OFFSET+"px";
        checked();
    }
};
function checked(){
    if(lis.length-moved<=5){
        as[1].className="forward disabled";
    }else if(moved==0){
        as[0].className="backward disabled";
    }else{
        as[0].className="backward";
        as[1].className="forward";
    }
}
if(ul.length<=5){
    as[0].className="backward disabled";
    as[1].className="forward disabled";
}
var mImg=document.getElementById("mImg");
var mDiv=document.getElementById("mediumDiv");
ul.onmousemove=function(e){
    if(e.target.nodeName=="IMG"){
        var oldUrl=e.target.src;
        var index=oldUrl.indexOf(".jpg");
        var newUrl=oldUrl.slice(0,index)+"-m"+oldUrl.slice(index);
        mImg.src=newUrl;
    }
};
//放大镜效果
var lDiv=document.getElementById("largeDiv");
var mask=document.getElementById("mask");
mDiv.onmouseover=function(){
    mask.style.display="block";
    lDiv.style.display="block";
    var imgUrl=this.firstElementChild.src;
    var index=imgUrl.indexOf(".jpg");
    //var newUrl=imgUrl.slice(0,index-1).concat("l.jpg");
    var newUrl=imgUrl.slice(0,index-1)+"l"+imgUrl.slice(index);
    lDiv.style.background=`url(${newUrl}) no-repeat`;
};
mDiv.onmouseout=function(){
    mask.style.display="";
    lDiv.style.display="";
};
const MASK=175,//mask宽度高度
     MAX=175;
mDiv.onmousemove=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var left=x-MASK/2,
        top=y-MASK/2;
    if(left<0){left=0}
    else if(left>MAX){left=MAX}
    if(top<0){top=0}
    else if(top>MAX){top=MAX}
    //mask.style.left=`${left}px`;
//mask.style.top=`${top}px`;
    mask.style.cssText=`left:${left}px; top:${top}px;display:block`;
    lDiv.style.backgroundPosition=`${-left*16/7}px ${-top*16/7}px`;
};