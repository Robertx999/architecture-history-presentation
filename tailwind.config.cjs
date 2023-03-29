const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
				serif: ['EB Garamond', 'serif'],
				display: ['Abril Fatface', 'EB Garamond', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
