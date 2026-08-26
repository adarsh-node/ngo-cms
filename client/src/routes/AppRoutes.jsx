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

import NotFound from "../pages/NotFound";


function AppRoutes() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default AppRoutes;