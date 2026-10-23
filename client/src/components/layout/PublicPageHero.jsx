function PublicPageHero({ icon: Icon, eyebrow, title, accent, description, noteIcon: NoteIcon, note }) {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-blue-700">
            {Icon && <Icon size={17} aria-hidden="true" />}
            {eyebrow}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-900 sm:text-5xl">
            {title} {accent && <span className="text-blue-700">{accent}</span>}
          </h1>
        </div>
        <div className="max-w-xl lg:pb-1">
          <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{description}</p>
          {note && <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-800">
            {NoteIcon && <NoteIcon size={18} aria-hidden="true" />}
            {note}
          </p>}
        </div>
      </div>
    </section>
  );
}

export default PublicPageHero;
