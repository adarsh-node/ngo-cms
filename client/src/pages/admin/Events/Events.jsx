import { useEffect, useState } from "react";
import { CalendarDays, Edit, MapPin, Plus, Trash2 } from "lucide-react";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../../api/eventsApi";

import EventForm from "./EventForm";
import { useAuth } from "../../../context/AuthContext";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useAuth();

  const [formOpen, setFormOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setError("");

        const data = await getEvents();

        setEvents(data);
      } catch (error) {
        setError(error.response?.data?.message || "Unable to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = async (eventData) => {
    setFormLoading(true);

    try {
      const newEvent = await createEvent(eventData, token);

      setEvents((previous) => [newEvent, ...previous]);

      setFormOpen(false);
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdateEvent = async (eventData) => {
    setFormLoading(true);

    try {
      const updatedEvent = await updateEvent(
        editingEvent._id,
        eventData,
        token,
      );

      setEvents((previous) =>
        previous.map((event) =>
          event._id === updatedEvent._id ? updatedEvent : event,
        ),
      );

      setFormOpen(false);
      setEditingEvent(null);
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?",
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      await deleteEvent(id, token);

      setEvents((previous) => previous.filter((event) => event._id !== id));
    } catch (error) {
      setError(error.response?.data?.message || "Unable to delete event.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatEventDate = (date) => {
    const eventDate = new Date(date);

    return {
      day: eventDate.toLocaleDateString("en-IN", {
        day: "2-digit",
      }),

      month: eventDate.toLocaleDateString("en-IN", {
        month: "short",
      }),

      year: eventDate.toLocaleDateString("en-IN", {
        year: "numeric",
      }),
    };
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Events
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage the events displayed on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingEvent(null);
            setFormOpen(true);
          }}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-slate-500">Loading events...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && events.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <CalendarDays size={40} className="mx-auto text-slate-300" />

          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            No events yet
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Create your first event to display it on the website.
          </p>
        </div>
      )}

      {/* Events Table */}
      {!loading && events.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Event
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Location
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {events.map((event) => {
                  const formattedDate = formatEventDate(event.date);

                  return (
                    <tr
                      key={event._id}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Event */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                            <CalendarDays size={19} />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-semibold text-slate-900">
                              {event.title}
                            </p>

                            <p className="mt-1 max-w-md truncate text-sm text-slate-500">
                              {event.category || "General"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {formattedDate.day} {formattedDate.month}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formattedDate.year}
                          </p>
                        </div>
                      </td>

                      {/* Location */}
                      <td className="px-6 py-4">
                        <div className="flex max-w-xs items-center gap-2">
                          <MapPin
                            size={16}
                            className="shrink-0 text-slate-400"
                          />

                          <span className="truncate text-sm text-slate-600">
                            {event.location}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                            event.status === "upcoming"
                              ? "bg-green-100 text-green-700"
                              : event.status === "completed"
                                ? "bg-slate-100 text-slate-600"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingEvent(event);
                              setFormOpen(true);
                            }}
                            className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                            aria-label={`Edit ${event.title}`}
                          >
                            <Edit size={17} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteEvent(event._id)}
                            disabled={deletingId === event._id}
                            className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label={`Delete ${event.title}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <EventForm
        isOpen={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditingEvent(null);
        }}
        onSubmit={editingEvent ? handleUpdateEvent : handleCreateEvent}
        initialData={editingEvent}
        loading={formLoading}
      />
    </div>
  );
}

export default Events;
