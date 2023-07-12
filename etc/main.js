// gsap.registerPlugin(ScrollTrigger);
let tl1 = gsap.timeline();

tl1
	.to(".cloud1", {
		// delay: 0.5,
		scale: 1.5,
		duration: 1.5,
		opacity: 0,
		xPercent: 200,
	})
	.to(
		".cloud3",
		{
			scale: 2,
			duration: 1.5,
			opacity: 0,
			xPercent: -100,
		},
		"<" // 이전 동작이랑 똑같이 동작
	)
	.to(
		".sun",
		{
			scale: 1.1,
			duration: 1,
			opacity: 0.5,
			xPercent: -600,
			yPercent: 300,
		},
		"<"
	);

// .to(
// 	".section1",
// 	{
// 		backgroundColor: orangered,
// 		duration: 2,
// 	},
// 	"<"
// );

ScrollTrigger.create({
	animation: tl1,
	trigger: ".section1",
	start: "top top",
	end: "bottom 100%",
	end: "+=3000",
	scrub: 2,
	markers: true,
	pin: true, // 해당 타임라인에 대해서 스크롤을 움직여도 고정시키도록 하는 속성
});
