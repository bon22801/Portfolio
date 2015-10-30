(function() {
	$(document).ready(function(){
		$('.nav-links li a').mouseenter(function () {
			$(this).velocity({ color: '#FA8072' }, 300, 'ease-in');
		});
		$('.nav-links li a').mouseout(function () {
			$(this).velocity({ color: '#FFFFFF' }, 300, 'ease-in');
		});		

	
	});
})();