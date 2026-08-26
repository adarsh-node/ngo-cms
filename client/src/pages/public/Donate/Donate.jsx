import { Heart, ShieldCheck } from "lucide-react";
import { useState } from "react";

const donationAmounts = [500, 1000, 2500, 5000];

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className="min-h-[80vh] bg-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="mx-auto text-blue-600 mb-4" size={42} />

          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Make a Difference
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Your contribution helps us continue our programs and create
            meaningful change in the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-5">
              Your Support Matters
            </h2>

            <p className="text-slate-300 leading-relaxed mb-8">
              Every contribution, big or small, helps us reach more people
              and strengthen our community programs.
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <ShieldCheck
                  className="text-blue-400 shrink-0"
                  size={22}
                />

                <p className="text-slate-300">
                  Donations will be processed securely.
                </p>
              </div>

              <div className="flex gap-3">
                <Heart
                  className="text-blue-400 shrink-0"
                  size={22}
                />

                <p className="text-slate-300">
                  Your contribution directly supports our initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Donation Amount
            </h2>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`border rounded-lg py-3 font-semibold transition-colors ${
                    selectedAmount === amount
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-700 hover:border-blue-500"
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Or enter a custom amount
              </label>

              <input
                id="customAmount"
                type="number"
                min="1"
                value={customAmount}
                onChange={handleCustomAmount}
                placeholder="₹ Enter amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Donor Details */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="button"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Donate Now
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Payment processing will be enabled when the secure payment
              gateway is connected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Donate;