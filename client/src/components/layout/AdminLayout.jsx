import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Images,
  Newspaper,
  MessageSquare,
  Settings,
  Users, 
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

function AdminLayout() {
  const navigate = useNavigate();
  const { admin, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Programs",
      path: "/admin/programs",
      icon: BookOpen,
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: CalendarDays,
    },
    {
      name: "Gallery",
      path: "/admin/gallery",
      icon: Images,
    },
    {
      name: "News",
      path: "/admin/news",
      icon: Newspaper,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: MessageSquare,
    },
    // {
    //   name: "Team",
    //   path: "/admin/team",
    //   icon: Users,
    // },
    // {
    //   name: "Settings",
    //   path: "/admin/settings",
    //   icon: Settings,
    // },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-5">
          <div>
            <h1 className="text-lg font-bold">NGO CMS</h1>
            <p className="text-xs text-slate-400">Administration</p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Management
          </p>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-slate-900"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-800 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Admin Panel
              </p>
              <p className="hidden text-xs text-slate-500 sm:block">
                Manage your NGO website
              </p>
            </div>
          </div>

          {/* Admin Info */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {admin?.name || "Admin"}
              </p>

              <p className="text-xs text-slate-500">
                {admin?.email || ""}
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {admin?.name?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;