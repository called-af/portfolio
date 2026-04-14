import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/app/components/molecules/Providers";
import { Sidebar } from "@/app/components/molecules/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
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
    <html lang="en" className={`h-full ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-poppins bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Providers>
          <main className="overflow-hidden flex w-full">
            <Sidebar />
            <div>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
