import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xs: '475px'
			},
			fontFamily: {
				sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				gray: {
					50: '#D8D8DA',
					100: '#CBCBCD',
					200: '#B1B1B4',
					300: '#97979B',
					400: '#7D7D82',
					500: '#646468',
					600: '#4B4B4E',
					700: '#323234',
					800: '#19191A',
					900: '#0A0A0A',
					950: '#030303'
				}
			}
		}
	},

	plugins: []
};
