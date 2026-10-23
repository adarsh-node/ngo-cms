import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function OurStory() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Story Content */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Small Steps Can Create Lasting Change
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Our journey began with a simple belief: meaningful change
                starts when people come together to support one another.
              </p>

              <p>
                Over time, that belief has grown into a community-focused
                organization working across education, wellbeing, and
                community development.
              </p>

              <p>
                Today, we continue to work alongside communities, volunteers,
                and supporters to create opportunities and build sustainable
                solutions for the future.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get in touch with us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Visual / Timeline */}
          <div className="relative">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-10">

              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarDays size={24} />
                </div>

                <div>
                  <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider">
                    Our Journey
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Growing Together
                  </h3>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-7">

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Community Beginnings
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Started with a focus on understanding and responding
                      to local community needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Expanding Our Programs
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Introduced initiatives focused on education, support,
                      and community development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Building the Future
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Continuing to collaborate with communities and
                      supporters to create sustainable impact.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurStory;
