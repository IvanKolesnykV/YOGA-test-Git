//hamburger button
$('.nav-click').click(function() {
	$('#header .nav ul').toggleClass('open');
	$('.span-rotate-top').toggleClass('open-span');
	$('.span-opacity').toggleClass('open-span-span');
	$('.span-rotate-botton').toggleClass('open-span-span-span');
});

//fixet header when scrolling
var header = $('#header');
var heightHeader = $('#header').outerHeight(true);

window.onscroll = function(){
if (window.pageYOffset==0){
$('#header').css({
        left: 0,
        right: 0,
        top: 0,
        position: 'relative'
    });
$('#slider').css({"margin-top" : "0"});
} else{
$('#header').css({
        left: 0,
        right: 0,
        top: 0,
        position: 'fixed'
    });
$('#slider').css({"margin-top" : heightHeader + "px"});
}
};

//carusel
