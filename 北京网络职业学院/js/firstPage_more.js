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