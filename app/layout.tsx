import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import AntdProvider from "@/providers/AntdProvider";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael - Personal Portfolio",
  description: "hello, its my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdProvider>
          <Navbar />
          {children}
          {/* <ContactUs />
          <Footer /> */}
        </AntdProvider>
      </body>
    </html>
  );
}
