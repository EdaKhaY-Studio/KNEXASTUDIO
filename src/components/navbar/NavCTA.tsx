import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavCTAProps {
  onOpenConsultation: () => void;
  className?: string;
}

export const NavCTA: React.FC<NavCTAProps> = ({
  onOpenConsultation,
  className = '',
}) => {
  return (
    <button
      onClick={onOpenConsultation}
      className={`
        inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5
        rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-nav font-semibold text-xs sm:text-sm
        shadow-sm hover:shadow-md hover:shadow-emerald-500/25 active:scale-95
        transition-all duration-200 ease-out group shrink-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
        ${className}
      `}
      aria-label="Konsultasi Gratis via WhatsApp"
    >
      <MessageSquare className="w-3.5 h-3.5 fill-current stroke-0" />
      <span>Konsultasi Gratis</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};
