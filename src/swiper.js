var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 10,
	breakpoints: {
		// when window width is >= 320px
		600: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is >= 480px
		960: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		// when window width is >= 640px
		1280: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.portfolio__swiper-btn_next',
		prevEl: '.portfolio__swiper-btn_prev',
	},
});