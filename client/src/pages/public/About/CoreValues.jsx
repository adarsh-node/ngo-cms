import {
  Heart,
  ShieldCheck,
  Users,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    id: 1,
    icon: Heart,
    title: "Compassion",
    description:
      "We listen, understand, and act with empathy toward the people and communities we serve.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in transparency, accountability, and responsible use of every resource entrusted to us.",
  },
  {
    id: 3,
    icon: Users,
    title: "Collaboration",
    description:
      "We work with communities, volunteers, and partners because lasting change is stronger when we build it together.",
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously look for practical and sustainable ways to solve problems and increase our impact.",
  },
];

function CoreValues() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Believe
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Our Core Values
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            These principles guide how we work, how we collaborate, and
            how we create meaningful impact.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.id}
                className="group rounded-2xl border border-gray-200 p-7 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoreValues;