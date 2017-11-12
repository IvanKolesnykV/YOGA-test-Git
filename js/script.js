//hamburger button
$('.nav-click').click(function() {
	$('#header .nav ul').toggleClass('open');
	$('.span-rotate-top').toggleClass('open-span');
	$('.span-opacity').toggleClass('open-span-span');
	$('.span-rotate-botton').toggleClass('open-span-span-span');
});