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
}*/

$(function() {
    $('.banner').unslider({
		fluid: true,
		dots: true,
		speed: 500
	});
});

