import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/Background3D";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravikant Singh | Full Stack Web Developer",
  description:
    "Explore the portfolio of Ravikant Singh, a B.Tech CSE student at Lovely Professional University. Discover full-stack web development projects, React, Next.js, Node.js, MongoDB, and programming skills.",
  applicationName: "Ravikant Singh Portfolio",
  keywords: [
    "Ravikant Singh",
    "Ravikant Singh Portfolio",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "B.Tech CSE",
    "Lovely Professional University",
  ],
  authors: [{ name: "Ravikant Singh" }],
  creator: "Ravikant Singh",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Background3D />
        <div className="site-content">
          {children}
        </div>
      </body>
    </html>
  );
}