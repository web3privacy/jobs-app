/** @type {import("prettier").Config} */
module.exports = {
	...require("prettier-config-standard"),
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	],
	singleQuote: false,
	jsxSingleQuote: false,
	useTabs: false,
	tabWidth: 2,
	semi: true
}
