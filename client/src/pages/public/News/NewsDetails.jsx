import { useEffect, useState } from "react";

import {
  ArrowLeft,
  CalendarDays,
  Tag,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { getNewsById } from "../../../api/newsApi.js";


function NewsDetails() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getNewsById(id);

        setArticle(data);
      } catch (error) {
        console.error(error);

        setError("Article not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-[60vh] bg-slate-50 flex items-center justify-center px-6">
        <p className="text-gray-600">
          Loading article...
        </p>
      </section>
    );
  }

  if (error || !article) {
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

  const articleDate = new Date(article.createdAt);

  const formattedDate = articleDate.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <article className="bg-white">

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[450px] overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-6 pb-12 text-white">

            <div className="flex flex-wrap items-center gap-4 mb-5">

              {article.category && (
                <span className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 px-3 py-1.5 rounded-full">
                  <Tag size={15} />
                  {article.category}
                </span>
              )}

              <span className="inline-flex items-center gap-2 text-sm text-slate-200">
                <CalendarDays size={16} />
                {formattedDate}
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
          <p>
            {article.description}
          </p>
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