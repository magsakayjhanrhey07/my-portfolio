const certificates = [
  { name: "Ethical Hacker Certificate", org: "Cisco Networking Academy" },
  { name: "AI Basics: Overview of AI Certificate", org: "Huawei Talent" },
  { name: "HCIA - AI V3.5 Course Certificate", org: "Huawei Talent" },
  { name: "Information Representation and Data Organization Certificate", org: "Huawei Talent" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-sm font-bold tracking-wide text-gray-200">CERTIFICATES</h2>
      <div className="grid sm:grid-cols-2 gap-3 mt-6">
        {certificates.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-lg border border-gray-800 bg-[#0f1420] hover:border-gray-600 transition"
          >
            <p className="text-sm text-white font-medium">{c.name}</p>
            <p className="text-xs text-gray-500 mt-1">{c.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}