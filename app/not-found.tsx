import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you&apos;re looking for doesn&apos;t exist. Head back to the oasis!</p>
      <Link href="/" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700">Return Home</Link>
    </div>
  );
}