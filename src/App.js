document.addEventListener('DOMContentLoaded', function () {
	//DOM elements
	const $menuToggle = document.querySelector('#menu-toggle')
	const $nav = document.querySelector('.nav')
	const $body = document.querySelector('body')
	const $navLinks = document.querySelectorAll('.nav-list__link')
	const $header = document.querySelector('.header')

	//fn which add show or hide mobile nav
	$menuToggle.addEventListener('click', function (e) {
		e.preventDefault();
		$body.classList.toggle('open-mobile-navigation')
		$nav.classList.toggle('nav-active');
	})

	//fn which add class for active element in navigation
	$navLinks.forEach(element => {
		element.addEventListener('click', function (e) {
			e.preventDefault();
			$navLinks.forEach(element => element.classList.remove('active-link'));
			this.classList.add('active-link')
		})
	})

	window.addEventListener('scroll', function () {
		if (scrollY > 89) {
			$header.classList.add('scrolled-header')
		} else if ($header.classList.contains('scrolled-header')) {
			$header.classList.remove('scrolled-header')
		}
	})
})