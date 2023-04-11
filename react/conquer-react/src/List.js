import ListContent from "./component/ListContent";
import Modal from "./component/Modal";

function List() {
	return (
		<div>
			<h1>오늘 해야할 일</h1>

			<Modal />

			<ListContent todo="리액트공부" complete="study state" />
			<ListContent todo="코테 공부" complete="conquer silver" />
			<ListContent todo="상우 잘자 해주기" complete="good night" />

			<Modal />
		</div>
	);
}

export default List;
