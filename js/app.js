
function animateLogo() {
	TweenMax.fromTo('#logo', 2, {
		css: {
			y: '-20px',
		}
	}, {
		css: {
			y: '20px',
		},
		repeat: -1,
		yoyo: true,
		ease: Power2.easeInOut,
	});			
};

function animateRobot() {
	var t = new TimelineMax({repeat: -1});
	t.to('#android-robot', 1, {rotation: '-45deg'})
	.to('#android-robot', 1, {rotation: '-60deg'})
	.to('#android-robot', 2, {rotation: '-30deg'})
	.to('#android-robot', 1, {rotation: '-45deg'});
}

function updateSliderControl() {
	var links = document.querySelectorAll('#slider-control a');

	for(var i = 0; i < links.length; i++) {
		var link = links[i];

		var section = document.querySelector(link.getAttribute('href'));
		var sectionTop = section.offsetTop;
		var sectionBottom = sectionTop + section.offsetHeight;

		if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			link.className = 'active';
		} else {
			link.className = '';
		}
	}
}

function scrollToElement(element) {
	var topOfElement = element.offsetTop;
	TweenMax.to(window,1,{
		scrollTo: {
			y: topOfElement,
		},
		ease: Power2.easeInOut,
	});
}

function addSmoothScrolling() {
	var links = document.querySelectorAll('#slider-control a');

	for(var i = 0; i < links.length; i++) {
		if(typeof window.addEventListener === 'function') {
			(function (link) {
				link.addEventListener('click', function(event){
					event.preventDefault();
					var href = link.getAttribute('href');
					var section = document.querySelector(href);
					scrollToElement(section);
				});
			})(links[i]);
		}
	}
}

window.onscroll = function() {
	updateSliderControl();
}

window.onload = function() {
	animateLogo();
	animateRobot();
	updateSliderControl();
	addSmoothScrolling();
};