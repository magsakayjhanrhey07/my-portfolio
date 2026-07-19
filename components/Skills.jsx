const skills = [
  { name: "Manual Testing", icon: "🔍", color: "bg-emerald-700" },
  { name: "Playwright", icon: "🎭", color: "bg-[#161b22]" },
  { name: "Regression Testing", icon: "🔁", color: "bg-emerald-700" },
  { name: "Bug Tracking", icon: "🐞", color: "bg-emerald-700" },
  { name: "SQL", icon: "🗄️", color: "bg-blue-700" },
  { name: "Python", icon: "🐍", color: "bg-yellow-600" },
  { name: "Java", icon: "☕", color: "bg-red-700" },
  { name: "JavaScript", icon: "JS", color: "bg-yellow-500 text-black" },
  { name: "HTML/CSS", icon: "🌐", color: "bg-orange-600" },
  { name: "Git", icon: "🔀", color: "bg-[#161b22]" },
  { name: "GitHub", icon: "🐙", color: "bg-[#161b22]" },
  { name: "Visual Studio", icon: "🛠️", color: "bg-purple-700" },
];
export default function Skills() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-sm font-bold tracking-wide text-gray-200">TESTING TOOLS & SKILLS</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-800 bg-[#0f1420] hover:border-gray-600 transition"
          >
            <span className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-bold ${s.color}`}>
              {s.icon}
            </span>
            <span className="text-xs text-gray-400 text-center">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}