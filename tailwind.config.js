module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			letters: ["Clear\\ Sans", "Helvetica\\ Neue", "Arial", "sans-serif"],
		},
		extend: {
			animation: {
				appear: "appear 1s ease-in-out forwards",
			},
			keyframes: {
				appear: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
