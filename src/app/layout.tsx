import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpsAI Proficiency — AI Certification for Operations",
  description:
    "Assessment-led AI literacy, certification, and verification for facilities, maintenance, and operations teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-6 py-4 border-b border-black/10 dark:border-white/10">
          <nav className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">OpsAI Proficiency</a>
            <div className="flex items-center gap-4 text-sm">
              <a href="/pricing" className="hover:underline">Pricing</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/verify/demo" className="hover:underline">Verify</a>
              <a href="/api/auth/signin" className="rounded-md px-3 py-1.5 bg-foreground text-background">Sign in</a>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <footer className="px-6 py-8 border-t border-black/10 dark:border-white/10 text-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span>© {new Date().getFullYear()} OpsAI Proficiency</span>
            <div className="flex gap-4">
              <a href="/pricing" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Support</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
