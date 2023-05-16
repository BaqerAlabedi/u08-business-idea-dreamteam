/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
		backgroundImage: {
			"login": "url('./src/assets/login.jpg')",
			"register": "url('./src/assets/register.jpg')"
			"index": "url('./src/assets/index.jpg')"
		}
      keyframes: {
        "drop": {
          "0%": {transform: "scaleY(0) translateY(-100px)", filter: "opacity(0) blur(10px)", border: "solid 20px black"},
          "70%": {transform: "scaleY(1.1)"}
        },
        "poof": {"100%": {filter: "opacity(0) blur(50px);", transform: "scale(1.5)"}}
      },
      animation: {
      "drop": "drop .5s ease-in-out forwards",
      "poof": "poof .3s ease-in-out forwards"
      }
    }
	},
  },
  plugins: []
}
