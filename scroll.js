window.onload = function (){
	var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var last = document.getElementById("last");
    var next = document.getElementById("next"); 
    var left = document.getElementById("left");
    var index = 1;
    var timer;


    function reLocate(location) {
    	var newLeft = parseInt(list.style.left) + location;
    	list.style.left = newLeft + "px";

        if (newLeft > -600){
        setTimeout(function(){
            list.style.transition="none";//禁用动画效果
            list.style.left=-3600+"px";
            
        },500) 
        }
        if (newLeft < -3600){
        setTimeout(function(){
            list.style.transition="none";
            list.style.left=-600+"px";
            
        },500) 
        }
        setTimeout(function(){
            list.style.transition="left 0.5s ease 0s";
            
        },600) 
        //list.style.transition="left 0.5s ease 0s";
 //恢复动画效果


    }

    function play() {

    	timer = setInterval(function(){
    		next.onclick();
    	},2000)
    }

    function stop() {
    	clearInterval(timer);
    }

    function buttonsShow(){
    	for (var i = 0; i < buttons.length; i++){
    		if(buttons[i].className == "on"){
    			buttons[i].className = "";
    		}
    	}
    	buttons[index - 1].className = "on";
    }

    last.onclick = function(){
        document.getElementById(index).style.border="";
    	index -= 1;
    	if(index<1){
    		index=6
    	}
        document.getElementById(index).style.border="1px solid #f00";
    	buttonsShow();
    	reLocate(600);

    }

    next.onclick=function(){
        document.getElementById(index).style.border="";
    	index += 1;
    	if (index > 6) {
    		index = 1
    	}
        document.getElementById(index).style.border="1px solid #f00";
    	reLocate(-600);
    	buttonsShow();
    }

    for(var i =0; i < buttons.length; i++){
    	(function(i){
    		buttons[i].onclick = function(){
                document.getElementById(index).style.border="";
    			var clickIndex = parseInt(this.getAttribute("index"));
                document.getElementById(clickIndex).style.border="1px solid #f00";
    			var location = 600 * (index-clickIndex);
                list.style.transition="none";
                
    			reLocate(location);
              
    			index = clickIndex;
    			buttonsShow();
    		}
    	})(i)
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();

    for(var i=1; i < buttons.length+1;i++){
        (function(i){

        buttons[i-1].onmouseover = function(){
        document.getElementsByClassName(i)[0].style.visibility="visible";  
        }
        buttons[i-1].onmouseout = function(){
        document.getElementsByClassName(i)[0].style.visibility="hidden";  
        }
    })(i);
    }



}