$(function(){
	$(".menu").click(function(){
		$(this).toggleClass("menu-btn");
		$(".nav ul").slideToggle(1000);
	});
});