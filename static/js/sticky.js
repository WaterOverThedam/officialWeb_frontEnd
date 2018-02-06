$(document).ready(function () { //本人习惯这样写了
	//var sticky = document.querySelector('.sticky');  
	var sticky =$(".sticky");
	var origOffsetY = sticky.offset().top;  
	
	  
	function stickyHeader(e) {  
       // window.scrollY >= origOffsetY ? sticky.classList.add('fixed'):sticky.classList.remove('fixed');  
		var point = window.scrollY||pageYOffset;
		point >= origOffsetY? sticky.addClass("fixed"):sticky.removeClass("fixed")
	}  
	$(window).scroll(function() {
       stickyHeader();
    });
	  
  
});