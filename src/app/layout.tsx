import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dothyn",
  description: "Create by Lee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* 🌟 全局导航栏 —— 和 page.tsx 样式一致 */}
        <header className="w-full py-4 flex items-center gap-10 max-w-6xl mx-auto absolute top-4 left-6 z-50">
          
          {/* 左侧 Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/LOGO.png"
              width={40}
              height={40}
              alt="LOGO"
              className="rounded-full shadow-md"
            />
            <span className="text-xl font-semibold tracking-wide dark:text-white">DOTHYN</span>
          </div>

          {/* 导航链接 */}
          <nav className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/ai-tools">AI Tools</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        {/* 内容区，给顶部导航预留空间避免遮挡 */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}