import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				white: {
					1: "#FFFFFF",
					2: "rgba(255, 255, 255, 0.72)",
					3: "rgba(255, 255, 255, 0.4)",
					4: "rgba(255, 255, 255, 0.64)",
					5: "rgba(255, 255, 255, 0.80)",
				},
				black: {
					1: "#15171C",
					2: "#222429",
					3: "#101114",
					4: "#252525",
					5: "#2E3036",
					6: "#24272C",
				},
				orange: {
					1: "#F97535",
				},
				gray: {
					1: "#71788B",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				"nav-focus":
				  "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
