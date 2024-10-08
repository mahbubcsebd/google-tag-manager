// import Analytics from '@/components/gtmComponent';
import { Inter } from "next/font/google";
import Link from "next/link";
import { Suspense } from 'react';
import Analytics from "./components/gtmComponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          {/* <GoogleTagManager gtmId="GTM-5WPZ22RR" /> */}
          <body className={inter.className}>
              <Suspense>
                  <Analytics />
              </Suspense>
              <header>
                  <nav>
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/product">Product</Link>
                  </nav>
              </header>
              {children}
          </body>
      </html>
  );
}
