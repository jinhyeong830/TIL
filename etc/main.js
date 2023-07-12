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
  end: "+=3000", // 스크롤의 길이를 설정해주는 것
  scrub: 2,
  markers: true,
  pin: true, // 해당 타임라인에 대해서 스크롤을 움직여도 고정시키도록 하는 속성
});

// animation을 적용할 요소가 하나밖에 없기 때문에 slide 안에 설정해줘도 됨
let slide2 = gsap.timeline();
slide2.from(".section2 div", {
  scrollTrigger: {
    animation: slide2,
    trigger: ".section2",
    start: "top top",
    end: "bottom 100%",
    end: "+=3000", // 스크롤의 길이를 설정해주는 것
    scrub: 2,
    markers: true,
    pin: true,
  },
  rotate: 720,
  opacity: 0,
  scale: 0,
});
