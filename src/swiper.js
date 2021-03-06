var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 10,
	loop: true,
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

var newSwiper = new Swiper('.swiper-container2', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 10,
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		600: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 480px
		960: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 640px
		1280: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.career__swiper-btn_next',
		prevEl: '.career__swiper-btn_prev',
	},
});