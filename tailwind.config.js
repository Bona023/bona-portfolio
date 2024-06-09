/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
    theme: {
        extend: {
            fontFamily: {
                titleFont: ["Chakra Petch"],
            },
            colors: {
                mainPurple: "#A459D1",
                mainOrange: "#FFB84C",
                darkOrange: "#E88D67",
                mainPink: "#F266AB",
                mainMint: "#2CD3E1",
            },
            keyframes: {
                popUp: {
                    "0%": {
                        visibility: "hidden",
                        transform: "translateY(-150px)",
                    },
                    "100%": {
                        visibility: "visible",
                        transform: "translateY(0px)",
                    },
                },
            },
            animation: {
                popUp: "popUp 2s ease-in-out",
                pulseOne: "pulse 3s linear",
            },
        },
    },
    plugins: [],
};
