(function ($j) {

	Share = Class.extend({
		
		settings: {
			container: '.js-social',		
			links: [
				{ cls: '.js-facebook', width: 626, height: 269 },
				{ cls: '.js-gplus', width: 626, height: 439 },		
				{ cls: '.js-linkedin', width: 626, height: 395 },
				{ cls: '.js-pinterest', width: 750, height: 368 },			
				{ cls: '.js-twitter', width: 626, height: 439 }
			],
		},
		
		init: function () {
			
			// Bind container and bail out if nothing found
			this.$container = $j(this.settings.container);
			if (this.$container.length < 1) return;
			
			// Loop over configured link data (see above)
			$j.each(this.settings.links, $j.proxy(this.initLink, this));
			
		},
		
		initLink: function (index, item) {
		
			this.$container.find(item.cls).on('click', $j.proxy(function (e) {
				e.preventDefault();
				var target = e.currentTarget,
				url = $(target).attr('href');
				this.openWindow(url, item.width, item.height);
			}, this));
			
		},
		
		openWindow: function (url, w, h) {
		
			var ww = $j(window).width(),
				wh = $j(window).height(),
				x = (ww / 2) - (w / 2),
				y = (wh / 2) - (h / 2);

			var shareWin = window.open('' + url + '', 'ShareWin', 'width=' + w + ',height=' + h + ',toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0,left=' + x + ',top=' + y);
			
			shareWin.focus();
			
		},

	});

	$j().ready(function () {
		var share = new Share();
	});

})(window.jQuery);