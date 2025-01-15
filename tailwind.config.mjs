/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				orange: {
					50: '#FFF5EA',
					100: '#FFE5CC',
					200: '#FFD1A3',
					300: '#FFB366',
					400: '#FF9933',
					500: '#FF8000',
					600: '#CC6600',
					700: '#994D00',
					800: '#663300',
					900: '#331A00',
				},
			},
		},
	},
	plugins: [],
}
