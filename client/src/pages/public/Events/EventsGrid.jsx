import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import events from "../../../data/events";


function EventsGrid() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What's Happening
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Upcoming Events
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover upcoming activities and find opportunities to
            participate in our community initiatives.
          </p>
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Event Header */}
              <div className="bg-blue-600 text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">

                  <div className="text-center border-r border-blue-400 pr-4">
                    <p className="text-3xl font-bold leading-none">
                      {event.day}
                    </p>

                    <p className="text-xs font-semibold mt-1">
                      {event.month}
                    </p>

                    <p className="text-xs text-blue-100">
                      {event.year}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-blue-100 text-sm">
                      <CalendarDays size={16} />
                      <span>{event.status}</span>
                    </div>
                  </div>

                </div>

                <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full">
                  {event.category}
                </span>
              </div>

              {/* Event Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Footer */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={16} />
                    <span>Open to all</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Get involved
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default EventsGrid;