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

        var num=Math.floor(allComment.children.length/5+1)
        // console.log(Math.floor(allComment.children.length/5+1));
        for(var i=0;i<num;i++){
        	page.innerHTML="";
	        if(allComment.children.length%5==0){
	            var pageLi=document.createElement("li");
	            page.appendChild(pageLi);
	            pageLi.innerHTML=num+1; 
	        } 
	        // console.log(page.innerHTML)
	    }
        // pageUp.onclick=function(){
        // 	if(page.innerHTML==""){
        		
        // 	}
        // }

	}

// 轮播
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
}

