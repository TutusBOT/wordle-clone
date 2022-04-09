import { useState, useEffect } from "react";
import Letter from "./Letter";
import Row from "./Row";

const Board = (props: any) => {
	const [input, setInput] = useState<string>("");
	const [words, setWords] = useState<string[]>();
	useEffect(() => {
		const fetchWords = async () => {
			const res = await fetch("http://localhost:3000/api/words");
			const data = await res.json();
			setWords(data);
		};
		fetchWords();
	}, []);
	console.log(
		words?.filter((word) => {
			return word === input;
		})
	);

	function handleCheck() {}

	return (
		<div className="flex justify-center items-center w-full h-screen">
			{/* <Row word={input} /> */}
			{/* <Row word={input} /> */}
			<button
				onClick={() => {
					console.log(props);
				}}
			>
				XDD
			</button>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleCheck();
				}}
			>
				<input
					// className=" opacity-0"
					placeholder="JD"
					type="text"
					size={5}
					maxLength={5}
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
			</form>
			{words?.filter((word) => {
				return word === input;
			}).length
				? "jd"
				: ""}
		</div>
	);
};

export default Board;
