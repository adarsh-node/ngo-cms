import { useEffect, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Images,
  Newspaper,
  MessageSquare,
  Mail,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { getDashboardStats } from "../../../api/dashboardApi";
import { useAuth } from "../../../context/AuthContext";

function Dashboard() {
  const { token } = useAuth();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setError("");

        const data = await getDashboardStats(token);

        setStats(data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load dashboard statistics."
        );
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchStats();
    }
  }, [token]);

  const statCards = [
    {
      title: "Programs",
      value: stats?.programs ?? 0,
      icon: BookOpen,
      link: "/admin/programs",
    },
    {
      title: "Events",
      value: stats?.events ?? 0,
      icon: CalendarDays,
      link: "/admin/events",
    },
    {
      title: "Gallery",
      value: stats?.gallery ?? 0,
      icon: Images,
      link: "/admin/gallery",
    },
    {
      title: "News",
      value: stats?.news ?? 0,
      icon: Newspaper,
      link: "/admin/news",
    },
    {
      title: "Messages",
      value: stats?.messages ?? 0,
      icon: MessageSquare,
      link: "/admin/messages",
    },
    {
      title: "Unread Messages",
      value: stats?.unreadMessages ?? 0,
      icon: Mail,
      link: "/admin/messages",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your NGO website.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              to={card.link}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {card.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {loading ? "—" : card.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon size={21} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-slate-900">
                Manage
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/admin/programs"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <Plus size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Add Program
              </p>

              <p className="text-xs text-slate-500">
                Create a new program
              </p>
            </div>
          </Link>

          <Link
            to="/admin/events"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <Plus size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Add Event
              </p>

              <p className="text-xs text-slate-500">
                Create a new event
              </p>
            </div>
          </Link>

          <Link
            to="/admin/gallery"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <Plus size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Add Image
              </p>

              <p className="text-xs text-slate-500">
                Add to gallery
              </p>
            </div>
          </Link>

          <Link
            to="/admin/news"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <Plus size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Add News
              </p>

              <p className="text-xs text-slate-500">
                Publish an article
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Message Summary */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Messages
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              You have{" "}
              <span className="font-semibold text-slate-900">
                {loading ? "—" : stats?.unreadMessages ?? 0}
              </span>{" "}
              unread messages.
            </p>
          </div>

          <Link
            to="/admin/messages"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Messages
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;