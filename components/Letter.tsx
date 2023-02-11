import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../pages";
import { mode } from "../utils/mode";

interface Letter {
	position: number;
	attempt: number;
}

export const letterAnimationDelay = 1200;

function Letter({ position, attempt }: Letter) {
	const { board, currentWord, currentAttempt, darkmode, typedWrongWord } =
		useContext(AppContext);
	const letter = board[attempt][position];
	const letterTile = useRef<HTMLDivElement>(null);
	const [letterState, setLetterState] = useState("");

	useEffect(() => {
		if (currentAttempt.attempt > attempt && letterTile.current) {
			letterTile.current.style.animation = `letter-rotate 400ms ease-in-out ${
				position * 200
			}ms`;
			if (!letter) return setLetterState("transparent");
			setTimeout(() => {
				if (letter === currentWord[position]) return setLetterState("#538d4e");
				if (currentWord.includes(letter)) return setLetterState("#b59f3b");
				return setLetterState("#3a3a3a");
			}, 200 + position * 200);
		}
	}, [currentAttempt]);
	useEffect(() => {
		if (
			currentAttempt.attempt === attempt &&
			currentAttempt.position - 1 === position &&
			letter &&
			letterTile.current
		) {
			console.log(letter);
			// letterTile.current.style.transform = "rotate(30deg)";
		} else if (letterTile.current) {
			// letterTile.current.style.transform = "rotate(-30deg)";
		}
	}, [currentAttempt]);

	useEffect(() => {
		if (
			typedWrongWord === true &&
			attempt === currentAttempt.attempt &&
			letterTile.current
		) {
			console.log("wrong word");
			letterTile.current.classList.add("shake");
		} else if (letterTile.current) {
			letterTile.current.classList.remove("shake");
		}
	}, [typedWrongWord]);
	return (
		<div
			ref={letterTile}
			className={
				" text-4xl border border-gray-600 capitalize w-12 h-12 2xl:w-16 2xl:h-16 text-center flex items-center justify-center font-letters font-bold " +
				mode(darkmode)
			}
			style={{
				backgroundColor: letterState || "transparent",
			}}
		>
			{letter}
		</div>
	);
}

export default Letter;
