import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	// try {
	// 	const words = await axios
	// 		.get("http://localhost:3000/api/words")
	// 		.then((data) => {
	// 			// res.send(data);
	// 			// res.json(data);
	// 			// res.dat("jd");
	// 			return data;
	// 		});
	// 	// const a = await fetch("http://localhost:3000/api/words");
	//     const randomWord = words?[Math.floor(Math.random()*words.length)];
	// 	res.statusCode = 200;
	// 	// res.json(JSON.parse(words.toString()));
	// 	res.end(randomWord);
	// } catch (e) {
	// 	res.json(e);
	// 	res.end();
	// }
}
