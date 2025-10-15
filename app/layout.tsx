import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D&D Mobile Services TX",
  description: "Texas-Proud Mobile Mastery—Auto, Detailing, Landscaping for Homes & Businesses in Montgomery County. Winter services available now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-emerald-600 text-white p-4">
          <ul className="flex flex-wrap space-x-4 justify-center">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/commercial" className="hover:underline">Commercial</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-emerald-600 text-white p-4 text-center mt-8">
          <p>&copy; 2025 D&D Mobile Services TX | <Link href="/" className="hover:underline">Back to Top</Link></p>
        </footer>
      </body>
    </html>
  );
}