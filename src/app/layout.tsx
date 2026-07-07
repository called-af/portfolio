import "./globals.css";
import { VT323, Press_Start_2P, Oxanium } from "next/font/google";
import { Providers } from "@/app/components/molecules/Providers";
import { Sidebar } from "@/app/components/molecules/Sidebar";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pixel",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-display",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Arkadani | Portfolio",
  description: "Personal portfolio — crafting the web, one pixel at a time",
  icons: {
    icon: "/vercel.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${vt323.variable} ${pressStart2P.variable} ${oxanium.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-(family-name:--font-body) bg-(--ds-paper) text-(--ds-ink) transition-colors"
        style={{ imageRendering: "pixelated" }}
      >
        <Providers>
          <main className="relative w-full">
            <Sidebar />
            <div className="w-full">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}