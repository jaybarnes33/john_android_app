/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/**/**.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#023E8A",
        light: "#f3f3f3",
        secondary: "#FF8F8F",
        accent: "#FDF7FD",
        accent2: "#F6F6F6",
        sub: "#6C757D",
        head: "#212529",
      },
      fontFamily: {
        //Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
        main: `Montserrat_500Medium`,
        bolded: `Montserrat_700Bold`,
      },
    },
  },
  plugins: [],
};
