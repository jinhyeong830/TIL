export default function ListContent({ todo, complete }) {
	return (
		<>
			<h2>{todo}</h2>
			<p>{complete}</p>
			<hr />
		</>
	);
}
