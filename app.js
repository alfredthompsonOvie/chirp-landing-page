"use strict";
console.log("connected");

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
function menuNavigation() {
	const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');
const navBar = document.querySelector('.nav-bar');

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', hideMenu);

function displayMenu() {
 openMenu.classList.add('is-hidden');
 closeMenu.classList.remove('is-hidden');
 navBar.classList.remove('is-hidden');
}
function hideMenu() {
 closeMenu.classList.add('is-hidden');
 navBar.classList.add('is-hidden');
 openMenu.classList.remove('is-hidden');
}
}
menuNavigation();
// !==================================



function init() {
	gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	defaults: {
		duration: 1.5,
		ease: "sine",
	},
});
tl.from("container", {
	opacity: 0,
})
	.from("header", {
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
			// markers: true,
		},
	})
	.from(".features", {
		opacity: 0.5,
		y: 20,
		scrollTrigger: {
			trigger: ".features",
			// start: "top center",
			// end: "bottom bottom",
			scrub: true,
			toggleActions: "play none none reverse",
			// markers: true,
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
			// markers: true,
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
				// markers: true,
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
				// markers: true,
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
				// markers: true,
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
				// markers: true,
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
			// markers: true,
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
			// markers: true,
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
			// markers: true,
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
			// markers: true,
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
			// markers: true,
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
			// markers: true,
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
			// markers: true,
		},
	})
	.from(".pricing-card *", {
		opacity: 0,
		y: 20,
		stagger: 0.5,
		scrollTrigger: {
			trigger: ".pricing-card",
			start: "top bottom-=350",
			end: "center bottom-=350",
			scrub: true,
			toggleActions: "play none none reverse",
			// markers: true,
		},
	});
}

window.addEventListener("load", function () {
	init();
});
