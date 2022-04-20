import React, { MutableRefObject, useContext, useEffect, useRef } from "react";
import { AppContext } from "..";

function Key({
	letter,
	wrongLetters,
	correctLetters,
	almostCorrectLetters,
}: {
	letter: string;
	wrongLetters: Set<string>;
	correctLetters: Set<string>;
	almostCorrectLetters: Set<string>;
}) {
	const { onEnter, onDelete, onLetter } = useContext(AppContext);
	const keyTile = useRef<any>();
	useEffect(() => {
		if (wrongLetters.has(letter)) {
			keyTile.current.style.backgroundColor = "#3a3a3a";
		}
		// console.log(keyTile.current);

		if (almostCorrectLetters.has(letter)) {
			keyTile.current.style.backgroundColor = "#b59f3b";
		}
		if (correctLetters.has(letter)) {
			keyTile.current.style.backgroundColor = "#538d4e";
		}
	}, [wrongLetters, correctLetters, almostCorrectLetters]);
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
	const specialLetterCheck = () => {
		if (letter === "ENTER" || letter === "DELETE") {
			return "w-18 sm:w-24";
		}
		return "w-6 sm:w-12";
	};
	return (
		<div
			ref={keyTile}
			className={
				"bg-gray-500 rounded-md text-2xl h-16 text-center capitalize flex items-center justify-center " +
				specialLetterCheck()
			}
			onClick={() => {
				selectLetter();
			}}
		>
			{letter}
		</div>
	);
}

export default Key;
