import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const footerLinks = [
  { name: "About", path: "/about" }, { name: "Programs", path: "/programs" },
  { name: "Events", path: "/events" }, { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" }, { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-[#e4e7e1] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <NavLink to="/" className="text-xl font-semibold tracking-tight text-gray-900">{siteConfig.organization.name}</NavLink>
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">{siteConfig.organization.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Explore</h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              {footerLinks.map((link) => <NavLink key={link.path} to={link.path} className="text-sm text-gray-600 transition-colors hover:text-blue-700">{link.name}</NavLink>)}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Contact</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-600">
              <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-blue-700" />{siteConfig.contact.address}</p>
              <a className="flex items-center gap-3 hover:text-blue-700" href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}><Phone size={17} className="shrink-0 text-blue-700" />{siteConfig.contact.phone}</a>
              <a className="flex items-center gap-3 hover:text-blue-700" href={`mailto:${siteConfig.contact.email}`}><Mail size={17} className="shrink-0 text-blue-700" />{siteConfig.contact.email}</a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Get involved</h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">Your support can help us create a lasting impact in communities.</p>
            <NavLink to="/donate" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700">Donate to our work</NavLink>
          </div>
        </div>
        <div className="mt-10 border-t border-[#e4e7e1] pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.organization.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
