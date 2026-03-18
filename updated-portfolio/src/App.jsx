import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");

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
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.2] bg-[linear-gradient(to_right,theme(colors.indigo.200)_3px,transparent_3px),linear-gradient(to_bottom,theme(colors.indigo.400)_3px,transparent_1px)] bg-[size:40px_40px] animate-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

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
          <button className="text-2xl sm:hidden" onClick={() => setOpen(!open)}>
            {open ? "✕" : "≡"}
          </button>
        </nav>
      </header>

      <main className="relative z-10">
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

          <div className="w-full max-w-2xl bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[10px] uppercase text-slate-500 font-bold">
                bash
              </span>
              <div className="w-12"></div>
            </div>

            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
              <div className="flex gap-2 text-indigo-400">
                <span>aaron@portfolio:~$</span>
                <span className="text-white">ls skills/</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 ml-4 text-slate-400 mb-6">
                <span>→ Java</span>
                <span>→ HTML + CSS</span>
                <span>→ Python</span>
                <span>→ GDScript</span>
                <span>→ Linux</span>
                <span>→ introduction.txt</span>
              </div>

              {terminalOutput && (
                <div className="text-slate-300 mb-6 p-3 bg-white/5 border-l-2 border-indigo-500 whitespace-pre-wrap">
                  {terminalOutput}
                </div>
              )}

              <div className="flex gap-2 text-indigo-400">
                <span>aaron@portfolio:~$</span>
                <input
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
      </main>

      <section id="projects" className="max-w-7xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {/* BOX 1 */}
          <div className="md:row-span-2 md:col-span-1 bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-colors flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-blue-500">Portfolio</h3>
              <span className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
                React // Tailwind
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              My updated portfolio website built to showcase my{" "}
              <strong>projects</strong> and <strong>skills</strong>.
              <ul className="list-disc ml-5 mt-6 space-y-3">
                <li>Interactive terminal interface</li>
                <li>Responsive design with modern UI</li>
                <li>Bento-style project grid</li>
                <li>Built with React and Tailwind CSS</li>
              </ul>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-colors flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-200">Project 2</h3>
              <span className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
                Dev // WIP
              </span>
            </div>
            <p className="text-slate-400 text-sm italic">
              Nothing here yet... Check back soon for a new project showcase!
            </p>
          </div>

          {/* BOX 3 */}
          <div className="bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-colors flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-200">Project 3</h3>
              <span className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
                Dev // WIP
              </span>
            </div>
            <p className="text-slate-400 text-sm italic">
              Nothing here yet... Check back soon for a new project showcase!
            </p>
          </div>

          {/* BOX 4 */}
          <div className="md:col-span-2 bg-slate-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-900/70 transition-colors overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-emerald-500">
                KernelCraft
              </h3>
              <span className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
                Java // Linux
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-4">
              Multiplayer network built to master Linux server management and
              Java development.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-400 text-xs ml-4 list-disc">
              <li>
                Deployed a <strong>Velocity proxy</strong> for single-entry
                networking.
              </li>
              <li>
                Programmed <strong>custom Java plugins</strong> for server
                mechanics.
              </li>
              <li>
                Resolved <strong>handshake protocols</strong> for seamless
                transitions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-slate-600 text-[10px] uppercase tracking-widest border-t border-white/5 mx-8">
        &copy; {new Date().getFullYear()} Aaron — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
