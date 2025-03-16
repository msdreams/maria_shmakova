const {heroui} = require('@heroui/theme');
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,scss,css}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/popover.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        jura: ['Jura', 'sans-serif'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#282c34", foreground: "#11181C", placeholder: "#A8A8A8", caret: "#185F0B",
            primary: {
            DEFAULT: "#61DAFB",100: "#DFFEFC",200: "#C0FEFE",300: "#A0F7FD",400: "#88ECFC",500: "#61DAFB",600: "#46AED7",700: "#3085B4",800: "#1E5F91",900: "#124478",}
            ,gray: {
              DEFAULT: "#586F7C",100: "#EAF6F8",200: "#D5ECF1",300: "#B2CED7",400: "#89A4B0",500: "#586F7C",600: "#40586A",700: "#2C4359",800: "#1C2F47",900: "#10213B",}
            ,secondary: {
            DEFAULT: "#D23E70",100: "#FBCCCD",200: "#F79AA7",300: "#E86584",400: "#D23E70",500: "#B40B55",600: "#9A0856",700: "#810554",800: "#68034D",900: "#560248",}
            ,success: {
            DEFAULT: "#2B991D",100: "#E7FBD4",200: "#CAF7AB",300: "#A0E77C",400: "#77D058",500: "#42B229",600: "#2B991D",700: "#188014",800: "#0D6711",900: "#075511",}
            ,warning: {
              DEFAULT: "#FFC300",100: "#FFF7CC",200: "#FFEE99",300: "#FFE266",400: "#FFD63F",500: "#FFC300",600: "#DBA200",700: "#B78300",800: "#936600",900: "#7A5100",},
            danger: {
            100: "#FCE4CF",200: "#FAC3A1",300: "#F09870",400: "#E16E4C",500: "#CE3418",600: "#B11D11",700: "#940C0C",800: "#770710",900: "#620413",},
            neutral: {
            100: "#F5F5F5",200: "#E5E5E5",300: "#D4D4D4",400: "#A3A3A3",500: "#737373",600: "#525252",700: "#404040",800: "#262626",900: "#171717",},
            transparent: "transparent",}
        }
      }
    }),require("tailwindcss-animate"),heroui()
  ],
}

