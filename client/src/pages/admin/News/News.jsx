import { useEffect, useState } from "react";
import { Edit, FileText, Plus, Trash2 } from "lucide-react";

import {
  getAdminNews,
  createNews,
  updateNews,
  deleteNews,
} from "../../../api/newsApi";
import NewsForm from "./NewsForm";
import { useAuth } from "../../../context/AuthContext";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token } = useAuth();

  const [formOpen, setFormOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setError("");

        const data = await getAdminNews(token);

        setNews(data);
      } catch (error) {
        setError(error.response?.data?.message || "Unable to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleCreateNews = async (newsData) => {
    setFormLoading(true);

    try {
      const newArticle = await createNews(newsData, token);

      setNews((previous) => [newArticle, ...previous]);

      setFormOpen(false);
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdateNews = async (newsData) => {
  setFormLoading(true);

  try {
    const updatedArticle = await updateNews(
      editingNews._id,
      newsData,
      token
    );

    setNews((previous) =>
      previous.map((article) =>
        article._id === updatedArticle._id
          ? updatedArticle
          : article
      )
    );

    setFormOpen(false);
    setEditingNews(null);
  } catch (error) {
    throw error;
  } finally {
    setFormLoading(false);
  }
};

const handleDeleteNews = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this news article?"
  );

  if (!confirmed) {
    return;
  }

  setDeletingId(id);

  try {
    await deleteNews(id, token);

    setNews((previous) =>
      previous.filter((article) => article._id !== id)
    );
  } catch (error) {
    setError(
      error.response?.data?.message ||
        "Unable to delete news article."
    );
  } finally {
    setDeletingId(null);
  }
};

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            News
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage news and articles displayed on your website.
          </p>
        </div>

        <button
  type="button"
  onClick={() => {
    setEditingNews(null);
    setFormOpen(true);
  }}
  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
>
  <Plus size={18} />
  Add News
</button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-slate-500">Loading news...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && news.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <FileText size={40} className="mx-auto text-slate-300" />

          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            No news articles yet
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Create your first article to publish it on the website.
          </p>
        </div>
      )}

      {/* News Table */}
      {!loading && news.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Article
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Category
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Author
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {news.map((article) => (
                  <tr
                    key={article._id}
                    className="transition hover:bg-slate-50"
                  >
                    {/* Article */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                          {article.image ? (
                            <img
                              src={article.image}
                              alt={article.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-slate-400">
                              <FileText size={19} />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-900">
                            {article.title}
                          </p>

                          <p className="mt-1 max-w-md truncate text-sm text-slate-500">
                            {article.excerpt || article.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {article.category || "General"}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {article.author || "Admin"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          article.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
  type="button"
  onClick={() => {
    setEditingNews(article);
    setFormOpen(true);
  }}
  className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
  aria-label={`Edit ${article.title}`}
>
  <Edit size={17} />
</button>

                        <button
  type="button"
  onClick={() => handleDeleteNews(article._id)}
  disabled={deletingId === article._id}
  className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
  aria-label={`Delete ${article.title}`}
>
  <Trash2 size={17} />
</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <NewsForm
  isOpen={formOpen}
  onClose={() => {
    setFormOpen(false);
    setEditingNews(null);
  }}
  onSubmit={
    editingNews
      ? handleUpdateNews
      : handleCreateNews
  }
  initialData={editingNews}
  loading={formLoading}
/>
    </div>
  );
}

export default News;
