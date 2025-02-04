import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
      <h1 className="text-6xl text-gray-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 no-underline px-4 py-2 border-2 border-blue-600 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white">
        Return to Home
      </Link>
    </div>
  );
}
