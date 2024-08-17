import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="GTM-XYZ" />
      <body className={inter.className}>
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
