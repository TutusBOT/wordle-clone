import { useState, useEffect } from "react";
import Letter from "./Letter";

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

	return (
		<div className="flex justify-center items-center w-full h-screen">
			{input?.split("")?.map((letter, i) => {
				return <Letter key={letter + i} letter={letter} />;
			})}
			<button
				onClick={() => {
					console.log(props);
				}}
			>
				XDD
			</button>
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
			{words?.filter((word) => {
				return word === input;
			}).length
				? "jd"
				: ""}
		</div>
	);
};

export default Board;
