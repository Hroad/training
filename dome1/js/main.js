$(function(){
	$(".meun-btn").click(function(){
		$(this).toggleClass("nav-btn");
		$(".left-aside").toggleClass("left-asides");
		$(".left-aside").fadeToggle()();

	});
});
