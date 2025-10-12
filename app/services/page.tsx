import Link from 'next/link';

export default function Services() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Services Under One TX Roof</h1>
      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-teal-100">
            <th className="border p-2">DBA</th>
            <th className="border p-2">Key Service</th>
            <th className="border p-2">Price (Res/Comm)</th>
            <th className="border p-2">Bundle Upsell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Top Tech Auto</td>
            <td className="border p-2">Oil Change/Winterization</td>
            <td className="border p-2">$50-100 / $400+ fleet</td>
            <td className="border p-2">+ Gleam Detail 10% off</td>
          </tr>
          <tr>
            <td className="border p-2">Supreme Gleam Detailing</td>
            <td className="border p-2">Full Interior/Exterior</td>
            <td className="border p-2">$150-300 / $500+ bulk</td>
            <td className="border p-2">+ Pressure Wash Add-On</td>
          </tr>
          <tr>
            <td className="border p-2">Thriving Oasis Landscaping</td>
            <td className="border p-2">Winter Cleanup/Pruning</td>
            <td className="border p-2">$250-450 / $1K+ corporate</td>
            <td className="border p-2">+ Gutter Clean Bundle</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mb-8">Mix & Match for Custom TX Packages!</p>
      <Link href="/contact" className="block text-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700">Book Service Now</Link>
    </div>
  );
}