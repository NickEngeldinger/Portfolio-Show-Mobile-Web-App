$(function() {

	var xAdd = 0;
	var scrollInterval = setInterval(function(){
		var xAddNew = xAdd++ *190;
		if(xAddNew >= 1140){
			xAdd = 0;
		}
		$(".campus").css("background-position","0 -" + xAddNew + "px");
	}, 3000);
});
