import { Eye, Target } from "lucide-react";

const content = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to empower individuals and communities by creating access to education, essential support, and opportunities that can lead to a better quality of life.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "We envision inclusive and resilient communities where every individual has the opportunity to learn, grow, participate, and build a better future.",
  },
];

function MissionVision() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What Drives Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Everything we do is guided by a commitment to creating
            opportunities and building stronger communities.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default MissionVision;