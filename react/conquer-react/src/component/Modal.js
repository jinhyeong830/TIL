export default function Modal() {
	const style = {
		backgroundColor: "#ddd",
		padding: ".5rem",
		color: "#666",
	};
	return (
		<div className="modal" style={style}>
			<h2>오늘 해야할 일 3개</h2>
			<h2>오늘 완료한 일 2개</h2>
		</div>
	);
}
