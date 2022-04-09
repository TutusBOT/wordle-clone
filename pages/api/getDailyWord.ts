import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import axios from "axios";

export default function (req: NextApiRequest, res: NextApiResponse) {
	let dailyWord: string;
	const date = new Date();
	const words = axios.get("./api/words");

	const getFile = fs.readFile(
		`./dailywords/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}.txt`,
		"utf-8",
		(e, data) => {
			// if (data) {
			// 	dailyWord = data;
			// 	res.send(data);
			// 	return;
			// }
			// if (e) {
			// 	console.log(e);
			// 	return;
			// }

			res.send("uga");
		}
	);

	setTimeout(() => console.log(dailyWord), 1000);
}
