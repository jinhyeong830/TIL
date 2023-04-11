export default function ListContent({ todo, complete }) {
	// 1. 매개변수 내부에 따로 써주기
	// 매개변수를 따로 써주지 않고 한번에 처리할 수도 있음
	// 2. {props} 라고 매개 변수 내부에 써주고, props.todo props.complete 이런 식으로 사용
	// 3. 매개변수에 props 만 써주고 const {todo, complete} = props; todo, complete 바로 사용 가능

	/* 백엔드에서 데이터를 받아오고 받은 데이터를 props 에 전달하는 형태를 많이 사용 */

	return (
		<div>
			<h2>{todo}</h2>
			<p>{complete}</p>
			<hr />
		</div>
	);
}
