/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
		backgroundImage: {
			"login": "url('./src/assets/login.jpg')"
		}
	},
  },
  plugins: [],
}

