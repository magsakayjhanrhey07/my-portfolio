export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 pt-12 pb-16 border-t border-gray-800">
      <h2 className="text-sm font-bold tracking-wide text-gray-200 mt-8">CONTACT</h2>
      <p className="text-gray-400 mt-4 max-w-md">
        Open to Junior QA Engineer roles — feel free to reach out directly.
      </p>
      <div className="flex flex-wrap gap-3 mt-5">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=MagsakayJhanrhey07@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-[#161b22] border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition">
          Email: MagsakayJhanrhey07@gmail.com
        </a>
        <a href="tel:+639364529721" className="text-sm px-4 py-2 rounded-full bg-[#161b22] border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition">
          Phone: +63 936 452 9721
        </a>
      </div>
    </section>
  );
}