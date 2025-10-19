import React from 'react';
import { Github, Mail, Globe, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-lg font-extrabold tracking-wide text-transparent">
            Kitty Tokens
          </div>
          <p className="mt-1 text-sm text-white/60">
            Made with <Heart className="inline h-3.5 w-3.5 text-pink-400" /> for collectors and cat lovers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10">
            <Globe className="h-4 w-4" /> Website
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl text-center text-[11px] tracking-wide text-white/50">
        © {new Date().getFullYear()} Kitty Tokens. All rights reserved.
      </div>
    </footer>
  );
}
