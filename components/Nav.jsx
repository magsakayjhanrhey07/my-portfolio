"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#work-experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="max-w-2xl mx-auto px-6 pt-8 flex items-center justify-between sticky top-0 z-10">
      <span className="text-xs font-bold tracking-widest text-gray-400">
        JHAN RHEY MAGSAKAY
      </span>
      <div className="flex gap-6 text-sm">
        {links.map((l) => {
          const isActive = active === l.href;
          return (
            <a key={l.href} href={l.href} className={isActive ? "text-emerald-400 font-medium transition" : "text-gray-400 hover:text-white transition"}>
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}