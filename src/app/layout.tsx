import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RouteContent } from "@/components/Motion";
import { GlassBackground } from "@/components/GlassBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const title = "Phạm Đăng Khôi | Backend Engineering & Applied AI";
const description =
  "Software engineering student at PTIT in Ho Chi Minh City. Explore my work on distributed backend systems, Vietnamese speech recognition, and applied AI.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Phạm Đăng Khôi" },
  description,
  metadataBase: new URL("https://portfolio-psi-steel-55.vercel.app"),
  openGraph: { title, description, type: "website" },
};

const restoreTheme = `
  try {
    const theme = localStorage.getItem("portfolio-theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>
        <GlassBackground />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <RouteContent>{children}</RouteContent>
        <Footer />
      </body>
    </html>
  );
}
