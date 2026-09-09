import { Routes, Route } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";
import Home from "../pages/public/Home/Home";
import About from "../pages/public/About/About";
import Programs from "../pages/public/Programs/Programs";
import Events from "../pages/public/Events/Events";
import Gallery from "../pages/public/Gallery/Gallery";
import News from "../pages/public/News/News";
import Contact from "../pages/public/Contact/Contact";
import Donate from "../pages/public/Donate/Donate";
import NewsDetails from "../pages/public/News/NewsDetails";
import Login from "../pages/admin/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import ProgramsAdmin from "../pages/admin/Programs/Programs";
import EventsAdmin from "../pages/admin/Events/Events";
import GalleryAdmin from "../pages/admin/Gallery/Gallery";
import NewsAdmin from "../pages/admin/News/News";
import Messages from "../pages/admin/Messages/Messages";

import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      /* Public routes */
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<Login />} />
      {/* PROTECTED ADMIN */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/programs" element={<ProgramsAdmin />} />
          <Route path="/admin/events" element={<EventsAdmin />} />
          <Route path="/admin/gallery" element={<GalleryAdmin />} />
          <Route path="/admin/news" element={<NewsAdmin />} />
          <Route path="/admin/messages" element={<Messages />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
