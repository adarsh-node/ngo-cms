import { ArrowRight, Users, Target, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Users,
    title: "Community First",
    description:
      "We work closely with communities to understand their needs and create meaningful solutions.",
  },
  {
    icon: Target,
    title: "Sustainable Impact",
    description:
      "Our programs focus on long-term improvements rather than short-term solutions.",
  },
  {
    icon: HandHeart,
    title: "Together We Help",
    description:
      "Volunteers, donors, and community members come together to create lasting change.",
  },
];

function AboutPreview() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Building stronger communities through meaningful action
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that lasting change begins when people come together.
            Our mission is to support communities, create opportunities,
            and empower individuals to build a better future.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Learn More */}
        <div className="mt-10">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Learn more about us
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;