import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { satoshi } from "./utils/customFonts";
export const metadata: Metadata = {
  title: "Rethink Event",
  description: "Rådgivningsbureau i bæredygtighed indenfor events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={satoshi.variable}>
      <body className='h-screen font-satoshi'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
