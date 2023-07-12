/** @format */
// 플러그인 사용 전 스크롤 트리거 사용하기
// scrollTrigger 하나의 애니메이션 내부에 두는 방법
gsap.from(".box", {
	scrollTrigger: {
		trigger: ".box",
		// 앞: 요소 기준, 뒤: 브라우저 기준 start
		start: "top 80%",
		end: "100% 50%",
		scrub: 1, // 숫자가 커지면 더 매끄러워짐, 되돌아가는 기능
		//false 일 때는 첫번째 스크롤 할 때만 애니메이션 동작
		markers: true,
		// pin: true,
	},
	y: 800, //시작 위치가 top 800px인 것
	opacity: 0,
});

// 서로 다른 애니메이션..
gsap.to(".box2", {
	scrollTrigger: {
		trigger: ".box2",
		start: "top top",
		// end: "bottom 50%",
		scrub: 1,
		// markers: true,
	},
	rotate: 720,
	x: 500,
});

// 하나의 타임라인에 gsap을 사용하기 위해선
// gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.to(".circle1", {
	scrollTrigger: ".container",
	start: "top top",
	end: "bottom bottom",
	markers: true,
});
// gsap.to(".box", {
// 	scrollTrigger: ".box",
// 	x: 500,
// 	duration: 2,
// });

// gsap으로 만 페이직 ㅜ성해도 디지만..
// let tl = gsap.timeline({
// 	// 전체 타임라인에 스크롤 트리거 추가
// 	scrollTrigger: {
// 		trigger: ".container",
// 		pin: true, // pin the trigger element while active
// 		start: "top top", // when the top of the trigger hits the top of the viewport
// 		end: "+=500", // end after scrolling 500px beyond the start
// 		scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// 		// snap: {
// 		// 	snapTo: "labels", // snap to the closest label in the timeline
// 		// 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
// 		// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
// 		// 	ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
// 		// },
// 	},
// });

// // add animations and labels to the timeline
// tl.addLabel("start")
// 	.from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
// 	.addLabel("color")
// 	.from(".box", { backgroundColor: "#28a92b" })
// 	.addLabel("spin")
// 	.to(".box", { rotation: 360 })
// 	.addLabel("end");
