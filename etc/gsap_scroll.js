/** @format */
// 스크롤 해야함....
gsap.registerPlugin(ScrollTrigger);
gsap.to('.box', {
  scrollTrigger: '.box',
  x: 500,
  duration: 2,
});

// gsap으로 만 페이직 ㅜ성해도 디지만..
