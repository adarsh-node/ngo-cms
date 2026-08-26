import siteConfig from "../../../config/siteConfig";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Email Us",
    value: siteConfig.contact.email,
    description: "We'll get back to you as soon as possible.",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    value: siteConfig.contact.phone,
    description: "Available Monday to Saturday.",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Visit Us",
    value: siteConfig.contact.address,
    description: "Our office and community center.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Office Hours",
    value: siteConfig.contact.officeHours,
    description: "We're happy to meet you during office hours.",
  },
];

function ContactContent() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Information */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              We'd Love to Hear From You
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you have a question, want to volunteer, or would like
              to learn more about our work, feel free to reach out.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-blue-600 font-medium mt-1">
                        {item.value}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7 md:p-8 shadow-sm">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>

              <p className="text-gray-600 mt-2">
                Fill out the form and we'll get back to you.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-xs text-gray-500 text-center">
                This form will be connected to the backend later.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactContent;