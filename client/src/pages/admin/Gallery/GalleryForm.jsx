import { useEffect, useState } from "react";
import { X } from "lucide-react";

function GalleryForm({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  loading = false,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    status: "active",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        category: initialData.category || "",
        image: initialData.image || "",
        description: initialData.description || "",
        status: initialData.status || "active",
      });
    } else {
      setFormData({
        title: "",
        category: "",
        image: "",
        description: "",
        status: "active",
      });
    }

    setError("");
  }, [initialData, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!formData.title.trim()) {
      setError("Image title is required.");
      return;
    }

    if (!formData.image.trim()) {
      setError("Image URL is required.");
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to save gallery item."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {initialData ? "Edit Gallery Image" : "Add Gallery Image"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {initialData
                ? "Update this gallery item."
                : "Add a new image to your website gallery."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="cursor-pointer rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label
              htmlFor="gallery-title"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Title
            </label>

            <input
              id="gallery-title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Community Health Camp"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="gallery-category"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Category
            </label>

            <input
              id="gallery-category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              placeholder="Health"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="gallery-image"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Image URL
            </label>

            <input
              id="gallery-image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />

            <p className="mt-1.5 text-xs text-slate-500">
              Image uploading will be added later with Cloudinary.
            </p>
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">
                Preview
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={formData.image}
                  alt="Gallery preview"
                  className="h-48 w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <label
              htmlFor="gallery-description"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="gallery-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly describe this image..."
              rows={4}
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="gallery-status"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Status
            </label>

            <select
              id="gallery-status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="cursor-pointer rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : initialData
                  ? "Update Image"
                  : "Add Image"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GalleryForm;