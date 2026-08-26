import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function SupportSection() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
          <Heart size={28} />
        </div>

        <p className="text-blue-100 font-semibold uppercase tracking-wider text-sm mb-3">
          Make A Difference
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Together, We Can Create a Better Future
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed mb-8">
          Your support helps us reach more people, strengthen communities,
          and create opportunities for a better tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Donate Now
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/50 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get Involved
          </Link>

        </div>

      </div>
    </section>
  );
}

export default SupportSection;