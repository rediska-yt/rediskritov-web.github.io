$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 250) 
			$(".navbar").addClass("stycky");
		else
			$(".navbar").removeClass("stycky");
	});
});
