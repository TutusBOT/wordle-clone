import React, { useState } from "react";
import Row from "./Row";

function Board2() {
	return (
		<div className="flex flex-col gap-1">
			<Row attempt={0} />
			<Row attempt={1} />
			<Row attempt={2} />
			<Row attempt={3} />
			<Row attempt={4} />
			<Row attempt={5} />
		</div>
	);
}

export default Board2;
