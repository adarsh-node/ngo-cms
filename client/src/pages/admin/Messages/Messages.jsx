import { useEffect, useState } from "react";
import { Mail, MailOpen, Trash2, Eye, X } from "lucide-react";

import {
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} from "../../../api/messagesApi";

import { useAuth } from "../../../context/AuthContext";

function Messages() {
  const { token } = useAuth();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [viewLoading, setViewLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMessages(token);
        setMessages(data);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to load messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

  const handleView = async (id) => {
    try {
      setViewLoading(true);

      const data = await getMessageById(id, token);

      setSelectedMessage(data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load message.");
    } finally {
      setViewLoading(false);
    }
  };

  const handleToggleStatus = async (message) => {
    try {
      const newStatus = message.status === "unread" ? "read" : "unread";

      const updatedMessage = await updateMessage(
        message._id,
        { status: newStatus },
        token,
      );

      setMessages((prevMessages) =>
        prevMessages.map((item) =>
          item._id === message._id ? updatedMessage : item,
        ),
      );

      // Also update the open modal if this message is being viewed
      if (selectedMessage?._id === message._id) {
        setSelectedMessage(updatedMessage);
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to update message status.",
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteMessage(id, token);

      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== id),
      );

      if (selectedMessage?._id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete message.");
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Messages</h1>

        <p className="mt-4 text-sm text-slate-500">Loading messages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Messages</h1>

        <p className="mt-4 text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Messages</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage messages received from the contact form.
          </p>
        </div>

        <div className="rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
          <span className="font-medium text-slate-700">Total:</span>{" "}
          <span className="text-slate-500">{messages.length}</span>
        </div>
      </div>

      {/* Empty State */}
      {messages.length === 0 ? (
        <div className="mt-6 rounded-xl bg-white p-10 text-center shadow-sm">
          <Mail className="mx-auto h-10 w-10 text-slate-400" />

          <h2 className="mt-4 text-lg font-semibold text-slate-700">
            No messages yet
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Messages submitted through the contact form will appear here.
          </p>
        </div>
      ) : (
        /* Messages List */
        <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Sender
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Subject
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Date
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {messages.map((message) => (
                  <tr
                    key={message._id}
                    className={
                      message.status === "unread" ? "bg-slate-50" : "bg-white"
                    }
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">
                        {message.name}
                      </div>

                      <div className="text-sm text-slate-500">
                        {message.email}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-700">
                      {message.subject}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          message.status === "unread"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {message.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleView(message._id)}
                          disabled={viewLoading}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                          title="View message"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleStatus(message)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
                          title={
                            message.status === "unread"
                              ? "Mark as read"
                              : "Mark as unread"
                          }
                        >
                          {message.status === "unread" ? (
                            <MailOpen className="h-4 w-4" />
                          ) : (
                            <Mail className="h-4 w-4" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(message._id)}
                          className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-700 cursor-pointer"
                          title="Delete message"
                        >
                          <Trash2 className="h-4 w-4" />
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
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Message Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
                aria-label="Close message"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="space-y-4 p-6">
              <div>
                <p className="text-xs font-medium uppercase text-slate-500">
                  Name
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {selectedMessage.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {selectedMessage.email}
                </p>
              </div>

              {selectedMessage.phone && (
                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-800">
                    {selectedMessage.phone}
                  </p>
                </div>
              )}

              <div>
                <p className="text-xs font-medium uppercase text-slate-500">
                  Subject
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {selectedMessage.subject}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-slate-500">
                  Message
                </p>

                <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                  {selectedMessage.message}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-slate-500">
                  Received
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
