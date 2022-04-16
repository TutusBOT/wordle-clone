import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "..";
import Key from "./Key";

function Keyboard() {
	const { board, currentAttempt, onEnter, onDelete, onLetter } =
		useContext(AppContext);

	const keyRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
	const keyRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
	const keyRow3 = ["z", "x", "c", "v", "b", "n", "m"];
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
					return <Key key={key} letter={key} />;
				})}
			</div>
			<div className="flex justify-center gap-2">
				{keyRow2.map((key) => {
					return <Key key={key} letter={key} />;
				})}
			</div>
			<div className="flex justify-center gap-2">
				<Key letter={"ENTER"}></Key>
				{keyRow3.map((key) => {
					return <Key key={key} letter={key} />;
				})}
				<Key letter={"DELETE"}></Key>
			</div>
		</div>
	);
}

export default Keyboard;
