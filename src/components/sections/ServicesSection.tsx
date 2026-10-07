import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerChild, scaleFade, hoverLift, VIEWPORT } from '../../hooks/useAnimations';
import { RevealText } from '../ui/RevealText';
import { 
  Layout, 
  Building2, 
  GraduationCap, 
  Plane, 
  ShoppingBag, 
  Bot, 
  Code2, 
  ArrowRight,
  CheckCircle2,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'Landing Page Promosi High Conversion',
    category: 'Marketing',
    description: 'Halaman khusus promosi produk, usaha lokal, atau kampanye promosi dengan visual berstandar studio dan tombol pemesanan WhatsApp langsung.',
    targetAudience: 'UMKM, Produk Khusus, Campaign Launch',
    problemSolved: 'Informasi produk tersebar dan tingkat konversi iklan rendah.',
    features: ['Single-Page High Conversion', 'Desain Responsif Mobile-First', 'Tombol WhatsApp Langsung', 'Integrasi Form Lead'],
    startingPrice: 'Rp599.000',
    iconName: 'Layout'
  },
  {
    id: '02',
    title: 'Company Profile & Toko Online',
    category: 'Corporate & Retail',
    description: 'Wajah digital resmi usaha atau perusahaan Anda untuk meningkatkan kepercayaan mitra bisnis dan memudahkan pemesanan katalog produk.',
    targetAudience: 'CV, PT, Usaha Lokal, Jasa & Toko Online',
    problemSolved: 'Mitra bisnis meragukan kredibilitas karena tidak memiliki website resmi.',
    features: ['Multi-Page Layout Rapi', 'Katalog Produk & Galeri Portfolio', 'Form Kontak & Peta Lokasi', 'Optimasi SEO Dasar Google'],
    startingPrice: 'Rp899.000',
    iconName: 'Building2',
    badgeText: 'POPULER'
  },
  {
    id: '03',
    title: 'Website Sekolah & Travel Umrah',
    category: 'Education & Tourism',
    description: 'Portal informasi resmi sekolah/kampus untuk pengumuman atau katalog paket perjalanan wisata & keberangkatan Umrah.',
    targetAudience: 'Sekolah, Pesantren, Travel Agent & Umrah',
    problemSolved: 'Wali murid/jamaah kesulitan mendapatkan rincian pengumuman & fasilitas paket.',
    features: ['Portal Berita & Pengumuman', 'Katalog Paket & Rincian Itinerary', 'Form Booking / Reservasi', 'Asisten Chat FAQ Perjalanan'],
    startingPrice: 'Rp1.199.000',
    iconName: 'GraduationCap'
  },
  {
    id: '04',
    title: 'Otomasi Agen AI Customer Service 24/7',
    category: 'AI Automation',
    description: 'Integrasi agen AI pintar yang dilatih dengan pengetahuan bisnis Anda untuk menjawab pertanyaan pelanggan secara otomatis sepanjang hari.',
    targetAudience: 'Semua Jenis Bisnis yang Menerima Banyak Chat',
    problemSolved: 'Admin terlambat membalas chat pelanggan saat luar jam kerja.',
    features: ['Respon Otomatis 24 Jam Nonstop', 'Pengetahuan Produk Kustom', 'Widget Chat Website', 'Laporan Riwayat Chat'],
    startingPrice: 'Bonus / Add-On',
    iconName: 'Bot',
    badgeText: 'UNGGULAN'
  },
  {
    id: '05',
    title: 'Custom Web Application & System',
    category: 'Engineering',
    description: 'Pengembangan sistem aplikasi web kustom sesuai workflow internal bisnis Anda (CRM, Dashboard manajemen, Portal internal).',
    targetAudience: 'Perusahaan & Bisnis dengan Workflow Spesifik',
    problemSolved: 'Software pasaran tidak sesuai dengan alur kerja operasional internal.',
    features: ['Arsitektur Sistem Kustom', 'Database & User Portal', 'Dashboard Analitik', 'Maintenance & Support Lengkap'],
    startingPrice: 'Konsultasi Scope',
    iconName: 'Code2'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('01');

  const selectedService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section id="layanan" className="py-24 bg-slate-900 relative overflow-hidden text-white scroll-mt-24">
      
      {/* TOP TICKER BANNER */}
      <div className="w-full bg-emerald-900/40 border-y border-emerald-500/20 py-3 mb-20 overflow-hidden font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.15)]">
        <div className="flex items-center gap-8 whitespace-nowrap animate-pulse">
          <span>WEB DEVELOPMENT</span> <span>+</span> <span>AI AUTOMATION</span> <span>+</span> <span>CUSTOM APPLICATION</span> <span>+</span> <span>MEULABOH ACEH BARAT</span> <span>+</span> <span>TERIMA BERES 100%</span> <span>+</span> <span>MULAI RP599.000</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16 relative"
        >
          {/* Subtle glow for header */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/20 blur-[50px] animate-glow-pulse" />
          
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Zap className="w-3.5 h-3.5" />
            <span>KATALOG LAYANAN DIGITAL</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight relative z-10">
            Layanan Utama <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">KNEXU STUDIO</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl relative z-10">
            Dirancang secara modular untuk memenuhi kebutuhan pertumbuhan digital bisnis Anda.
          </motion.p>
        </motion.div>

        {/* SERVICES LAYOUT: NUMBERED LIST LEFT + VISUAL SHOWCASE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: NUMBERED INTERACTIVE SERVICE ACCORDION LIST */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7 space-y-4"
          >
            {servicesData.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <motion.div
                  key={service.id}
                  variants={staggerChild}
                  onClick={() => setActiveServiceId(service.id)}
                  whileHover={{ scale: 1.01 }}
                  className={`rounded-2xl p-6 border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden'
                      : 'bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/30'
                  }`}
                >
                  {isActive && <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none" />}
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xl font-bold ${isActive ? 'text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]' : 'text-slate-500'}`}>
                        {service.id}
                      </span>
                      <h3 className={`font-heading font-bold text-lg sm:text-xl ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-700 text-slate-400'
                    }`}>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-0' : '-rotate-45'}`} />
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-emerald-500/20 text-xs sm:text-sm text-slate-300 space-y-4 animate-in fade-in duration-200 relative z-10">
                      <p className="leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="font-mono text-emerald-400 font-bold drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]">Starting: {service.startingPrice}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultation();
                          }}
                          className="px-4 py-2 rounded-full bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        >
                          Pilih Layanan Ini
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT: FEATURE HIGHLIGHT CARD */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="bg-slate-800/80 backdrop-blur-xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none animate-glow-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 blur-[50px] rounded-full pointer-events-none animate-float-delayed"></div>

              <div className="relative z-10">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  Detail Layanan #{selectedService.id}
                </span>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <div className="bg-slate-900/50 rounded-2xl p-4 border border-emerald-500/10 mb-6 text-xs space-y-2 shadow-inner">
                  <span className="text-slate-500 block text-[10px] font-mono uppercase">Target Sektor:</span>
                  <span className="text-white font-bold">{selectedService.targetAudience}</span>
                </div>
              </div>

              {/* GREEN CALLOUT BUTTON FROM REFERENCE IMAGE */}
              <div className="relative z-10 pt-6 border-t border-emerald-500/20 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Investasi Mulai</div>
                  <div className="text-xl font-extrabold text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">{selectedService.startingPrice}</div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-transform active:scale-90"
                  title="Konsultasi Layanan Ini"
                >
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
