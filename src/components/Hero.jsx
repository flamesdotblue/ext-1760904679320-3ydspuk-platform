import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(50%_50%_at_50%_10%,rgba(255,0,132,0.25),rgba(0,0,0,0))]" />

      <div className="relative z-20 flex min-h-[90vh] items-center px-6">
        <div className="mx-auto w-full max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-pink-400" />
            <span className="text-xs font-medium tracking-wide text-white/90">Next-gen NFT experience</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl">
            Kitty Tokens
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            A vibrant collection of playful, neon-infused digital cats. Mint, trade, and flex your purr-sonality in the metaverse.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#mint"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(236,72,153,0.45)] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-pink-400/60"
            >
              <Rocket className="h-4 w-4" /> Mint Now
            </a>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Collection
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center justify-center gap-3 opacity-90 sm:grid-cols-4">
            <Stat label="Unique Traits" value="120+" />
            <Stat label="Max Supply" value="9,999" />
            <Stat label="Mint Price" value="0.02 ETH" />
            <Stat label="Chain" value="Ethereum" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-lg font-bold text-transparent">{value}</div>
    </div>
  );
}
