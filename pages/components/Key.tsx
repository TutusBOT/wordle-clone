import React, { useContext } from "react";
import { AppContext } from "..";

function Key({ letter }: { letter: string }) {
	const { onEnter, onDelete, onLetter } = useContext(AppContext);
	const selectLetter = () => {
		if (letter === "ENTER") {
			onEnter();
			return;
		}
		if (letter === "DELETE") {
			onDelete();
			return;
		}
		onLetter(letter);
	};
	return (
		<div
			className="bg-gray-800 rounded-md text-2xl px-2 py-3 text-center capitalize"
			onClick={() => {
				selectLetter();
			}}
		>
			{letter}
		</div>
	);
}

export default Key;
