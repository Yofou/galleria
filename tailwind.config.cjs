const plugin = require("tailwindcss/plugin")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			black: "#000000",
			white: "#ffffff",
			grey: {
				300: "#F3F3F3",
				600: "#E5E5E5",
				900: "#7D7D7D",
			}
		},
		fontFamily: {
			libre: ["Libre Baskerville", "serif"],
		}
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			addUtilities({
				".text-display": {
					fontSize: "12.5rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "9.375rem",
				},
				".text-h1": {
					fontSize: "3.5rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "4rem",
				},
				".text-h2": {
					fontSize: "1.5rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "1.8125rem",
				},
				".text-h3": {
					fontSize: "1.125rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "1.375rem",
				},
				".text-h4": {
					fontSize: "0.9375rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 400,
					lineHeight: "1.1875rem",
				},
				".text-h5": {
					fontSize: "0.8125rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "1.0625rem",
				},
				".text-link-1": {
					fontSize: "0.75rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "0.9365rem",
					letterSpacing: "2.5px",
				},
				".text-link-2": {
					fontSize: "0.5625rem",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "0.6875rem",
					letterSpacing: "2px",
				},
				".text-body": {
					fontSize: "0.875em",
					fontFamily: theme("fontFamily.libre"),
					fontWeight: 700,
					lineHeight: "1.75rem",
				},
			})
		}),
	],
}
