import { NextApiRequest, NextApiResponse } from "next";
import { wordsArray } from "../../utils/wordsArray";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	res.send(randomWord);
}
