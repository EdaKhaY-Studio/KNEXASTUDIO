import React from 'react';
import { Zap, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-emerald-900 text-emerald-100/80 text-xs pt-16 pb-12 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/30 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* BRAND COL (2 SPAN) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-emerald-500/30">
                <Zap className="w-5 h-5 fill-current stroke-0" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  KNEXU <span className="text-emerald-300 font-normal text-xs uppercase px-2 py-0.5 rounded-full bg-emerald-800 border border-emerald-700">STUDIO</span>
                </span>
                <span className="text-[11px] text-emerald-200/60 font-mono">Digital Studio &amp; AI Solutions</span>
              </div>
            </a>

            <p className="text-emerald-100/80 text-xs leading-relaxed max-w-sm">
              KNEXU STUDIO adalah studio digital yang membantu UMKM, sekolah, travel, profesional, dan organisasi membangun kehadiran digital melalui website profesional dan otomasi AI.
            </p>

            <div className="flex items-center gap-2 text-emerald-200/80 font-mono text-xs">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Meulaboh, Aceh Barat, Indonesia</span>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-300 text-[11px] font-mono shadow-sm">
                Website Mulai Rp599.000
              </span>
            </div>
          </div>

          {/* COL 2: LAYANAN */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Layanan Utama</h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Landing Page Promosi</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Company Profile Bisnis</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Toko Online (E-Commerce)</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Website Sekolah &amp; Kampus</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Website Travel &amp; Umrah</a></li>
              <li><a href="#ai-agent" className="hover:text-emerald-300 transition-colors text-emerald-400 font-medium flex items-center gap-1">AI Customer Service 24/7</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Custom Web Application</a></li>
            </ul>
          </div>

          {/* COL 3: SEKTOR & INDUSTRI */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Target Sektor</h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">UMKM &amp; Kuliner Lokal</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sekolah, SMP, SMA, SMK</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Travel Haji &amp; Umrah</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Dokter &amp; Konsultan</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Perusahaan &amp; CV/PT</a></li>
            </ul>
          </div>

          {/* COL 4: KONTAK & KONSULTASI */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Konsultasi Project</h4>
            <p className="text-emerald-100/70 text-xs mb-4">
              Punya ide proyek atau pertanyaan seputar harga? Konsultasikan langsung via WhatsApp.
            </p>

            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] relative z-10"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Konsultasi WhatsApp</span>
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-200/50">
          <div>
            &copy; {new Date().getFullYear()} KNEXU STUDIO. All rights reserved. Made in Meulaboh, Aceh Barat.
          </div>

          <div className="flex items-center gap-4">
            <a href="#tentang" className="hover:text-emerald-100">Tentang Kami</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-emerald-100">FAQ</a>
            <span>&bull;</span>
            <a href="#harga" className="hover:text-emerald-100">Paket Harga</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
