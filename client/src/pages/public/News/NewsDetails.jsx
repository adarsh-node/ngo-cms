import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import newsArticles from "../../../data/news";


function NewsDetails() {
  const { id } = useParams();

  const article = newsArticles.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <section className="min-h-[60vh] bg-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            The news article you're looking for doesn't exist.
          </p>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white">

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[450px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-6 pb-12 text-white">

            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 px-3 py-1.5 rounded-full">
                <Tag size={15} />
                {article.category}
              </span>

              <span className="inline-flex items-center gap-2 text-sm text-slate-200">
                <CalendarDays size={16} />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {article.title}
            </h1>

          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to all news
          </Link>
        </div>

      </div>

    </article>
  );
}

export default NewsDetails;