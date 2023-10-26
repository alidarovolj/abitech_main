/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], darkMode: "class", theme: {
        extend: {
            colors: {
                mainColor: "#1E3D37", secondaryColor: "#ECB454"
            }, width: {
                half: "49.5%", third: "32%", sixth: "16%", fourth: "24.5%", fifth: "19%"
            }, animation: {
                'infinite-scroll': 'infinite-scroll 50s linear infinite',
            }, keyframes: {
                'infinite-scroll': {
                    from: {transform: 'translateX(0)'}, to: {transform: 'translateX(-100%)'},
                }
            }
        },
    }, plugins: [],
};
