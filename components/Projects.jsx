const projects = [
  {
    title: "Realrate",
    description: "A web app that detects the user's location and displays local currency values and their equivalents in other currencies.",
    tech: ["JavaScript", "HTML/CSS"],
    image: "/money.jpg",
    live: "",
  },
  {
    title: "Gymmo",
    description: "A mobile application designed to help gym owners monitor and track the daily activities and attendance of their gym members.",
    tech: ["Java"],
    image: "/gym.jpg",
    live: "",
  },
  {
    title: "Solar Home",
    description: "A self-built solar energy system installed at home, capable of providing 5.5 kWh of free, renewable electricity — hands-on planning, component selection, and full installation.",
    tech: ["Hardware", "Electrical Systems"],
    image: "/solar.jpg",
    live: "",
  },
  {
    title: "RH Poultry Manager",
    description: "A price management system for a poultry store that allows the owner to add, edit, and delete product listings and monitor updated prices in real time.",
    tech: ["Python", "SQL"],
    image: "/rh.jpg",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-sm font-bold tracking-wide text-gray-200">PROJECTS</h2>
      <div className="grid gap-6 mt-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl overflow-hidden border border-gray-800 bg-[#0f1420] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:shadow-lg hover:shadow-emerald-900/20"
          >
            <div className="p-2 bg-[#0a0e16]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.description}</p>
              <div className="flex gap-2 flex-wrap mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-[#161b22] border border-gray-800 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              {p.live && (
                <div className="flex gap-3 mt-4">
                  <a href={p.live} className="text-xs px-3 py-2 rounded-full bg-[#161b22] border border-gray-700 hover:border-gray-500">
                    Live
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}