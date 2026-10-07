import React from 'react';
import { MessageSquare, ArrowUpRight, Zap, CheckCircle2, MapPin } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="kontak" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-24">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-radial-emerald opacity-60 pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-slate-800/80 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)] animate-float">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-6 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>SIAP BERTRANSFORMASI DIGITAL?</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-6 leading-tight relative z-10">
            Siap Membawa Bisnis Anda Memiliki <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">Website Resmi &amp; Agen AI</span>?
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Mulai langkah pertama hari ini. Konsultasikan kebutuhan Anda bersama tim <strong className="text-white">KNEXU STUDIO</strong> dari Meulaboh, Aceh Barat. 
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Website Mulai Rp599.000</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Proses Terima Beres 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Asisten AI CS 24 Jam</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-emerald-500 text-white font-black text-base hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95 group relative z-10"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-500/30 text-xs text-slate-400 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>KNEXU STUDIO &bull; Meulaboh, Aceh Barat, Indonesia</span>
          </div>

        </div>

      </div>
    </section>
  );
};
