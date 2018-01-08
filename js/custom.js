$(function(){	
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		
		if( scrollTop > 0 ){
			$(".scroll-more-box").addClass("small").removeClass("full");
		}else{
			$(".scroll-more-box").removeClass("small").addClass("full");
		}
				
		scrollMore();
	});
	
	$(".ctajs").click(function(){
		var	href = $(this).attr("href"),
				scrollTop = $(href).offset().top;
		
		$('html, body').animate({
			scrollTop: scrollTop,
		}, 800, scrollMore());
		
		return false;
	});
	
	/**
	* 	FUNCTIONS DECLARATIONS
	**/
	
	function removeGoTopClass(){
		$(".scroll-more-box").removeClass("goTop");			
	}

	function scrollMore(){
		var scrollTop = $(document).scrollTop();
		var services = $("#services").offset().top - 1; // -1 is necessary due to next conditions
		var about = $("#about").offset().top -1;
		var contact = $("#contact").offset().top - 1;
		
		if( scrollTop < services ){
			$(".scroll-more").attr("href", "#services");
		} else if( scrollTop > services && scrollTop < about ){
			$(".scroll-more").attr("href", "#about");		
		} else if( scrollTop > about && scrollTop < contact ){
			$(".scroll-more").attr("href", "#contact") ;			
		}

		removeGoTopClass();
		
		if( scrollTop > contact ){
			$(".scroll-more").attr("href", "#home");			
			$(".scroll-more-box").addClass("goTop");			
		}
	}
});