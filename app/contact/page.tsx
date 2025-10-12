export default function Contact() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Get in Touch – Free Consult!</h1>
      <p className="mb-4">Residential or Commercial—let's chat TX services.</p>
      {/* Form placeholder – add real form later */}
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" />
        <input type="email" placeholder="Email" className="w-full p-2 border" />
        <textarea placeholder="Message" className="w-full p-2 border h-32" />
        <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}