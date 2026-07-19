const approach = [
  { title: "Test Planning", desc: "Break down requirements into clear, traceable test cases before execution begins." },
  { title: "Manual + Automated", desc: "Combine hands-on exploratory testing with Playwright automation for repeat scenarios." },
  { title: "Bug Documentation", desc: "Log issues with clear repro steps, severity, and expected vs. actual behavior." },
  { title: "Regression Coverage", desc: "Re-verify fixes across browsers before sign-off to catch anything broken downstream." },
];

export default function QAApproach() {
  return (
    <section id="qa-approach" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-sm font-bold tracking-wide text-gray-200">HOW I APPROACH QA</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {approach.map((a) => (
          <div key={a.title} className="p-4 rounded-lg border border-gray-800 bg-[#0f1420]">
            <h3 className="text-sm font-semibold text-emerald-400">{a.title}</h3>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}