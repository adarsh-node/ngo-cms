import { BriefcaseBusiness, Heart } from "lucide-react";

function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-medium">
            <BriefcaseBusiness size={16} />
            Our Programs
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Programs Designed to Create
            <span className="text-blue-400"> Lasting Impact</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
            From education and community support to health and wellbeing,
            our programs focus on practical solutions that help people
            build stronger and more sustainable futures.
          </p>

          <div className="flex items-center gap-3 mt-8 text-slate-300">
            <Heart className="text-blue-400" size={20} />
            <span>
              Empowering people. Strengthening communities.
            </span>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-20 top-16 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl" />
    </section>
  );
}

export default ProgramsHero;