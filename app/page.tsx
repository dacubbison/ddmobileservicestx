'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <section className="bg-teal-500 text-white py-20 px-4 text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-4">
          D&D Mobile Services TX: Fix, Gleam, Thrive
        </motion.h1>
        <p className="text-xl mb-8">Texas-Proud Mobile Mastery—Auto, Detailing, Landscaping for Homes & Businesses in Montgomery County.</p>
        <Link href="/contact" className="bg-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-700">Book Free Consult – Residential or Commercial</Link>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Texas-Strong Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl mb-2">Top Tech Mobile Automotive</h3>
            <p>Engine fixes to winter checks—fleets too. <Link href="https://toptechmobile.com" className="text-teal-600 hover:underline">Explore Auto</Link></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl mb-2">Supreme Gleam Detailing</h3>
            <p>Premium shine for rides & exteriors—bulk for biz. <Link href="https://supremegleamdetailing.com" className="text-teal-600 hover:underline">Explore Gleam</Link></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl mb-2">Thriving Oasis Landscaping</h3>
            <p>Winter cleanups to full designs—corporate grounds. <Link href="https://thrivingoasislandscaping.com" className="text-teal-600 hover:underline">Explore Oasis</Link></p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}