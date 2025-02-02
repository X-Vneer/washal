import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|button|calendar|dropdown|input|link|modal|navbar|popover|radio|scroll-shadow|select|slider|tabs|user|divider|ripple|spinner|menu|listbox).js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#b12f34",
        primaryColor1: "#a6d3b0",
        primaryColor2: "#f8d0d4",
        primaryColor3: "#fadcb6",
        primaryColor4: "#bad6ee",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
