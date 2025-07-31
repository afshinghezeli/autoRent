import { Figtree, Inter } from "next/font/google";
import localFont from "next/font/local";

import { Metadata, Viewport } from "next";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "اتورنت",
  description: "سرویس دهنده رزرو خودرو در ایران",
  robots: "NOINDEX, NOFOLLOW",
};
export const viewport: Viewport = {
  themeColor: "#3F69F3",
};

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/estedad/Estedad.woff2",
      weight: "200 400 500 600 700 800 900",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${estedad.variable} ${figtree.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
