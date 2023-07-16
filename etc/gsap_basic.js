/**
 * GSAP 애니메이션에 특화된 자바스크립트 라이브러리.
 * CSS로 애니메이션을 적용시킬 수 있지만 한계가 있고,
 * jquery등의 javascript라이브러리는 너무 무겁기 때문에
 * 복잡한 애니메이션을 구현하기 위해서는 다른 라이브러리를 사용하는게 좋음
 *
 * GSAP! -> 스크롤 기반 애니메이션 뿐만 아니라 다양한 애니메이션을 제공하지만, 스크롤 기반 애니메이션이 가장 널리 잘 쓰이고 있음
 *
 *
 * * *사용방법
 * - npm install gsap
 * - cdn : 스크롤 기반 쓸거니까
 *         ScrollTrigger.min.js
 *         처음엔 gsap.min.js
 * - 공식사이트에서 다운로드(?)
 *
 * @format
 */

// 시작하기
// 순서대로 target과 variables

// from으로 기본 속성 사용해보기
gsap.from(".circle1", {
	x: -500,
	duration: 3,
	backgroundColor: "green",
	yPercent: 100,
	rotation: 180,
	scale: 2,
	repeat: 3, //2회 추가한다
	yoyo: true, //왔다가게 하는 속성-repeat:3일 때는 왔다(1)갔다(2)왔다(3) 1.5번동작하는 것처럼 보이네
	//   repeatDelay: 3, // 반복 지연
	//   delay: 3, // 애니메이션의 시작점 지연
	ease: "none", //
	ease: "linear", //
	ease: "bounce.out", // 통통 튀김 -> animation-timing-function 기본 함수 외에도 미리 설정해둔 함수가 많음
	//.out 대신 .in .inOut이 올 수 있다
	ease: "power1.out",
});
// 참고 - fill 은 svg 속성에 추가하는 것

// Staggers : 요소가 여러 개 있을 떄!
// 순서대로 애니메이션이 적용되도록 함
let staggerAll = document.querySelectorAll(".stagger");
// 배열로 들어오지만 from 의 target으로는 배열이 와도 되므로
gsap.from(staggerAll, {
	ease: "elastic",
	duration: 3,
	fill: "blue",
	force3D: true,
	scale: 0.5,
	stagger: 0.5,
	repeat: -1, //-1이 infinite랑 같음
});

staggerAll.forEach((circle) => {
	circle.addEventListener("click", function () {
		gsap.to(".stagger", {
			//'.stagger'가 아닌 circle이었다면 하나에만 animation적용됨
			//   누를 때마다 뿅 사라지는 요소 만들 수 있음

			duration: 0.5,
			opacity: 0,
			y: -100,
			//   stagger: 0.5,
			// ease: 'back.in',
		});
	});
});

/* gsap timeline */
let tl = gsap.timeline();
// 연속적인 애니메이션을 만들기 위해서

// 1. 따로쓰기
/* tl.to('.red', {
  x: 300,
  duration: 2,
});

tl.to('.orange', {
  x: 500,
  duration: 3,
}); */
/* duration을 2, 3으로 썼음. 한 번에 동작하는게 아니라 같은 타임라인을 가지고 있는 동작은 위에 있는 동작부터 순서대로 동작함
red의 duration2 동작이 끝나고 나서 orange의 동작이 시작됨
붙여서 쓸 수도 있음 */
// 이렇게!
/* tl.to('.red', {
    x: 300,
    duration: 2,
  }).to('.orange', {
    x: 500,
    duration: 3,
  });
 */

//   같은 타임라인 내부에서 한 번에 동작하고 싶다면?
// 하나의 요소라도 타임라인을 이용해서 여러개의 애니메이션을 차례로 동작시킬 수 있음
tl.to(".red", {
	x: 320,
	duration: 2,
});
tl.to(
	".orange",
	{
		x: 240,
		duration: 3,
	},
	"<"
);
tl.to(
	".yellow",
	{
		x: 160,
		duration: 4,
	},
	"+=1"
);
/* to.. 세번째 매개변수 */
// # 1(숫자): 속성obj뒤에 숫자를 쓴다면 전체 타임라인에 대해서
//      ~ 초 뒤에 시작한다는 의미 (absolutely)
// # "<" : 이전의 움직임과 똑같이 시작하겠다
// # "+=1" : 마지막에 끝난 움직임보다 ~ 초 뒤에 시작하겠다

// scroll trigger

// drag & fick & spin

//
