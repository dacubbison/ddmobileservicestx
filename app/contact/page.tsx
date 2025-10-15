'use client'; // For that interactive sparkle

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mldpadvy'); // Your ID locked in!

  if (state.succeeded) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-green-600"
      >
        Awesome! Message sent—we&apos;ll hit you back ASAP for that free audit.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded h-32"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send It!
        </button>
      </form>
      {/* Calendly Embed – Your Scheduling Sidekick */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Book a Free Audit</h2>
        <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_CALENDLY_LINK" style={{ minWidth: '320px', height: '630px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </motion.div>
  );
}