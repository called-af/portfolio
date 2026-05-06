import "./globals.css";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import { Providers } from "@/app/components/molecules/Providers";
import { Sidebar } from "@/app/components/molecules/Sidebar";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-orbitron",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-share-tech-mono",
});

export const metadata = {
  title: "Punish | Greetings",
  description: "Personal portfolio website",
  icons: {
    icon: "/favicon.jpg",
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
      className={`h-full ${orbitron.variable} ${shareTechMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-(family-name:--font-share-tech-mono) bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Providers>
          <main className="relative w-full">
            <Sidebar />
            <div className="w-full pb-24 md:pb-0">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}