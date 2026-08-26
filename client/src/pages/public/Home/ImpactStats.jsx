import impactStats from "../../../data/impactStats";


function ImpactStats() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-blue-100 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Together, We Are Making a Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold">
                {stat.value}
              </p>

              <p className="mt-2 text-blue-100">
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