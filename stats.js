var Stats = (function() {
	var self = {};

	self.clicks = 0;
	self.resets = 0;
	
	self.render = function() {
		_(self)
			.keys()
			.filter(function(key) {
				return key != "render" && key != "resize";
			})
			.each(function(key, i) {
				$('#stats .' + key).text(self[key]);
			})
			.value();

		self.resize();
		Timer.resize();
	}

	self.resize = function() {
		if ($(window).width() < 400) {
			$('#stats').addClass('small');
		}
		$('#stats')
			.removeClass('small')
			.css('left', ($('#chart').offset().left))
			.css('top', Chart.margins.top);
	}

	return self;
}());