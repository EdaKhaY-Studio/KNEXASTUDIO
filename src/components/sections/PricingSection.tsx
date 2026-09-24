import React from 'react';
import { Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../../types';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../../hooks/useAnimations';

interface PricingSectionProps {
  onOpenConsultation: () => void;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'landing-page',
    name: 'Landing Page Promosi',
    price: 'Rp599.000',
    description: 'Cocok untuk promosi satu produk, usaha lokal, campaign, atau penawaran khusus.',
    targetLabel: 'UMKM & Produk Khusus',
    features: [
      'Single-Page High Conversion UI',
      'Desain Responsif (Mobile & Laptop)',
      'Tombol WhatsApp Direct',
      'Integrasi Form Lead / Kontak',
      'Asisten AI Customer Service Basic',
      'Proses Terima Beres (1-3 Hari)'
    ],
    ctaText: 'Pilih Paket Landing Page'
  },
  {
    id: 'company-profile',
    name: 'Company Profile & Toko',
    price: 'Rp899.000',
    isPopular: true,
    description: 'Solusi lengkap untuk wajah digital usaha, CV/PT, katalog produk, atau profil profesional.',
    targetLabel: 'Perusahaan, Jasa & Toko Online',
    features: [
      'Multi-Page Layout (Profil, Layanan, Kontak)',
      'Katalog Produk / Galeri Portofolio',
      'Desain Visual Kustom & Modern',
      'Integrasi Agen AI CS 24 Jam Nonstop',
      'Optimasi SEO Dasar Google',
      'Domain & Hosting Setup',
      'Dukungan Perbaikan 30 Hari'
    ],
    ctaText: 'Pilih Paket Profile & Toko'
  },
  {
    id: 'web-sekolah-travel',
    name: 'Web Sekolah & Travel',
    price: 'Rp1.199.000',
    description: 'Portal informasi lengkap untuk lembaga pendidikan, sekolah, travel wisata, atau umrah.',
    targetLabel: 'Sekolah, Kampus & Travel Umrah',
    features: [
      'Portal Berita & Pengumuman Sekolah',
      'Katalog Paket Travel & Itinerary',
      'Integrasi AI FAQ Khusus Wali/Jamaah',
      'Galeri Kegiatan & Struktur Organisasi',
      'SEO & Google Maps Location Setup',
      'Panduan Kelola Konten Mandiri'
    ],
    ctaText: 'Pilih Paket Sekolah & Travel'
  }
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="harga" className="py-24 bg-slate-900 relative text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARANSI INVESTASI DIGITAL</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Website Profesional <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">Mulai Rp599.000</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Investasi terjangkau untuk membangun kredibilitas bisnis Anda secara permanen. Semua paket termasuk layanan <strong className="text-white">Terima Beres</strong>.
          </p>
        </div>

        {/* PRICING CARDS GRID */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              variants={fadeUp}
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-slate-800/90 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] md:-translate-y-2 backdrop-blur-xl'
                  : 'bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/30 backdrop-blur-md'
              }`}
            >
              {plan.isPopular && (
                <>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-extrabold text-[11px] font-mono uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 whitespace-nowrap">
                    PAKET PALING BANYAK DIPILIH
                  </div>
                </>
              )}

              <div className="relative z-10">
                {/* PLAN NAME & TARGET */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-2xl text-white">{plan.name}</h3>
                </div>
                <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-900/40 border border-emerald-500/30 px-2.5 py-1 rounded mb-4">
                  {plan.targetLabel}
                </span>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* PRICE */}
                <div className="mb-6 pb-6 border-b border-slate-700/50">
                  <span className="text-xs text-slate-500 font-mono block mb-1">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white">{plan.price}</span>
                  </div>
                </div>

                {/* FEATURES INCLUDED */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block mb-2">Termasuk Fitur:</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PLAN CTA */}
              <button
                onClick={onOpenConsultation}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all relative z-10 ${
                  plan.isPopular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'bg-slate-700/50 text-white hover:bg-slate-700 border border-slate-600'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          ))}
        </motion.div>

        {/* CUSTOM REQUIREMENTS BANNER */}
        <div className="bg-slate-800/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">Membutuhkan Fitur atau Aplikasi Web Kustom?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Hubungi tim KNEXU STUDIO untuk mendiskusikan kebutuhan sistem internal, CRM, atau aplikasi web spesifik.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold text-sm hover:bg-emerald-500 hover:text-white shrink-0 transition-all shadow-sm relative z-10"
          >
            Konsultasi Custom System
          </button>
        </div>

      </div>
    </section>
  );
};
