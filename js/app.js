$(document).ready(function() {
	//var inAninmation = 7;
	$("#btn-curse").click(function(){
			var curse = $('#curse-counter');
			curse.animate({
				top: '-=20px',
				opacity: '0'
			}, 'fast');
			curse.animate({
				top: '+=40px'
			}, 0, function() {
				var count = parseInt($('#curse-counter').text());
				curse.text(count + 1);
			});
			curse.animate({
				top: '-=20px',
				opacity: '1'
			}, 'fast');
		//}
	});
	
	$("#btn-android").click(function() {
		$('#tab-android').siblings().removeClass('active');
		$('#tab-android').addClass('active');
	});
});