import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0c10] text-white selection:bg-blue-500/30 scroll-smooth">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>

      {/* 1. HEADER & NAV */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between border-b border-white/5 h-20 px-8 bg-[#0a0c10]/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="font-bold tracking-tighter uppercase text-lg">
              Aaron's Website
            </span>
          </div>

          <div className="hidden sm:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a
              href="#capabilities"
              className="hover:text-blue-500 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#gallery"
              className="hover:text-blue-500 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="text-2xl sm:hidden outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "≡"}
          </button>
        </nav>

        {open && (
          <div className="flex flex-col items-center gap-6 bg-[#0a0c10] border-b border-white/5 py-8 sm:hidden backdrop-blur-md">
            {["Home", "Capabilities", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
      {/* 2. MAIN CONTENT */}
      <main className="relative z-10">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center p-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="text-lg text-slate-400">
              This is a simple React app with Tailwind CSS styling.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
