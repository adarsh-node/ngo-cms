import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import newsArticles from "../../../data/news";



function NewsGrid() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Latest Updates
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            From Our Community
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Read the latest stories, updates, and highlights from our work.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 text-xs font-semibold text-blue-700 bg-white px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <CalendarDays size={16} />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>

                <Link
  to={`/news/${article.id}`}
  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
>
  Read more
  <ArrowRight size={16} />
</Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsGrid;