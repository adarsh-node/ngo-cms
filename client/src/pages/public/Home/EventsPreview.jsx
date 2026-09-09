import { useEffect, useState } from "react";

import {
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { getEvents } from "../../../api/eventsApi.js";


function EventsPreview() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();

        setEvents(data);
      } catch (error) {
        console.error(error);

        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Upcoming Events
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us in the Community
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Participate in our upcoming activities and help us create
              positive change together.
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors whitespace-nowrap"
          >
            View all events
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600">
            Loading events...
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-600">
            {error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && events.length === 0 && (
          <p className="text-center text-gray-600">
            No upcoming events at the moment.
          </p>
        )}

        {/* Events */}
        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event) => {
              const eventDate = new Date(event.date);

              const day = eventDate.toLocaleDateString("en-IN", {
                day: "2-digit",
              });

              const month = eventDate.toLocaleDateString("en-IN", {
                month: "short",
              });

              const year = eventDate.toLocaleDateString("en-IN", {
                year: "numeric",
              });

              return (
                <article
                  key={event._id}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Date */}
                  <div className="bg-blue-600 text-white px-6 py-5 flex items-center gap-4">
                    <div className="text-center border-r border-blue-400 pr-4">
                      <p className="text-3xl font-bold leading-none">
                        {day}
                      </p>

                      <p className="text-sm font-semibold mt-1">
                        {month}
                      </p>

                      <p className="text-sm font-semibold mt-1">
                        {year}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} />

                      <span className="text-sm font-medium">
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
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

                    <Link
                      to="/events"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View event
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

export default EventsPreview;