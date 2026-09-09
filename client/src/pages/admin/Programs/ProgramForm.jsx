import { useEffect, useState } from "react";
import { X } from "lucide-react";

function ProgramForm({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  loading = false,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    icon: "BookOpen",
    image: "",
    status: "active",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "",
        icon: initialData.icon || "BookOpen",
        image: initialData.image || "",
        status: initialData.status || "active",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        category: "",
        icon: "BookOpen",
        image: "",
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
      setError("Program title is required.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Program description is required.");
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to save program."
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
              {initialData ? "Edit Program" : "Add Program"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {initialData
                ? "Update this program."
                : "Create a new program for your website."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label
              htmlFor="program-title"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Title
            </label>

            <input
              id="program-title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Education Support Program"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="program-category"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Category
            </label>

            <input
              id="program-category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              placeholder="Education"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="program-description"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="program-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what this program does..."
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Icon */}
          <div>
            <label
              htmlFor="program-icon"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Icon
            </label>

            <select
              id="program-icon"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              <option value="BookOpen">Book Open</option>
              <option value="HeartHandshake">
                Heart Handshake
              </option>
              <option value="Droplets">Droplets</option>
              <option value="Users">Users</option>
              <option value="BriefcaseBusiness">
                Briefcase
              </option>
              <option value="Leaf">Leaf</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="program-image"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Image URL
            </label>

            <input
              id="program-image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/program-image.jpg"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />

            <p className="mt-1.5 text-xs text-slate-500">
              Image uploading will be added later with Cloudinary.
            </p>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="program-status"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Status
            </label>

            <select
              id="program-status"
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
              className="rounded-lg cursor-pointer border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100  disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg cursor-pointer bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : initialData
                  ? "Update Program"
                  : "Create Program"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProgramForm;