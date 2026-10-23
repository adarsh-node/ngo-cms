import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import siteConfig from "../../../config/siteConfig";
import { getGallery } from "../../../api/galleryApi.js";

function Hero() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    let active = true;
    getGallery()
      .then((items) => {
        if (active && items?.[0]?.image) setImage({ src: items[0].image, alt: items[0].title || "" });
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  return (
    <section className="overflow-hidden bg-[#f7f7f2]">
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:gap-16 lg:px-8 lg:py-24 ${image ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-1"}`}>
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-blue-700">
            <Heart size={16} aria-hidden="true" /> {siteConfig.organization.tagline}
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-900 sm:text-5xl lg:text-[3.65rem]">
            Together, we can build a <span className="text-blue-700">better future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {siteConfig.organization.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/donate" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Support our mission <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/about" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d5dbd3] bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-[#f1f3ee]">
              Get to know us
            </Link>
          </div>
          <a href="#our-work" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700">
            Explore our work <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        {image && <div className="relative min-h-[300px] overflow-hidden rounded-[1.25rem] bg-[#e5ebe4] sm:min-h-[390px] lg:min-h-[470px]">
          <img src={image.src} alt={image.alt} onError={() => setImage(null)} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
            <p className="text-sm font-medium text-white/80">Working alongside communities</p>
            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">Small steps. Shared progress.</p>
          </div>
        </div>}
      </div>
    </section>
  );
}

export default Hero;
