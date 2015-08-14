var barChartData = {
	labels : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
	datasets : [
		{
			fillColor : "#f88f26",
			strokeColor : "#f88f26",
			data : [30000, 31000, 32000, 40000, 50000, 55000, 70000, 60000, 72000, 80000, 90000, 120000, 140000, 150000, 240000]
		}
	]
};

/*window.onload = function(){
	var elm = document.getElementById("chart_1");
	var ctx = elm.getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true
	});
}

$(function() {
    $('.banner').unslider({
		fluid: true,
		dots: true,
		speed: 500
	});
});*/

$(document).ready(function(){
	$('.carousel.fullscreen').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [{
            breakpoint: 500,
            settings: {
                arrows: false
            }
        }]
	});
	
	$('.carousel.multiple').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
        speed: 600,
        responsive: [{
            breakpoint: 1136,
            settings: {
                arrows: true,
                autoplay: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 500,
            settings: 'unslick'
        }]
	});

	$( "#menu_toggler" ).click(function() {
		var menu = $("#header .menu");
		if(menu.hasClass("shown")) {
			menu.removeClass("shown");
			menu.addClass("hidden");
			menu.slideUp();
		} else {
			menu.removeClass("hidden");
			menu.addClass("shown");
			menu.slideDown();
		}
	});
});

