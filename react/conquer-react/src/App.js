import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";

const btnStyle = {
	backgroundColor: "orangered",
	padding: ".5rem 1rem",
	color: "#fffff0",
	boxShadow: "1px 1px 4px rgba(200,100,100,1)",
	display: "inline-block",
	fontSize: "1.5rem",
	border: "none",
	margin: "0.5rem",
	borderRadius: "10px",
};

function App() {
	const [strState, setState] = useState("init");
	const [condition, setCondition] = useState(true);
	const [number, setNumber] = useState(0);

	const [state, setSt] = useState({ teacher: "효석" });
	console.log(state);
	function checkCondition() {
		setNumber(number + 1);
		number >= 7 ? setCondition(false) : setCondition(true);
	}
	return (
		<div className="App">
			<button onClick={() => setState(strState + "+")}>english</button>
			{/* <button onClick={setState(strState + "+")}>english</button> */}
			{/* setState를 바로 넣지 말아라.
      - 선언해서 쓰거나
      - onClick의 익명함수로 쓰거나 !
      */}
			<span>{strState}</span>
			<hr />
			{/* ------- */}
			<button style={btnStyle} onClick={checkCondition}>
				condition change!😶‍🌫️
			</button>
			<span style={{ fontSize: "5rem" }}>{condition ? "👍" : "🥲"}</span>
			<span style={{ fontSize: "5rem" }}>{number}</span>
			<hr />
			<button
				style={btnStyle}
				onClick={() => {
					setSt({ teacher: "tetz" });
					/* 
          state.teacher = 'tetz';
          const copyObj ={...state}
          setSt(copyObj)
          - 똑같은 의미.. 전개구문. 
          */
					console.log(state);
				}}
			>
				영어로
			</button>
			<span>{state.teacher}</span>
		</div>
	);
}

export default App;
