import type { Config } from "tailwindcss";

export const autoRentColors: { [key: string]: { [key: string]: string } } = {
  primary: {
    DEFAULT: "#194BF0",
    "Tint-1": "#3F69F3",
    "Tint-2": "#6687F5",
    "Tint-3": "#8CA5F8",
    "Tint-4": "#B2C3FA",
    "Tint-5": "#D9E1FD",
    "shade-1": "#0D3BD0",
    "shade-2": "#0B2FA6",
    "shade-3": "#08237D",
    "shade-4": "#051753",
    "shade-5": "#030C2A",
  },
  secondary: {
    DEFAULT: "#FDB713",
    "Tint-1": "#FDC236",
    "Tint-2": "#FED066",
    "Tint-3": "#FEDF95",
    "Tint-4": "#FFEDC4",
    "Tint-5": "#FFF4DC",
    "shade-1": "#D79C10",
    "shade-2": "#A4770C",
    "shade-3": "#725209",
    "shade-4": "#3F2E05",
    "shade-5": "#261B03",
  },
  neutral: {
    "1": "#F3F3F3",
    "2": "#D7D7D7",
    "3": "#C2C2C2",
    "4": "#AEAEAE",
    "5": "#9A9A9A",
    "6": "#868686",
    "7": "#727272",
    "8": "#5E5E5E",
    "9": "#494949",
    "10": "#353535",
    "11": "#212121",
  },
};

export default {
  content: ["./src/app/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      lineHeight: {
        "80": "0.8",
        "140": "1.4",
        "180": "1.8",
      },
      colors: autoRentColors,
      fontFamily: {
        Estedad: ["var(--font-estedad)"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "hero-desktop": 'url("../../public/images/heroSection.webp")',
        "mobile-hero-desktop":
          'url("../../public/images/mobileHeroSection.webp")',
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.8" }],
        sm: ["0.875rem", { lineHeight: "1.8" }],
        lg: ["1.125rem", { lineHeight: "1.8" }],
        xl: ["1.25rem", { lineHeight: "1.8" }],
        "3.5xl": ["2rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
