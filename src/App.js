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

	//my own swiper
	//DOM elements
	const $careerArticles = document.querySelectorAll('.career-article')
	const $careerPrevBtn = document.querySelector('.career__btn_prev')
	const $careerNextBtn = document.querySelector('.career__btn_next')


	let articleToShow = 1;
	const currentArticle = (articleToShow) => {
		$careerArticles.forEach(element => {
			if(parseInt(element.dataset.id) === articleToShow) {
				element.classList.remove('hide')
			} else {
				element.classList.add('hide')
			}
		})
	}

	$careerPrevBtn.addEventListener('click',function (e) {
		if(articleToShow - 1 === 0) {
			articleToShow = $careerArticles.length;
		} else if (articleToShow - 1 <= $careerArticles.length) {
			articleToShow --
		}
		currentArticle(articleToShow);
	})

	$careerNextBtn.addEventListener('click',function (e) {
		if(articleToShow + 1 > $careerArticles.length) {
			articleToShow = 1;
		} else if (articleToShow + 1 <= $careerArticles.length) {
			articleToShow ++
		}
		currentArticle(articleToShow);
	})
	//current article




})