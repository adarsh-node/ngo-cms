import { useEffect, useState } from "react";

import { BookOpen, Edit, Plus, Trash2 } from "lucide-react";

import ProgramForm from "./ProgramForm";
import {
  createProgram,
  updateProgram,
  deleteProgram,
} from "../../../api/programsApi";
import { getPrograms } from "../../../api/programsApi";
import { useAuth } from "../../../context/AuthContext";

function Programs() {
  const { token } = useAuth();

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleCreateProgram = async (programData) => {
    setFormLoading(true);

    try {
      const newProgram = await createProgram(programData, token);

      setPrograms((previous) => [newProgram, ...previous]);

      setFormOpen(false);
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteProgram = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this program?",
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      await deleteProgram(id, token);

      setPrograms((previous) =>
        previous.filter((program) => program._id !== id),
      );
    } catch (error) {
      setError(error.response?.data?.message || "Unable to delete program.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleUpdateProgram = async (programData) => {
    setFormLoading(true);

    try {
      const updatedProgram = await updateProgram(
        editingProgram._id,
        programData,
        token,
      );

      setPrograms((previous) =>
        previous.map((program) =>
          program._id === updatedProgram._id ? updatedProgram : program,
        ),
      );

      setFormOpen(false);
      setEditingProgram(null);
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setError("");

        const data = await getPrograms();

        setPrograms(data);
      } catch (error) {
        setError(error.response?.data?.message || "Unable to load programs.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Programs
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage the programs displayed on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setFormOpen(true)}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Plus size={18} />
          Add Program
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
          <p className="text-sm text-slate-500">Loading programs...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && programs.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <BookOpen size={40} className="mx-auto text-slate-300" />

          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            No programs yet
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Create your first program to display it on the website.
          </p>
        </div>
      )}

      {/* Programs Table */}
      {!loading && programs.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Program
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Category
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
                {programs.map((program) => (
                  <tr
                    key={program._id}
                    className="transition hover:bg-slate-50"
                  >
                    {/* Program */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                          <BookOpen size={19} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-900">
                            {program.title}
                          </p>

                          <p className="mt-1 max-w-md truncate text-sm text-slate-500">
                            {program.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {program.category || "—"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          program.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {program.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingProgram(program);
                            setFormOpen(true);
                          }}
                          className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                          aria-label={`Edit ${program.title}`}
                        >
                          <Edit size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteProgram(program._id)}
                          disabled={deletingId === program._id}
                          className="cursor-pointer rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                          aria-label={`Delete ${program.title}`}
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
      <ProgramForm
        isOpen={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditingProgram(null);
        }}
        onSubmit={editingProgram ? handleUpdateProgram : handleCreateProgram}
        initialData={editingProgram}
        loading={formLoading}
      />
    </div>
  );
}

export default Programs;
