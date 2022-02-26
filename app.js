"use strict";
function init() {
	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline({
		defaults: {
			duration: 1.5,
			ease: "sine",
		},
	});

	tl.from("header", {
		opacity: 0,
		y: -20,
	})
		.from(".main-section", {
			opacity: 0,
			y: 20,
		})
		.from(".main-section *", {
			opacity: 0,
			y: 20,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".main-section",
				start: "top bottom-=350",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".features", {
			opacity: 0.5,
			y: 20,
			scrollTrigger: {
				trigger: ".features",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".features-title", {
			opacity: 0,
			x: -70,
			scrollTrigger: {
				trigger: ".features",
				start: "top bottom-=250",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(
			".animeCard-one",
			{
				opacity: 0,
				x: -50,
				scrollTrigger: {
					trigger: ".animeCard-one",
					start: "top bottom-=250",
					end: "bottom bottom-=250",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			},
			"card-one"
		)
		.from(
			".animeCard-two",
			{
				opacity: 0,
				x: 50,
				scrollTrigger: {
					trigger: ".animeCard-two",
					start: "top bottom-=250",
					end: "bottom bottom-=250",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			},
			"card-one"
		)
		.from(
			".animeCard-three",
			{
				opacity: 0,
				x: -20,
				scrollTrigger: {
					trigger: ".animeCard-three",
					start: "top bottom-=250",
					end: "bottom bottom-=250",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			},
			"card-three"
		)
		.from(
			".animeCard-four",
			{
				opacity: 0,
				x: 20,
				scrollTrigger: {
					trigger: ".animeCard-four",
					start: "top bottom-=250",
					end: "bottom bottom-=250",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			},
			"card-three"
		)
		.from(".testimonials", {
			opacity: 0,
			y: 20,
			scrollTrigger: {
				trigger: ".testimonials",
				start: "top bottom-=250",
				end: "top center",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".testimonials h1", {
			opacity: 0,
			y: -50,
			scrollTrigger: {
				trigger: ".testimonials",
				start: "top bottom-=250",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".testimonials .profile-card-one", {
			opacity: 0,
			y: -40,
			scrollTrigger: {
				trigger: ".profile-card-one",
				start: "top bottom-=250",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".testimonials .profile-card-two", {
			opacity: 0,
			y: -40,
			scrollTrigger: {
				trigger: ".profile-card-two",
				start: "top bottom-=250",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".testimonials .profile-card-three", {
			opacity: 0,
			y: -40,
			scrollTrigger: {
				trigger: ".profile-card-three",
				start: "top bottom-=250",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".pricing-heading", {
			opacity: 0,
			y: 40,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".pricing-heading",
				start: "top bottom-=350",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".pricing-card", {
			opacity: 0,
			y: 40,
			scrollTrigger: {
				trigger: ".pricing h1",
				start: "top bottom-=350",
				end: "top center-=150",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		})
		.from(".pricing-card *", {
			opacity: 0,
			y: 20,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".pricing-card",
				start: "top bottom-=350",
				end: "center bottom-=280",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		});
}
document.onload = init();

function slideShow() {
	const cards = document.querySelectorAll(".testimonial-card");
	const slider = document.querySelector(".slider");

	let count = 0;
	let maxSlide = cards.length;
	for (let i = 0; i < maxSlide; i++) {
		if (i === maxSlide - 1) {
			count = 0;
		}
		count += 100;
		cards.forEach((c, i) => {
			c.style.transform = `translateX(100 ${count * i}%)`;
		});
	}
}
slideShow();

const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const navBar = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", displayMenu);
closeMenu.addEventListener("click", hideMenu);

function displayMenu() {
	openMenu.classList.add("is-hidden");
	closeMenu.classList.remove("is-hidden");
	navBar.classList.remove("is-hidden");
	overlay.classList.remove("is-hidden");

	const tl = gsap.timeline();
	tl.fromTo(".overlay", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 })
		.fromTo(
			".nav-bar",
			{ xPercent: -100, opacity: 0 },
			{ xPercent: 0, opacity: 1}
		)
		.fromTo(
			".nav-bar li",
			{ x: -50, opacity: 0 },
			{ x: 0, opacity: 1, stagger: .3}
		);
}
function hideMenu() {
	const tl = gsap.timeline({
		onComplete: () => {
			closeMenu.classList.add("is-hidden");
			navBar.classList.add("is-hidden");
			overlay.classList.add("is-hidden");
			openMenu.classList.remove("is-hidden");
		},
	});
	tl.to(".nav-bar li", { x: -20, opacity: 0 })
		.to(".nav-bar", { xPercent: -100, opacity: 0 })
		.to(".overlay", { xPercent: -100, opacity: 0 });
}