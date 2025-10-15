export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Our Services</h1>
      <p className="mb-6 text-gray-700">Discover our premium mobile offerings—bundle for 10% off and year-round convenience!</p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2 text-left">Service</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Starting Price</th>
          </tr>
        </thead>
        <tbody>
          <tr id="auto" className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Top Tech Auto</td>
            <td className="border p-2">Mobile automotive repairs and winter checks—keep your ride road-ready. {/* Add-ons: Diagnostics, tire swaps */}</td>
            <td className="border p-2">$50/job</td>
          </tr>
          <tr id="detailing" className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Supreme Gleam Detailing</td>
            <td className="border p-2">Pro shines for vehicles and exteriors—holiday prep bundles available. {/* Add-ons: Ceramic coating, interior deep clean */}</td>
            <td className="border p-2">$100/job</td>
          </tr>
          <tr id="landscaping" className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Thriving Oasis Landscaping</td>
            <td className="border p-2">Sustainable native designs with winter cleanups—pressure washing pros. {/* Add-ons: Gutter clears, holiday lights */}</td>
            <td className="border p-2">$200/mo</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-6 text-gray-700">Ready to bundle? Head to <a href="/contact" className="text-blue-500 hover:underline">Contact</a> for a free quote!</p>
    </div>
  );
}