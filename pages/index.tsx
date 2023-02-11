import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { createContext, useCallback, useEffect, useState } from "react";
import { wordsArray } from "../utils/wordsArray";
import Alert from "../components/Alert";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { mode } from "../utils/mode";
import Navbar from "../components/Navbar";
import { defaultBoard } from "../utils/WordsHelper";
import { letterAnimationDelay } from "../components/Letter";
import Snackbar from "../components/Snackbar";

export const AppContext = createContext<any>(defaultBoard);

const Home: NextPage = () => {
	const [board, setBoard] = useState(defaultBoard);
	const [darkmode, setDarkmode] = useState(true);
	const [currentWord, setCurrentWord] = useState("");
	const [wordsSet, setWordsSet] = useState<Set<string>>();
	const [typedWrongWord, setTypedWrongWord] = useState(false);
	const [alertText, setAlertText] = useState("");
	const [currentAttempt, setCurrentAttempt] = useState({
		attempt: 0,
		position: 0,
	});
	const [gameState, setGameState] = useState<"progress" | "lost" | "won">(
		"progress"
	);
	useEffect(() => {
		const set = new Set(wordsArray);
		setWordsSet(set);
		const usermode = localStorage.getItem("darkmode");
		if (usermode !== null) {
			setDarkmode(JSON.parse(usermode));
		}
	}, []);
	useEffect(() => {
		if (currentAttempt.attempt < 1) return;

		let word = "";
		for (let i = 0; i < 5; i++) {
			word += board[currentAttempt.attempt - 1][i];
		}
		if (word === currentWord) {
			setTimeout(() => {
				setGameState("won");
			}, letterAnimationDelay);
			return;
		}
		if (currentAttempt.attempt > 5 && !(word === currentWord)) {
			setTimeout(() => setGameState("lost"), letterAnimationDelay);
			return;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentAttempt.attempt]);

	const randomWord = useCallback(async () => {
		try {
			const res = await axios.get("http://localhost:3000/api/getRandomWord");
			console.log(res.data);
			return setCurrentWord(res.data);
		} catch (error) {
			console.error(error);
		}
	}, []);
	if (!currentWord) {
		randomWord();
	}
	const onDelete = () => {
		const currentBoard = [...board];
		if (
			currentAttempt.position === 0 &&
			currentBoard[currentAttempt.attempt][currentAttempt.position] === ""
		)
			return;
		currentBoard[currentAttempt.attempt][currentAttempt.position - 1] = "";
		setBoard(currentBoard);
		setCurrentAttempt({
			attempt: currentAttempt.attempt,
			position: currentAttempt.position - 1,
		});
	};
	const onEnter = () => {
		if (currentAttempt.position !== 5 || currentAttempt.attempt > 6) return;
		let word = "";
		for (let i = 0; i < 5; i++) {
			word += board[currentAttempt.attempt][i];
		}
		if (!wordsSet?.has(word)) {
			setAlertText("Not in a word list");
			setTypedWrongWord(true);
			setTimeout(() => {
				setTypedWrongWord(false);
			}, 400);
			setTimeout(() => {
				setAlertText("");
			}, 1500);
			return;
		}
		setCurrentAttempt({
			attempt: currentAttempt.attempt + 1,
			position: 0,
		});
	};
	const onLetter = (letter: string) => {
		if (currentAttempt.position > 4) return;
		const currentBoard = [...board];
		currentBoard[currentAttempt.attempt][currentAttempt.position] = letter;
		setBoard(currentBoard);
		setCurrentAttempt({
			attempt: currentAttempt.attempt,
			position: currentAttempt.position + 1,
		});
	};

	return (
		<div className={"h-screen bg-black text-white grid " + mode(darkmode)}>
			<Head>
				<title>Wordle clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
			<main className=" flex flex-col justify-between items-center w-full h-full">
				<AppContext.Provider
					value={{
						board,
						setBoard,
						currentAttempt,
						setCurrentAttempt,
						onDelete,
						onEnter,
						onLetter,
						currentWord,
						darkmode,
						typedWrongWord,
					}}
				>
					<Board />
					<Keyboard />
				</AppContext.Provider>
				{alertText ? <Alert alertText={alertText} /> : null}
				{gameState === "won" && (
					<Snackbar
						message={`You won after ${currentAttempt.attempt} ${
							currentAttempt.attempt > 1 ? "tries" : "try"
						}!`}
					/>
				)}
				{gameState === "lost" && (
					<Snackbar message={`You lost. Correct word was: ${currentWord}`} />
				)}
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
