import { useRef } from "react";
import { motion } from "framer-motion";

export default function LowKeyAI() {
  const sections = [
    {
      id: "tidals",
      title: "there is energy hide between tidals",
      keywords: ["vaccumn", "energy"],
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "investment",
      title: "just like the oppotunities between fluxtuations",
      keywords: ["opportunity", "existed"],
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "ai",
      title: "you need ai to harvest them",
      keywords: ["ai"],
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "tidal harvester",
        title: "tidal harvester",
        keywords: ["power investment"],
        img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
      }
  ];

  const refs = useRef({});

  const scrollTo = (id) => {
    const el = refs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-zinc-200" />
            <span className="text-sm tracking-widest uppercase text-zinc-300">ai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {s.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Side Dots Nav */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={`Go to ${s.title}`}
            className="group"
          >
            <span className="block size-2 rounded-full bg-zinc-600 group-hover:bg-zinc-100 transition-colors" />
          </button>
        ))}
      </aside>

      {/* Sections */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {sections.map((s, idx) => (
          <section
            key={s.id}
            ref={(el) => (refs.current[s.id] = el)}
            id={s.id}
            className="relative h-screen w-full snap-start"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${s.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) brightness(0.5)",
              }}
            />

            {/* Subtle grid / tech vibe */}
            <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(transparent_95%,rgba(255,255,255,.08)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,.08)_95%)] [background-size:24px_24px]" />

            {/* Content */}
            <div className="mx-auto max-w-6xl h-full px-6 pt-24 flex flex-col items-start justify-end pb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-semibold tracking-tight text-white/90"
              >
                {s.title}
              </motion.h2>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {s.keywords.map((k) => (
                  <li
                    key={k}
                    className="text-xs uppercase tracking-widest text-zinc-200/80 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm bg-white/5"
                  >
                    {k}
                  </li>
                ))}
              </motion.ul>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-8 text-sm text-zinc-300/80 max-w-xl"
              >
                <span className="text-zinc-400">∎</span> $>
              </motion.p>

              {idx === sections.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-12 text-xs text-zinc-500"
                >
                  © {new Date().getFullYear()} low-profile ai
                </motion.div>
              )}
            </div>
          </section>
        ))}
      </main>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-[11px] text-zinc-300">
          
        </div>
      </div>
    </div>
  );
}