module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			letters: ["Clear\\ Sans", "Helvetica\\ Neue", "Arial", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
