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

function drawPHChart() {
	var elm = document.getElementById('chart_div');
	var styles = window.getComputedStyle(elm.parentNode);
	var width = parseInt(styles.width.replace('px', ''));
	console.log('width', width);

	data = new google.visualization.DataTable();
	data.addColumn('string', 'rok');
	data.addColumn('number', 'hodín/rok');
	data.addRows([
			['2001', 30000],
			['2003', 59000],
			['2005', 64000],
			['2007', 89000],
			['2009', 136000],
			['2011', 173000],
			['2013', 187000],
			['2015', 240000],
		]);
	var options = {
		colors: ['#f68f36'] ,
		width: width * 0.8,
		orientation: orientation,
		vAxis: {
		    /*gridlines: {
		        color: 'transparent'
		    },
		    textPosition: 'none',*/
		    ticks: [{v: 30000, f: '30 000 hodín/rok'}, {v: 240000, f: '240 000 hodín/rok'}]
		},
		legend: {position: 'none'},
	};
	if(width < 500) {
		var orientation = 'vertical';
		var options = {
			colors: ['#f68f36'] ,
			width: width,
			orientation: orientation,
			vAxis: {
			    /*gridlines: {
			        color: 'transparent'
			    },
			    textPosition: 'none',*/
			    ticks: [{v: 30000, f: '30 000 hodín/rok'}, {v: 240000, f: '240 000 hodín/rok'}]
			},
			legend: {position: 'none'},
		};
	} else {
		var orientation = 'horizontal';
	}
	chart = new google.visualization.ColumnChart(elm);
	chart.draw(data, options);
}

function drawECChart() {
	var elm = document.getElementById('chart_div2');
	var styles = window.getComputedStyle(elm.parentNode);
	var width = parseInt(styles.width.replace('px', ''));
	console.log('width', width);

	data = new google.visualization.DataTable();
	data.addColumn('string', 'rok');
	data.addColumn('number', 'hodín/rok');
	data.addRows([
			['2001', 26],
			['2003', 49],
			['2005', 89],
			['2007', 140],
			['2009', 161],
			['2011', 178],
			['2013', 192],
			['2015', 326]
		]);
	var options = {
		colors: ['#f68f36'] ,
		width: width * 0.8,
		orientation: orientation,
		vAxis: {
		    /*gridlines: {
		        color: 'transparent'
		    },
		    textPosition: 'none',*/
		    ticks: [{v: 26, f: '26 zamestnancov'}, {v: 326, f: '326 zamestnancov'}]
		},
		legend: {position: 'none'},
	};
	if(width < 500) {
		var orientation = 'vertical';
		var options = {
			colors: ['#f68f36'] ,
			width: width,
			orientation: orientation,
			vAxis: {
			    /*gridlines: {
			        color: 'transparent'
			    },
			    textPosition: 'none',*/
			    ticks: [{v: 30000, f: '30 000 hodín/rok'}, {v: 240000, f: '240 000 hodín/rok'}]
			},
			legend: {position: 'none'},
		};
	} else {
		var orientation = 'horizontal';
	}
	chart = new google.visualization.ColumnChart(elm);
	chart.draw(data, options);
}



