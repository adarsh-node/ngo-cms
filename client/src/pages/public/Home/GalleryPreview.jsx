import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import galleryItems from "../../../data/gallery";



function GalleryPreview() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Our Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Moments That Matter
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            View full gallery
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;