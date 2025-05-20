import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        //주요 테마색
        primary100: "#E5E2F9",
        primary200: "#CFC9F3",
        primary300: "#B1A9EC",
        primary400: "#9687E0",
        primary500: "#7A67D4",

        // Label 색상군
        labelDisabled: "#D3D3D3",
        labelInactive: "#9E9E9E",
        labelActive: "#4A4A4A",
        labelStrong: "#2B2B2B",
        labelWhite: "#FFFFFF",
        labelBlack: "#000000",

        // Emotion Colors (예: 감정 태그 등)
        emotionAngry: "#FF6B6B",
        emotionAnxious: "#D5C1F2",
        emotionDepressed: "#C9E5F8",
        emotionFear: "#C9E6DC",
        emotionGuilty: "#FCE2D4",
        emotionHappy: "#FFF3B1",
        emotionLonely: "#E6C9F2",
        emotionNeutral: "#E1E1E1",
        emotionSad: "#B5C9F2",
        emotionShame: "#F9D3D3",
        emotionStress: "#A0E2DD",
        emotionTired: "#EDEDD3",
        emotionWorried: "#DED3F3",
      },
    },
  },
  plugins: [],
};
export default config;
