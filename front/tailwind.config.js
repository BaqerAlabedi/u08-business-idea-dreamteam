/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
		backgroundImage: {
			"index": "url('./src/assets/index.jpg')"
		}
	},
  },
  plugins: [],
}

