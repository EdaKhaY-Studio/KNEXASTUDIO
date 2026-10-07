import React from 'react';
import { Zap } from 'lucide-react';

interface NavLogoProps {
  onNavClick: (id: string, href: string) => void;
  scrolled: boolean;
}

export const NavLogo: React.FC<NavLogoProps> = ({ onNavClick, scrolled }) => {
  return (
    <a
      href="#beranda"
      onClick={(e) => {
        e.preventDefault();
        onNavClick('beranda', '#beranda');
      }}
      className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg p-1 -m-1 transition-all duration-300"
      aria-label="KNEXU STUDIO - Kembali ke Beranda"
    >
      {/* Studio Emblem */}
      <div
        className={`flex items-center justify-center transition-all duration-300 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-slate-950 shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:shadow-emerald-500/30 ${
          scrolled ? 'w-9 h-9' : 'w-10 h-10'
        }`}
      >
        <Zap className="w-5 h-5 fill-current stroke-0" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="font-heading font-black text-lg sm:text-xl text-white tracking-tight flex items-center gap-1.5 transition-colors group-hover:text-emerald-200">
          KNEXU{' '}
          <span className="text-emerald-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
            STUDIO
          </span>
        </span>
        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block mt-0.5 tracking-tight transition-opacity duration-300">
          Digital Studio · Meulaboh
        </span>
      </div>
    </a>
  );
};
