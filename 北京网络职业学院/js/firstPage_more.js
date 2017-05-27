window._bd_share_config={
	"common":{
		"bdSnsKey":{},
		"bdText":"",
		"bdMini":"2",
		"bdPic":"",
		"bdStyle":"0",
		"bdSize":"16"},
		"share":{},
		"image":{
        	"viewList":["qzone","tsina","tqq","renren","weixin"],
        	"viewText":"分享到：",
        	"viewSize":"16"},
        "selectShare":{
        	"bdContainerClass":null,
        	"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}
	};
	with(document)0[
	(getElementsByTagName('head')[0]||body)
	.appendChild(createElement('script'))
	.src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	function $(id){
		return document.getElementById(id);
	}
	var comment=$("comment");
	var publish=$("publish");
	var allComment=$("allComment");
	var page=$("page");
	var pageUp=$("pageUp");
	var pageDown=$("pageDown");
	publish.onclick=function(){
		if(comment.value==""){
			alert("请输入内容");
		}else{
			alert("评论成功");
			createContent();
			comment.value="";
		};
	}
	function createContent(){
		allComment.innerHTML="<div class='sub_div'>"+comment.value+"</div>"+allComment.innerHTML;
        if(allComment.children.length>=5){
        	allComment.style.borderBottom="0";
        }
        if(allComment.children.length%5!=0){
            var p_div=document.createElement("div") 
            p_div.id="page";   
        }
        pageUp.onclick=function(){
        	if(page.innerHTML==""){
        		
        	}
        }

	}





	window.onload=function(){
    (function(){
        var lunbotuRight=document.getElementById("lunbotuRight");
        var lunbotuRightUl=lunbotuRight.children[0];
        var lunbotuRightUlLi=lunbotuRightUl.children;
        lunbotuRightUlLi[0].style.zIndex="99";
        lunbotuRightUlLi[0].style.opacity="1";
        var s=0;
        var timer;
        function timerInter(){
            if (s>4) {
                s=0;
            };
            for (var b = 0; b < lunbotuRightUlLi.length; b++) {
                lunbotuRightUlLi[b].style.zIndex="0";
                lunbotuRightUlLi[b].style.opacity="0";
                lunbotuRightUlLi[b].className="";
            };
            lunbotuRightUlLi[s].className="lunbotuRightChange";
            s++;
        }
        timer=setInterval(timerInter, 4000)
        var lunbotuRightPoint=document.getElementById('lunbotuRightPoint');
        var lunbotuPointSpan=lunbotuRightPoint.children;
        var timerA=null;
        for (var i = 0; i < lunbotuPointSpan.length; i++) {
            lunbotuPointSpan[i].index=i;
            lunbotuPointSpan[i].onclick=function(){
                var z=this.index;
                clearInterval(timer);
                clearInterval(timerA);
                for (var x = 0; x < lunbotuRightUlLi.length; x++) {
                    lunbotuRightUlLi[x].className="";
                    lunbotuRightUlLi[x].style.zIndex="0";
                    lunbotuRightUlLi[x].style.opacity="0";
                };
                lunbotuRightUlLi[z].style.zIndex="99";
                lunbotuRightUlLi[z].style.opacity="1";
                var s=z;
                timerA=setInterval(timerInter,4000);
            }
        };
    })();

            //获取轮播小点点
    var dian = document.getElementsByClassName('cycle-pager')[0].children;
    //获取五张图片
    var tu = document.getElementsByClassName('cycle-slide');
    //轮播定时器
    var i = 0;
    function time_Interval(){
        for(var j=0;j<dian.length;j++){
            dian[j].className = "";
            tu[j].style.opacity = '0';
            tu[j].style.zIndex = '0';
        }
        if(i==4){
            i = 0;
        }else{
            i++;
        }
        dian[i].className = "cycle-pager-active";
        tu[i].style.opacity = "1";
        tu[i].style.zIndex = '100';
    }
    var time = setInterval(time_Interval,4000);
    //点击小点点换图
    for(var j=0;j<dian.length;j++){
        dian[j].index = j;
        dian[j].onclick = function(){
            clearInterval(time);
            for(var j=0;j<dian.length;j++){
                dian[j].className = "";
                tu[j].style.opacity = '0';
                tu[j].style.zIndex = '0';
            }
            this.className = "cycle-pager-active";
            tu[this.index].style.opacity = '1';
            tu[this.index].style.zIndex = '100';
            i=this.index;
            time = setInterval(time_Interval,4000);
        }
    }
    
}