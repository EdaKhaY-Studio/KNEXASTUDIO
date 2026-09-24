import React from 'react';
import { Store, GraduationCap, Plane, UserCheck, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../../hooks/useAnimations';

interface IndustriesSectionProps {
  onOpenConsultation: () => void;
}

const industries = [
  {
    title: 'UMKM & Kuliner Lokal',
    icon: Store,
    desc: 'Menampilkan katalog produk secara rapi dengan tombol pemesanan WhatsApp langsung untuk mempermudah calon pembeli.',
    perks: ['Catalog Page Rapi', 'Order Form WA Direct', 'Desain Hemat Anggaran']
  },
  {
    title: 'Sekolah & Institusi',
    icon: GraduationCap,
    desc: 'Portal pengumuman resmi dan profil lembaga pendidikan yang memudahkan orang tua siswa mengakses informasi.',
    perks: ['Portal Berita Resmi', 'Informasi Pendaftaran', 'Asisten AI FAQ Wali Murid']
  },
  {
    title: 'Travel & Umrah',
    icon: Plane,
    desc: 'Katalog paket wisata & keberangkatan umrah interaktif dengan rincian jadwal perjalanan yang transparan.',
    perks: ['Showcase Paket Perjalanan', 'Rincian Itinerary Harian', 'Tombol Reservasi WA']
  },
  {
    title: 'Profesional & Kreator',
    icon: UserCheck,
    desc: 'Website galeri karya untuk arsitek, fotografer, konsultan, dan tenaga ahli untuk membangun reputasi personal.',
    perks: ['Galeri High Quality', 'Form Booking Jasa', 'Social Media Linking']
  },
  {
    title: 'Perusahaan & Startup',
    icon: Building2,
    desc: 'Website profil bisnis resmi dan aplikasi web kustom untuk mendukung kredibilitas di mata investor & klien.',
    perks: ['Company Profile Resmi', 'Custom Web Application', 'Integrasi AI CS 24/7']
  }
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-slate-900 relative text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Building2 className="w-3.5 h-3.5" />
            <span>SOLUSI SPESIFIK SEKTOR</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Dirancang Sesuai Karakter <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">Industri Anda</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg">
            Kami memahami bahwa setiap sektor bisnis memiliki kebutuhan informasi dan alur pelanggan yang berbeda.
          </motion.p>
        </motion.div>

        {/* SECTOR CARDS GRID */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                variants={fadeUp}
                key={idx} 
                className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-7 flex flex-col justify-between border border-emerald-500/20 hover:bg-slate-800 hover:border-emerald-500/50 shadow-sm transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {ind.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="pt-4 border-t border-slate-700/50 text-xs font-semibold text-emerald-400 flex items-center justify-between group-hover:text-emerald-300 relative z-10"
                >
                  <span>Konsultasi Sektor Ini</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
