$(document).ready(function () { 
	//var sticky = document.querySelector('.sticky');  
	var sticky =$(".sticky");
	var origOffsetY = sticky.offset().top;  
	
	  
	function stickyHeader(e) { 
	//js
	    //var point = window.scrollY||pageYOffset; 
        // window.scrollY >= origOffsetY ? sticky.classList.add('fixed'):sticky.classList.remove('fixed');  
	//使用jq
		var point = $(window).scrollTop()
		point >= origOffsetY? sticky.addClass("fixed"):sticky.removeClass("fixed")
	}  
	$(window).scroll(function() {
       stickyHeader();
    });
	  
  
});