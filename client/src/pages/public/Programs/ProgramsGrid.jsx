import {
  BookOpen,
  HeartHandshake,
  Droplets,
  Users,
  BriefcaseBusiness,
  Leaf,
} from "lucide-react";
import programs from "../../../data/programs";

const iconMap = {
  BookOpen,
  HeartHandshake,
  Droplets,
  Users,
  BriefcaseBusiness,
  Leaf,
};

function ProgramsGrid() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Our Programs
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Explore the areas where we work to create opportunities and
            strengthen communities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = iconMap[program.icon] || BookOpen;

            return (
              <article
                key={program.id}
                className="group bg-white rounded-2xl border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={27} />
                  </div>

                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                    {program.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProgramsGrid;
