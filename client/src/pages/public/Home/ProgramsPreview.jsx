import {
  BookOpen,
  HeartHandshake,
  Droplets,
  ArrowRight,
  Users,
  BriefcaseBusiness,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";
import programs from "../../../data/programs";


const iconMap = {
  BookOpen,
  HeartHandshake,
  Droplets,
  Users,
  BriefcaseBusiness,
  Leaf,
};

function ProgramsPreview() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programs That Create Real Impact
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our programs focus on practical solutions that empower
              individuals and strengthen communities.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors whitespace-nowrap"
          >
            View all programs
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <article
                key={program.id}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProgramsPreview;