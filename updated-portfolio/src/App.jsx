import React, { useState, useRef } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();

      if (command === "sudo rm -rf / --no-preserve-root") {
        setIsDeleted(true);
      } else if (command === "cat introduction.txt") {
        setTerminalOutput(
          "I'm a developer who loves basically anything tech related. From microcontrollers to web development, Linux to game design. I love to learn about CS and its branches. Feel free to explore my website to see some of my projects and learn more about me! ... - Aaron",
        );
      } else if (command === "clear") {
        setTerminalOutput("");
      } else if (command === "ls skills/") {
        setTerminalOutput(
          "Java\nHTML + CSS\nPython\nGDScript\nLinux\nintroduction.txt",
        );
      } else if (command === "/gamemode creative") {
        setTerminalOutput(
          "Your game mode has been updated to Creative Mode. (Warning: Flight not supported in this browser)",
        );
      } else if (command === "help") {
        setTerminalOutput(
          "Available commands: ls skills/, cat introduction.txt, clear, /gamemode creative",
        );
      } else {
        setTerminalOutput(`bash: ${command}: command not found`);
      }

      setInput("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simple UI feedback without external API calls
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (isDeleted) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono p-4 text-center">
        <p className="text-red-500 mb-4 animate-pulse uppercase tracking-tighter">
          [!] System wiped. Root directory not found.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all uppercase text-xs font-bold"
        >
          Reboot System
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 scroll-smooth">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.2] bg-[linear-gradient(to_right,theme(colors.indigo.200)_3px,transparent_3px),linear-gradient(to_bottom,theme(colors.indigo.400)_3px,transparent_1px)] bg-[size:40px_40px] animate-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between border-b border-white/5 h-20 px-8 bg-slate-950/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="font-bold tracking-tighter uppercase text-lg">
              Aaron's Website
            </span>
          </div>
          <div className="hidden sm:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="text-2xl sm:hidden z-[70]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "≡"}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      {open && (
        <div className="fixed top-20 right-0 bottom-0 w-full sm:w-[450px] z-[60] bg-slate-950/98 border-l border-white/10 backdrop-blur-xl flex flex-col p-12 gap-10 animate-in slide-in-from-right duration-300">
          <nav className="flex flex-col gap-12 mt-10">
            {["home", "projects", "contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-slate-200 hover:text-blue-500 hover:translate-x-2 transition-all duration-300"
              >
                <span className="text-sm font-mono text-slate-600 mr-4">
                  0{index + 1}.
                </span>
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center p-8"
        >
          <div className="text-center mb-12 pt-20">
            <h1 className="text-4xl sm:text-7xl font-bold mb-4 hover:text-blue-500 transition-colors tracking-tight">
              // Welcome
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Aspiring Developer
            </p>
          </div>

          <div
            className="w-full max-w-2xl bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">
                bash
              </span>
              <div className="w-12"></div>
            </div>

            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
              <div className="flex gap-2 text-indigo-400">
                <span>aaron@portfolio:~$</span>
                <span className="text-white font-bold tracking-wide">
                  ls skills/
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 ml-4 text-slate-400 mb-6 font-medium">
                <span>→ Java</span>
                <span>→ HTML + CSS</span>
                <span>→ Python</span>
                <span>→ GDScript</span>
                <span>→ Linux</span>
                <span>→ introduction.txt</span>
              </div>

              {terminalOutput && (
                <div className="text-slate-300 mb-6 p-3 bg-white/5 border-l-2 border-indigo-500 whitespace-pre-wrap animate-in fade-in slide-in-from-left-2">
                  {terminalOutput}
                </div>
              )}

              <div className="flex gap-2 text-indigo-400">
                <span>aaron@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  autoFocus
                  autoComplete="off"
                  className="bg-transparent border-none outline-none text-white flex-1 font-mono focus:ring-0"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section (Bento Grid) */}
        <section id="projects" className="max-w-7xl mx-auto py-24 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="md:row-span-2 md:col-span-1 bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-500">Portfolio</h3>
                <span className="text-[9px] font-mono border border-blue-500/30 px-2 py-0.5 rounded text-blue-400 uppercase">
                  React // Tailwind
                </span>
              </div>
              <p className="text-slate-400 text-sm flex-grow">
                My updated portfolio website built to showcase my projects and
                skills.
              </p>
              <ul className="list-disc ml-5 text-xs text-slate-500 space-y-2 mt-4">
                <li>Interactive terminal interface</li>
                <li>Responsive modern UI</li>
                <li>Bento-style grid</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-all flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-200 mb-2">
                Project 2
              </h3>
              <p className="text-slate-400 text-sm italic">
                Nothing here yet... Check back soon!
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-all flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-200 mb-2">
                Project 3
              </h3>
              <p className="text-slate-400 text-sm italic">
                Nothing here yet... Check back soon!
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-all overflow-hidden flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-emerald-500">
                  KernelCraft
                </h3>
                <span className="text-[9px] font-mono border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400 uppercase">
                  Java // Linux
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Multiplayer network built to master Linux server management and
                Java development.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-400 text-xs ml-4 list-disc">
                <li>Deployed Velocity proxy for single-entry networking</li>
                <li>Programmed custom Java plugins for mechanics</li>
                <li>Resolved complex handshake protocols</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto py-24 px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Let's Build Something{" "}
                <span className="text-blue-500">Great</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I'm currently available for freelance work and junior developer
                positions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    📧
                  </div>
                  <span>aaronserpytis2@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                    📍
                  </div>
                  <span>England, United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {submitted && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 text-center p-6 animate-in zoom-in-95 z-20">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Logged
                  </h3>
                  <p className="text-slate-400 text-sm font-mono uppercase tracking-tighter">
                    [Local Storage Only - No Uplink]
                  </p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    name="user_name"
                    type="text"
                    placeholder="Name"
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                  />
                  <input
                    required
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <select
                  name="subject"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all text-slate-400 appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Job Opportunity</option>
                </select>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 text-center py-12 text-slate-600 text-[10px] uppercase tracking-widest border-t border-white/5 mx-8">
        &copy; {new Date().getFullYear()} Aaron — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
