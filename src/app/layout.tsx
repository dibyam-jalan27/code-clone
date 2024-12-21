import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Clone",
  description:
    "Code Clone is an innovative code editor designed for developers to enhance their productivity and streamline their coding experience. With a sleek and modern interface, it supports a wide range of programming languages and provides advanced features such as real-time collaboration, syntax highlighting, and intelligent code completion. Whether you're working on a solo project or collaborating with a team, Code Clone offers the tools you need to write clean, efficient, and error-free code. Join the future of coding with Code Clone and elevate your development workflow to the next level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
