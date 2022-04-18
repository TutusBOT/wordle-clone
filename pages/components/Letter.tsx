import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { AppContext } from "..";

function Letter({ position, attempt }: { position: number; attempt: number }) {
	const { board, currentWord, currentAttempt } = useContext(AppContext);
	const letter = board[attempt][position];
	const letterTile = useRef<any>();
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
			letterTile.current.style.animation = `letter-rotate 500ms ease-in-out ${
				position * 200
			}ms`;
			if (!letter) return setLetterState("");
			setTimeout(() => {
				if (letter === currentWord[position])
					return setLetterState("bg-green-500");
				if (currentWord.includes(letter))
					return setLetterState("bg-yellow-400");
				return setLetterState("bg-gray-700");
			}, 250 + position * 200);
		}
	}, [currentAttempt]);
	return (
		<div
			ref={letterTile}
			className={
				(letterState ? letterState : "") +
				" text-5xl border border-white capitalize w-12 h-12 text-center flex items-center justify-center"
			}
			// style={{
			// 	transition: "all 500ms forwards",
			// 	transform: "rotate3d(1, 0, 0, 360deg)",
			// }}
		>
			{letter}
		</div>
	);
}

export default Letter;
