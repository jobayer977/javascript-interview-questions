const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			colors: {
				theme: '#0070f3',
				backgroundPrimary: '#fafafa',
				backgroundSecondary: '#f5f5f5',
				typographyPrimary: '#333',
				typographySecondary: '#666',

				primary: '#00c2cb',
				secondary: '#ffff',
				darkGray: '#ffff',
				primaryText: '#fffffffa;'
			},
			boxShadow: {
				md: '0 1px 2px #0000003d, 0 1px 3px #0000001f'
			},
			fontFamily: {
				sans: ['IBM Plex Sans', ...fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
