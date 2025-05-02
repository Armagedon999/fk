/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Poppins', 'Open Sans', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#10B981', // Emerald Green
					light: '#34D399',
					dark: '#059669',
					content: '#ffffff'
				},
				secondary: {
					DEFAULT: '#FBBF24', // Mustard / Amber
					light: '#FCD34D',
					dark: '#F59E0B',
					content: '#1F2937'
				},
				accent: {
					DEFAULT: '#38BDF8', // Sky Blue
					light: '#7DD3FC',
					dark: '#0EA5E9',
					content: '#ffffff'
				},
				neutral: {
					light: '#F9FAFB',
					DEFAULT: '#1F2937'
				},
				base: {
					100: '#F9FAFB',
					200: '#F3F4F6',
					300: '#E5E7EB',
					content: '#1F2937'
				},
				alert: '#EF4444'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				ukmfk: {
					"primary": "#10B981",
					"primary-focus": "#059669",
					"primary-content": "#ffffff",
					"secondary": "#FBBF24",
					"secondary-focus": "#F59E0B",
					"secondary-content": "#1F2937",
					"accent": "#38BDF8",
					"accent-focus": "#0EA5E9",
					"accent-content": "#ffffff",
					"neutral": "#1F2937",
					"neutral-focus": "#111827",
					"neutral-content": "#ffffff",
					"base-100": "#F9FAFB",
					"base-200": "#F3F4F6",
					"base-300": "#E5E7EB",
					"base-content": "#1F2937",
					"info": "#38BDF8",
					"success": "#10B981",
					"warning": "#FBBF24",
					"error": "#EF4444",
				}
			}
		],
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: true,
		themeRoot: ":root"
	}
}; 