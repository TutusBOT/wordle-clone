import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "..";

function Letter({ position, attempt }: { position: number; attempt: number }) {
	const { board, currentWord, currentAttempt } = useContext(AppContext);
	const letter = board[attempt][position];
	const [letterState, setLetterState] = useState("");
	// const getCorrectWord = async () => {
	// 	const wordsArray = await words();
	// 	console.log(wordsArray[0]);

	// 	return wordsArray[0];
	// };
	// correctWord.then(console.log(correctWord[0]));
	// console.log(getCorrectWord());
	// const getWords = randomWord().then((res: any) => {
	// 	return res;
	// });
	const getCorrectWord = async () => {
		// randomWord.then((word: string[]) => {
		// 	const correctWord = word;
		// 	console.log(letter, correctWord);
		// 	if (!letter) return setLetterState("");
		// 	if (letter === correctWord[position])
		// 		return setLetterState("bg-green-500");
		// 	if (correctWord.includes(letter)) return setLetterState("bg-yellow-400");
		// 	return setLetterState("bg-gray-700");
		// });
		// const correctWord = await randomWord();
		// if (!letter) return setLetterState("");
		// if (letter === correctWord[position]) return setLetterState("bg-green-500");
		// if (correctWord.includes(letter)) return setLetterState("bg-yellow-400");
		// return setLetterState("bg-gray-700");
		// console.log(correctWord);
	};
	useEffect(() => {
		if (currentAttempt.attempt > attempt) {
			if (!letter) return setLetterState("");
			if (letter === currentWord[position])
				return setLetterState("bg-green-500");
			if (currentWord.includes(letter)) return setLetterState("bg-yellow-400");
			return setLetterState("bg-gray-700");
		}
	}, [currentAttempt]);
	return (
		<div
			className={
				(letterState ? letterState : "") +
				" text-5xl border border-white capitalize w-12 h-12 text-center flex items-center justify-center"
			}
		>
			{letter}
		</div>
	);
}

export default Letter;
