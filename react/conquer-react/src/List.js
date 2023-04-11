import ListContent from "./component/ListContent";
import Modal from "./component/Modal";

function List() {
	const dataArr = [
		{
			todo: "bla~~1",
			content: "dd",
		},
		{
			todo: "bla~~2",
			content: "dd",
		},
		{
			todo: "bla~~3",
			content: "dd",
		},
	];

	// 길이가정해져 있는 배열에 일일히 접근하면 길이가 변할 때 마다 코드를 바꿔줘야 할 것
	// map 함수를 이용해서 길이가 변해도 데이터에 문제없이 접근하고 렌더링할 수 있도록 해줍니다.
	return (
		<div>
			<h1>오늘 해야할 일</h1>

			<Modal />

			<ListContent todo="리액트공부" complete="study state" />
			<ListContent todo="코테 공부" complete="conquer silver" />
			<ListContent todo="상우 잘자 해주기" complete="good night" />
			{dataArr.map((el) => {
				// 맵 매개변수 하나 있을 때는 요소에 직접 접근
				// map 을 이용해 배열에 접근할 때는 유니크한 키 값 props 를 부여ㅐ줘야 warining 안뜸
				// (나중에 CRUD 컨트롤을 하기 위해 구분시켜줘야 함)
				return <ListContent todo={el.todo} complete={el.content} />;
			})}
			{dataArr.map((el, index) => {
				// 유일해야 하는 키가 index 가 되도록 map 에 매개변수 하나 더 선언한 것!
				return <ListContent todo={el.todo} complete={el.content} key={index} />;
			})}

			<Modal />
		</div>
	);
}

export default List;
