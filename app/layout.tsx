import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'D&D Mobile Services TX | Auto, Detailing, Landscaping in Montgomery County',
  description: 'Proudly Texas: Residential & Commercial Mobile Pros—Repairs, Gleam, Oasis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <DefaultSeo
          title="D&D Mobile Services TX"
          description="Auto repairs, Supreme Gleam detailing, Thriving Oasis landscaping—TX strong for homes & businesses."
          openGraph={{ type: 'website', site_name: 'DDMobileTX' }}
          additionalMetaTags={[{ name: 'keywords', content: 'mobile auto repair The Woodlands TX, commercial landscaping Kingwood, fleet detailing Montgomery County' }]}
        />
        <nav className="bg-teal-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">D&D Mobile Services TX</h1>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/commercial">Commercial</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-emerald-700 text-white p-4 text-center">
          © 2025 D&D Mobile Services TX | Kingwood, The Woodlands, Montgomery County Proud
        </footer>
      </body>
    </html>
  );
}