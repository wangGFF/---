window.onload = function (){
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
	//所有评论数据
 	var criticism_json = [
 	'是不是正的啊，表示疑惑啊',
 	'国家有时候政策是很好，可是我们这些人都无福消受。没有做到位。我们只能在家等。漫无目的的生活。过着混日子的生活。中国就是闲人太多。因为没有挣钱的渠道。没有可以带领人们富裕的人。这个学校学的东西我看还行。如果属实值得去学。你们没有去学过就能代表。谁信呀。',
 	'我也想报名，我也是想学的，就是你们不是专业人士，我们想学习的不太相信你们。你们要是穿透好了把我们学习生欺骗了杂办',
 	'张志军辅导员是在你们学校吗？那是我的大学同学，我家是呼伦贝尔的，我可以替你们招生吗？！你们是否有大数据专业呀？！我的电话是13030415366'
 	];
	//获取到用于存放评论的ul
 	var criticism_ul = document.getElementById('ul');	
 	//获取到多行文本输入框(就是用户输入评论的那个框)
 	var Muitos_text = document.getElementById('pintluncontent');	
 	//获取到发表按钮
 	var publish = document.getElementById('btn_pinglun');	
 	//该函数作用：通过criticism_json动态创建评论
 	function Trends_create(){
 		//数据为空时什么也不做，数据不为空才创建
   		if(criticism_json.length!=0){
   			//数组不为空就遍历数组，创建每一条评论内容
   			for(var i=criticism_json.length-1;i>=0;i--){
   				//创建li用于存放每一条评论
   				var li = document.createElement('li');
   				li.innerText = criticism_json[i];
   				criticism_ul.insertBefore(li,criticism_ul.firstChild);
   				//如果是第一条评论；有下边框
   				if(i==criticism_json.length-1){
   					li.className = "bottom";
   				}
   			}
   		}else{
   			//数组为空什么也不做
   			return false;
   		}
 	}
 	Trends_create(); 	
 	//发表评论
 	publish.onclick = function(){
 		content = Muitos_text.value;
 		 Muitos_text.value = "";
 		criticism_json.unshift(content);
 		alert("评论成功!");
 		criticism_ul.innerHTML = '';
 		Trends_create();
 	}
}