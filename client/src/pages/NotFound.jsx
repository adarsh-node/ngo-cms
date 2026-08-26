import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  return (
    <section className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">

        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <SearchX size={32} />
        </div>

        <p className="text-7xl md:text-8xl font-bold text-blue-600">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Sorry, the page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;