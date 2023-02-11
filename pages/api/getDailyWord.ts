import { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import axios from "axios";

export default async function getDailyWord(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let dailyWord: string;
	const date = new Date();
	const words = axios.get("./api/words");

	const fileContents = await fsPromises.readFile(
		`./dailywords/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}.json`
	);

	res.json(JSON.parse(fileContents.toString()));
}
