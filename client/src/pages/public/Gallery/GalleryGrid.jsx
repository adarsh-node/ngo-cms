import galleryItems from "../../../data/gallery";


function GalleryGrid() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Moments That Matter
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            A glimpse into the people, programs, and activities that make
            our work possible.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-xs font-semibold text-blue-200 bg-blue-900/60 px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>

                <h3 className="text-white text-lg font-bold">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GalleryGrid;