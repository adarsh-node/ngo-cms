import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const linkClass = ({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-blue-700" : "text-gray-600 hover:text-gray-900"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e7e1] bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex min-h-[76px] items-center justify-between gap-5">
          <NavLink to="/" onClick={closeMenu} className="max-w-[230px] text-lg font-semibold leading-tight tracking-tight text-gray-900 sm:text-xl">
            {siteConfig.organization.name}
          </NavLink>
          <div className="hidden items-center gap-1 lg:flex">
            {siteConfig.navigation.map((link) => <NavLink key={link.path} to={link.path} end={link.path === "/"} className={linkClass}>{link.label}</NavLink>)}
            <NavLink to="/donate" className="ml-3 inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">Donate</NavLink>
          </div>
          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-50 lg:hidden" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isMenuOpen && <div id="mobile-navigation" className="border-t border-[#e4e7e1] py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.navigation.map((link) => <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={closeMenu} className={linkClass}>{link.label}</NavLink>)}
            <NavLink to="/donate" onClick={closeMenu} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700">Donate</NavLink>
          </div>
        </div>}
      </nav>
    </header>
  );
}

export default Navbar;
