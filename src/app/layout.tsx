import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obiski Portfolio",
  description: "creative frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <div className="flex flex-col justify-between items-start">
          <Header />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
