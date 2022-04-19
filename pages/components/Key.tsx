import React, { MutableRefObject, useContext, useEffect, useRef } from "react";
import { AppContext } from "..";

function Key({
	letter,
	wrongLetters,
}: {
	letter: string;
	wrongLetters: Set<string>;
}) {
	const { onEnter, onDelete, onLetter } = useContext(AppContext);
	const keyTile = useRef<any>();
	useEffect(() => {
		if (wrongLetters.has(letter)) {
			// keyState = "#000000";
			keyTile.current.style.backgroundColor = "#3a3a3a";
		}
	}, [wrongLetters]);
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
			ref={keyTile}
			className="bg-gray-500 rounded-md text-2xl px-2 py-3 text-center capitalize"
			onClick={() => {
				selectLetter();
			}}
		>
			{letter}
		</div>
	);
}

export default Key;
