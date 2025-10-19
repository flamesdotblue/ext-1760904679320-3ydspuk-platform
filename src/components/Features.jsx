import React from 'react';
import { Shield, Coins, Zap, Gift, Star } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-cyan-300" />,
    title: 'Provably Rare',
    desc: 'On-chain metadata and verifiable trait distribution for true scarcity.'
  },
  {
    icon: <Coins className="h-6 w-6 text-pink-300" />,
    title: 'Stake & Earn',
    desc: 'Stake your Kitty Tokens to earn meow-velous rewards and perks.'
  },
  {
    icon: <Zap className="h-6 w-6 text-fuchsia-300" />,
    title: 'Lightning Fast',
    desc: 'Optimized minting experience with smooth, gas-efficient contracts.'
  },
  {
    icon: <Gift className="h-6 w-6 text-purple-300" />,
    title: 'Airdrops',
    desc: 'Surprise seasonal airdrops and collabs for loyal holders.'
  }
];

export default function Features() {
  return (
    <section id="mint" className="relative z-20 mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" /> Why Kitty Tokens
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
          Built for collectors, crafted for fun
        </h2>
        <p className="mt-3 text-white/70">
          Everything you need to mint, hold, and flex your neon kitties with style.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-transform hover:scale-[1.01]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(236,72,153,0.20),rgba(0,0,0,0))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/70">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
