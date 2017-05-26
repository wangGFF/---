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