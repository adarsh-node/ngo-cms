import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-medium">
            <Heart size={16} />
            Creating meaningful change
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Together, We Can Build a
            <span className="text-blue-400"> Better Future</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
            We work with communities to create opportunities, support
            vulnerable people, and build sustainable solutions for a
            better tomorrow.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Support Our Mission
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>

          </div>

        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-10 top-20 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl" />
    </section>
  );
}

export default Hero;