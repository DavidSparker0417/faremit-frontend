/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        skeletonScreen: {
            DEFAULT: {
                // .loading
                baseColor: "#c7c7c7",
                movingColor:
                    "linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)",
                duration: "1s",
                timing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
            },
            // specify another color to have multiple loading colors.
            blue: {
                // .loading-blue
                baseColor: "blue",
                movingColor:
                    "linear-gradient(to right, transparent 0%, lightblue 50%, transparent 100%)",
                duration: ".3s",
                timing: "ease"
            }
        },

        extend: {
            keyframes: {
                rippleAni: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(5px, -5px)" },
                    "66%": { transform: "translate(-5px, 5px)" }
                },
                ripple2Ani: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(-5px, -5px)" },
                    "66%": { transform: "translate(5px, 5px)" }
                }
            },
            animation: {
                ripple: "rippleAni 3s linear infinite",
                ripple2: "ripple2Ani 4s linear infinite"
            },
            fontFamily: {
                popins: "'Poppins', 'sans-serif'"
            },
            fontWeight: {
                thin: "100",
                hairline: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                "extra-bold": "800",
                black: "900"
            }
        },
        colors: {
            primary: "#fe5719",
            secondary: "#D6D4F7",
            black: "#171614",
            blue: "#554AE4",
            green: "#008000"
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
        require("@gradin/tailwindcss-skeleton-screen")
    ]
};
