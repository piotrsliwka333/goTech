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
			$nav.classList.toggle('nav-active');
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

	// slider in career section
	//DOM elements
	const $careerArticles = document.querySelectorAll('.career-article')
	const $careerPrevBtn = document.querySelector('.career__btn_prev')
	const $careerNextBtn = document.querySelector('.career__btn_next')

	let articleToShow = 1;
	const currentArticle = (articleToShow) => {
		$careerArticles.forEach(element => {
			if (parseInt(element.dataset.id) === articleToShow) {
				element.classList.remove('hide')
			} else {
				element.classList.add('hide')
			}
		})
	}

	$careerPrevBtn.addEventListener('click', function (e) {
		if (articleToShow - 1 === 0) {
			articleToShow = $careerArticles.length;
		} else if (articleToShow - 1 <= $careerArticles.length) {
			articleToShow--
		}
		currentArticle(articleToShow);
	})

	$careerNextBtn.addEventListener('click', function (e) {
		if (articleToShow + 1 > $careerArticles.length) {
			articleToShow = 1;
		} else if (articleToShow + 1 <= $careerArticles.length) {
			articleToShow++
		}
		currentArticle(articleToShow);
	})

	//contact form
	const $form = document.querySelector('.contact-form')
	const $formName = document.querySelector('#first-name')
	const $formSurname = document.querySelector('#last-name')
	const $formEmail = document.querySelector('#email')
	const $formSelect = document.querySelector('#problem')
	const $formMessage = document.querySelector('#message')
	const $formErrors = document.querySelectorAll('.error')

	// regular expresion validation for email
	function validateEmail(email) {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	}

	//sent form
	$form.addEventListener('submit', function (e) {
		e.preventDefault(); //default behaviour of form is refresh the site.
		const errorsArray = [];
		$formErrors.forEach(element => {
			element.classList.add('hide')
		})
		if ($formName.value.length < 1) {
			document.querySelector('.name-error').classList.remove('hide');
			errorsArray.push('name-error')
		}
		if ($formSurname.value.length < 2) {
			document.querySelector('.surname-error').classList.remove('hide');
			errorsArray.push('surname-error')
		}
		if (!validateEmail($formEmail.value)) {
			document.querySelector('.email-error').classList.remove('hide');
			errorsArray.push('email-error')
		}
		if (!$formSelect.value) {
			document.querySelector('.problem-error').classList.remove('hide');
			errorsArray.push('problem-error')
		}
		if ($formMessage.value.length < 120) {
			document.querySelector('.message-error').classList.remove('hide')
			errorsArray.push('message-error')
		}
		if (errorsArray.length === 0) {
			// I'll use API from my boot camp course
			// this api demand only name,email,message
			const API = 'https://fer-api.coderslab.pl/v1/exam5/contact';
			const dataToSent = {
				name: $formName.value,
				email: $formEmail.value,
				message: $formMessage.value
			}
			fetch(API, {
				method: 'POST',
				body: JSON.stringify(dataToSent),
				headers: {
					'Content-type': 'application/json'
				}
			}).then(response => response.json()).then(data => console.log(data)).catch(e => console.log(e))
			$form.reset();
		}
	})
})