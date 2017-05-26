window.onload = function(){
	var page = document.getElementById('page');
	var page_num = page.children[0];
	var one = page_num.children[1];
	var two = page_num.children[2];
	var three = page_num.children[3];
	var four = page_num.children[4];

	var Two_page = document.getElementById('Two_page');
	var One_page = document.getElementById('One_page');
    var Three_page = document.getElementById('Three_page');
    var Four_page = document.getElementById('Four_page');

	console.log(Two_page);
	console.log(two);
	console.log(one);


	two.onclick = function(){
         Two_page.style.display = 'block';
         One_page.style.display = 'none';
         Three_page.style.display='none';
         Four_page.style.display='none';
	}
	one.onclick = function(){
         Two_page.style.display = 'none';
         One_page.style.display = 'block';
         Three_page.style.display='none';
          Four_page.style.display='none';

	}
	three.onclick = function(){
         Two_page.style.display = 'none';
         One_page.style.display = 'none';
         Three_page.style.display='block';
          Four_page.style.display='none';
         
	}
	four.onclick = function(){
         Two_page.style.display = 'none';
         One_page.style.display = 'none';
         Three_page.style.display='none';
          Four_page.style.display='block';
         
	}

}