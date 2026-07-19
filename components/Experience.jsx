const jobs = [
  {
    period: "OJT",
    role: "Junior QA Engineer",
    company: "Rt Lawrence Philippine Branch",
    bullets: [
      "Performed manual functional and regression testing on multiple client websites, identifying and logging bugs across UI, forms, and navigation flows.",
      "Collaborated on automating website testing using Playwright alongside manual test coverage, helping validate repeat scenarios faster and more consistently.",
      "Verified bug fixes and re-tested updated builds before deployment, ensuring consistent functionality across browsers.",
      "Updated and maintained test documentation, helping keep systems efficient and up to date for the team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work-experience" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-sm font-bold tracking-wide text-gray-200">WORK EXPERIENCE</h2>
      <div className="mt-4 space-y-6">
        {jobs.map((job) => (
          <div key={job.role} className="grid grid-cols-[80px_1fr] gap-4">
            <p className="text-sm text-emerald-400">{job.period}</p>
            <div>
              <h3 className="font-semibold text-white">{job.role}</h3>
              <p className="text-sm text-gray-500 italic">{job.company}</p>
              <ul className="text-gray-400 mt-2 text-sm leading-relaxed list-disc list-inside space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}