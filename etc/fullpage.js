const slide = gsap.timeline();
slide
	.from(".ygreen", {
		xPercent: -100,
	})
	.from(".hotpink", {
		yPercent: 100,
	})
	.from(".gold", {
		xPercent: 100,
	});

ScrollTrigger.create({
	animation: slide,
	trigger: "main",
	pin: true,
	markers: true,
	scrub: 1,
	start: "top top",
	end: "+=4000",
	// end: "+=5000",
});
