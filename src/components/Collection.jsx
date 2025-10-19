import React from 'react';
import { Sparkles } from 'lucide-react';

const kitties = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Kitty #${(i + 1).toString().padStart(3, '0')}`,
  mood: ['Cosmic', 'Neon', 'Pixel', 'Hologram', 'Cyber', 'Galactic', 'Candy', 'Laser'][i % 8],
}));

export default function Collection() {
  return (
    <section id="collection" className="relative z-20 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-pink-300" /> Featured Collection
          </div>
          <h2 className="mt-3 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            Neon Kitty Gallery
          </h2>
          <p className="mt-2 text-white/70">A preview of the playful personalities living on-chain.</p>
        </div>
        <a href="#mint" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 md:block">
          Start Minting
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {kitties.map((k) => (
          <Card key={k.id} kitty={k} />
        ))}
      </div>
    </section>
  );
}

function Card({ kitty }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#ec4899,transparent,#22d3ee,transparent,#a78bfa,transparent,#ec4899)] opacity-60 blur-2xl" />
        <div className="relative z-10 flex h-full w-full items-center justify-center bg-gradient-to-br from-black/40 to-black/60">
          <span className="select-none text-7xl drop-shadow-[0_8px_24px_rgba(236,72,153,0.45)]">😺</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold tracking-wide">{kitty.name}</div>
          <div className="text-xs text-white/70">{kitty.mood} Edition</div>
        </div>
        <button className="rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 px-3 py-1.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(236,72,153,0.45)] transition-transform group-hover:scale-[1.03]">
          Mint
        </button>
      </div>
    </div>
  );
}
