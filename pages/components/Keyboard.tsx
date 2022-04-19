import PreviousMap from "postcss/lib/previous-map";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import Key from "./Key";

function Keyboard() {
	const { board, currentAttempt, onEnter, onDelete, onLetter, currentWord } =
		useContext(AppContext);

	const keyRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
	const keyRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
	const keyRow3 = ["z", "x", "c", "v", "b", "n", "m"];
	const wrongLettersSet = new Set<string>();
	const [wrongLetters, setWrongLetters] =
		useState<Set<string>>(wrongLettersSet);
	useEffect(() => {
		for (let i = 0; i < 5; i++) {
			if (currentAttempt.attempt < 1) return;
			if (!currentWord.includes(board[currentAttempt.attempt - 1][i])) {
				// setDisabledLetters(board[currentAttempt.attempt - 1][i]);
				wrongLettersSet.add(board[currentAttempt.attempt - 1][i]);
				// console.log(wrongLetters);
			}
		}
		setWrongLetters(wrongLettersSet);
	}, [currentAttempt.attempt]);

	const handleKeyboard = useCallback(
		(e: any) => {
			if (e.key === "Enter") {
				onEnter();
				return;
			}
			if (e.key === "Backspace") {
				onDelete();
				return;
			}
			keyRow1.forEach((key) => {
				if (e.key.toLowerCase() === key) {
					onLetter(key);
				}
			});
			keyRow2.forEach((key) => {
				if (e.key.toLowerCase() === key) {
					onLetter(key);
				}
			});
			keyRow3.forEach((key) => {
				if (e.key.toLowerCase() === key) {
					onLetter(key);
				}
			});
		},
		[board, currentAttempt]
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard);
		return () => {
			document.removeEventListener("keydown", handleKeyboard);
		};
	}, [handleKeyboard]);

	return (
		<div>
			<div className="flex justify-center gap-2">
				{keyRow1.map((key) => {
					return <Key key={key} letter={key} wrongLetters={wrongLetters} />;
				})}
			</div>
			<div className="flex justify-center gap-2">
				{keyRow2.map((key) => {
					return <Key key={key} letter={key} wrongLetters={wrongLetters} />;
				})}
			</div>
			<div className="flex justify-center gap-2">
				<Key letter={"ENTER"} wrongLetters={wrongLetters}></Key>
				{keyRow3.map((key) => {
					// if (!wrongLetters.size)
					return <Key key={key} letter={key} wrongLetters={wrongLetters} />;
					// if (wrongLetters.has(key)) {
					// 	return <Key key={key} letter={key} wrongLetters={wrongLetters} />;
					// }
				})}
				<Key letter={"DELETE"} wrongLetters={wrongLetters}></Key>
			</div>
		</div>
	);
}

export default Keyboard;
