import { CalendarDays, Users } from "lucide-react";

function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-medium">
            <CalendarDays size={16} />
            Community Events
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Come Together and
            <span className="text-blue-400"> Make an Impact</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
            Join our community events, workshops, campaigns, and activities.
            Every event is an opportunity to connect, contribute, and create
            positive change.
          </p>

          <div className="flex items-center gap-3 mt-8 text-slate-300">
            <Users className="text-blue-400" size={20} />
            <span>
              Everyone can be part of the change.
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

export default EventsHero;