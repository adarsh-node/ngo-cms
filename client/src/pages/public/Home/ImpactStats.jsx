import impactStats from "../../../data/impactStats";


function ImpactStats() {
  return (
    <section className="border-y border-[#e4e7e1] bg-slate-50 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Together, We Are Making a Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <p className="text-4xl font-semibold tracking-tight text-blue-700 md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ImpactStats;
