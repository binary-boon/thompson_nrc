import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import { Mulish } from "next/font/google";
import { Script } from "vm";
import { link } from "fs";





const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
        xs:"300px",
        sm:"640px",
        md:"1080px",
        lg:"1280px",

    },
    extend: {
      fontFamily: {
        Mulish: ["Mulish", "Regular"],
       },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  lightMode: "light",
  plugins: [nextui()]
};
export default config;
