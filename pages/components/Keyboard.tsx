import React from "react";
import Key from "./Key";

function Keyboard() {
	const keyRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
	const keyRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
	const keyRow3 = ["z", "x", "c", "v", "b", "n", "m"];
	return (
		<div>
			<div className="flex justify-center">
				{keyRow1.map((key) => {
					return <Key key={key} letter={key} />;
				})}
			</div>
			<div className="flex justify-center">
				{keyRow2.map((key) => {
					return <Key key={key} letter={key} />;
				})}
			</div>
			<div className="flex justify-center">
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
