window.onload = function(){
	// var page = document.getElementById('page');
	// var page_num = page.children[0];
	// var one = page_num.children[1];
	// var two = page_num.children[2];
	// var three = page_num.children[3];
	// var four = page_num.children[4];
 //    var prev = page_num.children[0];
 //    var next = page_num.children[5];
	var Two_page = document.getElementById('Two_page');
	var One_page = document.getElementById('One_page');
    var Three_page = document.getElementById('Three_page');
    var Four_page = document.getElementById('Four_page');

        var content_pages=document.getElementsByClassName('content_page');
        var num = document.getElementsByClassName('num');
        // var z = 0;
        for (var i = 0; i < num.length; i++) {
        	num[i].index = i;
        	// console.log(i)
        	num[i].onclick = function(){
        		var x=this.index;
        		console.log(x)
             if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
             }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
             }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
             }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
             }
             var prev = document.getElementsByClassName('prev');
             var next = document.getElementsByClassName('next');
             next[0].onclick = function(){
             	x++;
             	if (x>=3) {
             		x=3;
             		console.log(x)
             	}
             	if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
                }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
                }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
                }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
                }
             }
             prev[0].onclick = function(){
             	x--;
             	if (x<=0) {
             		x=0;
             	}
                if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
                }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
                }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
                }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
                }
             	
             }
        	}

        }


}