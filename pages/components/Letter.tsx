import React, { useContext } from "react";
import { AppContext } from "..";

function Letter({ position, attempt }: { position: number; attempt: number }) {
	const { board } = useContext(AppContext);
	console.log(board[attempt][position]);

	return (
		<div className=" text-5xl border border-white">
			{board[attempt][position]}
		</div>
	);
}

export default Letter;
