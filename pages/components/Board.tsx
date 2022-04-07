import { useState } from "react";
import Letter from "./Letter";
import { GetStaticProps } from "next";

const Board = (props: any) => {
	const [input, setInput] = useState<string>();

	return (
		<div className="flex justify-center items-center w-full h-screen">
			{input?.split("")?.map((letter) => {
				return <Letter letter={letter} />;
			})}
			<button
				onClick={() => {
					console.log(props);
				}}
			>
				XDD
			</button>
			{/* {console.log(words)} */}
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
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("./api/words");
	const words = await res.json();

	return {
		props: {
			words: "asdasasdsa",
		},
	};
};

export default Board;
