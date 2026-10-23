import { ArrowRight, HandHeart, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  { icon: Users, title: "Community first", description: "We listen and work alongside people to understand local needs." },
  { icon: Target, title: "Long-term thinking", description: "Our programs focus on practical, lasting improvements." },
  { icon: HandHeart, title: "Shared effort", description: "Volunteers, supporters, and community members make progress together." },
];

function AboutPreview() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">Who we are</p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Stronger communities begin with people working together.
            </h2>
            <Link to="/about" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
              Learn more about us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              We believe lasting change begins when people come together. Our mission is to support communities, create opportunities, and empower individuals to build a better future.
            </p>
            <div className="mt-8 divide-y divide-[#e4e7e1] border-y border-[#e4e7e1]">
              {principles.map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="grid grid-cols-[40px_1fr] gap-4 py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <span className="pt-0.5 text-sm font-medium tabular-nums text-[#8b938c]">0{index + 1}</span>
                  <div className="flex gap-4">
                    <Icon size={20} className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
