import type { Config } from "tailwindcss";

export const flowUIColors: { [key: string]: { [key: string]: string } } = {
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
  success: {
    DEFAULT: "#177E1E",
    light: "#E7FA92",
    "Tint-1": "#2E8B35",
    "Tint-2": "#459A4C",
    "Tint-3": "#5CA863",
    "Tint-4": "#73B67A",
    "Tint-5": "#8AC491",
    "shade-1": "#146A1A",
    "shade-2": "#115516",
    "shade-3": "#0E4012",
    "shade-4": "#0B2B0E",
    "shade-5": "#08160A",
  },
  warning: {
    DEFAULT: "#FFD100",
    "Tint-1": "#FFD633",
    "Tint-2": "#FFDB66",
    "Tint-3": "#FFE099",
    "Tint-4": "#FFE5CC",
    "Tint-5": "#FFEAFF",
    "shade-1": "#D9B200",
    "shade-2": "#B39300",
    "shade-3": "#8C7400",
    "shade-4": "#665500",
    "shade-5": "#403600",
  },
  error: {
    DEFAULT: "#F73F34",
    "Tint-1": "#F85A50",
    "Tint-2": "#F9756C",
    "Tint-3": "#FA9088",
    "Tint-4": "#FBABA4",
    "Tint-5": "#FCC6C0",
    "shade-1": "#D1342A",
    "shade-2": "#AB2A21",
    "shade-3": "#851F18",
    "shade-4": "#5F150F",
    "shade-5": "#390A06",
  },
  info: {
    DEFAULT: "#41A7F4",
    "Tint-1": "#5AB4F6",
    "Tint-2": "#73C1F8",
    "Tint-3": "#8CCEFA",
    "Tint-4": "#A5DBFC",
    "Tint-5": "#BEE8FE",
    "shade-1": "#378ED0",
    "shade-2": "#2D75AC",
    "shade-3": "#235C88",
    "shade-4": "#194364",
    "shade-5": "#0F2A40",
  },
};

export default {
  content: ["./src/app/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl': '1440px',
        },
      },
      keyframes: {
        "infinite-scroll": {
          "from": { transform: "translateX(calc(0))" },
          "to": { transform: "translateX(calc(-100%))" },
        },
        "infinite-scroll-reverse": {
          "from": { transform: "translateX(calc(0))" },
          "to": { transform: "translateX(calc(100%))" },
        },
      },  
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll-reverse 50s linear infinite",
      },
      lineHeight: {
        "80": "0.8",
        "140": "1.4",
        "180": "1.8",
      },
      colors: flowUIColors,
      fontFamily: {
        Estedad: ["var(--font-estedad)", 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        '0': '0',
        '2': '8px',    // spacing-xs
        '3': '12px',   // spacing-sm
        '4': '16px',   // spacing-md
        '6': '24px',   // spacing-lg
        '8': '32px',   // spacing-xl
        '10': '40px',  // spacing-2xl
        '12': '48px',  // spacing-3xl
        '14': '56px',  // spacing-4xl
        '16': '64px',  // spacing-5xl
        '20': '80px',  // spacing-6xl
        '30': '120px', // spacing-7xl
        '40': '160px', // spacing-8xl
      },
      gap: {
        '6': '24px', // Grid gutter width
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': '1536px',
      },
      backgroundImage: {
        "hero-desktop": 'url("../../public/images/heroSection.webp")',
        "why-us": 'url("../../public/images/whyUs.webp")',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '140%' }], // Caption-S
        base: ["1rem", { lineHeight: "1.8" }],   // Body-M (16px)
        sm: ["0.875rem", { lineHeight: "1.8" }], // Body-S (14px), Button-M
        lg: ["1.125rem", { lineHeight: "1.8" }], // Body-L (18px), H3
        xl: ["1.25rem", { lineHeight: "1.8" }],  // H2 (20px), Button-L, Caption-L
        "2xl": ["1.5rem", { lineHeight: "1.4" }], // H1 (24px)
        "3.5xl": ["2rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.4" }],
        "5xl": ["3.375rem", { lineHeight: "1.2" }], // Display-1, Display-2 (54px)
      },
    },
  },
  plugins: [],
} satisfies Config;
