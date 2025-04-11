import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "ZsLab | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} antialiased bg-gradient-to-r from-teal-100 to-blue-200`}
      >
        {children}
      </body>
    </html>
  );
}
