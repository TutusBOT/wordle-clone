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
	return (
		<div
			ref={letterTile}
			className={
				" text-4xl border border-gray-600 capitalize w-16 h-16 text-center flex items-center justify-center font-letters font-bold"
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
