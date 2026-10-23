import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function SupportSection() {
  return (
    <section className="bg-[#f7f7f2] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#194f38] px-6 py-12 text-white sm:px-12 sm:py-16">

        <div className="mx-auto max-w-4xl text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
          <Heart size={28} />
        </div>

        <p className="text-[#c6ddcc] font-semibold uppercase tracking-wider text-sm mb-3">
          Make A Difference
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Together, We Can Create a Better Future
        </h2>

        <p className="max-w-2xl mx-auto text-[#e0ebe3] text-lg leading-relaxed mb-8">
          Your support helps us reach more people, strengthen communities,
          and create opportunities for a better tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/donate"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#194f38] transition-colors hover:bg-[#edf5f0]"
          >
            Donate Now
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/50 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
          >
            Get Involved
          </Link>

        </div>

      </div>
      </div>
    </section>
  );
}

export default SupportSection;
