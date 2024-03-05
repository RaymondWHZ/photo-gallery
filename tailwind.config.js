/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				lekton: ['Lekton', 'sans-serif'],
				noto: ['Noto Sans', 'sans-serif'],
				'reenie-beanie': ['Reenie Beanie', 'cursive'],
				'avenir-next': ['Avenir Next LT Pro', 'sans-serif'],
			}
		}
	},
	plugins: []
};
