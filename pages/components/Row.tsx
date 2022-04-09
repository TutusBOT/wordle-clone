import React from "react";
import Letter from "./Letter";

function Row({ attempt }: { attempt: number }) {
	return (
		<div className="flex justify-center gap-1">
			<Letter position={0} attempt={attempt} />
			<Letter position={1} attempt={attempt} />
			<Letter position={2} attempt={attempt} />
			<Letter position={3} attempt={attempt} />
			<Letter position={4} attempt={attempt} />
		</div>
	);
}

export default Row;
