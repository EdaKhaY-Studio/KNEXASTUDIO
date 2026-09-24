import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, DollarSign, Bot, Zap, CheckCircle2, HeartHandshake } from 'lucide-react';
import { RevealText } from '../ui/RevealText';
import { staggerContainer, staggerChild, fadeUp, VIEWPORT } from '../../hooks/useAnimations';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-emerald-900 relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-xs font-mono mb-4 shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>MENGAPA KNEXU STUDIO</span>
          </motion.div>
          <RevealText as="h2" className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Nilai Tambah & Komitmen Kerja Kami
          </RevealText>
          <motion.p variants={fadeUp} className="text-emerald-100/80 text-base sm:text-lg">
            Kami menggabungkan keunggulan studio lokal yang mudah dijangkau dengan kualitas desain &amp; teknologi tingkat nasional.
          </motion.p>
        </motion.div>

        {/* 5 DIFFERENTIATOR CARDS GRID */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* CARD 1: LOCAL ACCESSIBILITY */}
          <div className="rounded-2xl p-7 flex flex-col justify-between border border-emerald-800 bg-emerald-900/50 hover:bg-emerald-800/80 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 border border-emerald-700 text-emerald-300 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Aksesibilitas Lokal Meulaboh
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Berbasis di Meulaboh, Aceh Barat. Klien lokal dapat berkomunikasi dengan nyaman tanpa kendala jarak maupun pemahaman konteks bisnis daerah.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-800 text-xs text-emerald-300 font-mono flex items-center gap-2 relative z-10">
              <CheckCircle2 className="w-4 h-4" /> Komunikasi Langsung &amp; Jelas
            </div>
          </div>

          {/* CARD 2: ACCESSIBLE PRICING */}
          <div className="rounded-2xl p-7 flex flex-col justify-between border border-emerald-800 bg-emerald-900/50 hover:bg-emerald-800/80 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 border border-emerald-700 text-emerald-300 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Harga Terjangkau (Mulai Rp599k)
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Investasi awal yang dapat dijangkau oleh UMKM, sekolah, maupun profesional tanpa harus membebankan anggaran bisnis secara berlebihan.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-800 text-xs text-emerald-300 font-mono flex items-center gap-2 relative z-10">
              <CheckCircle2 className="w-4 h-4" /> Transparansi Tanpa Biaya Tersembunyi
            </div>
          </div>

          {/* CARD 3: AI INTEGRATION */}
          <div className="bg-emerald-500 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all animate-glow-pulse"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-6 border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Integrasi Agen AI 24/7
              </h3>
              <p className="text-emerald-50 text-sm leading-relaxed">
                Bukan sekadar website statis. Website Anda dilengkapi asisten pintar AI yang terlatih menjawab pertanyaan pelanggan secara otomatis sepanjang hari.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-400/50 text-xs text-white font-mono flex items-center gap-2 relative z-10">
              <Zap className="w-4 h-4 text-white fill-white" /> Pembeda Utama Bisnis Anda
            </div>
          </div>

          {/* CARD 4: PROFESSIONAL DESIGN */}
          <div className="rounded-2xl p-7 flex flex-col justify-between border border-emerald-800 bg-emerald-900/50 hover:bg-emerald-800/80 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 border border-emerald-700 text-emerald-300 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Desain Kustom Modern
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Kami membuat website yang sesuai dengan identitas visual brand Anda, bukan template gratisan yang dipakai oleh ratusan bisnis lain.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-800 text-xs text-emerald-300 font-mono flex items-center gap-2 relative z-10">
              <CheckCircle2 className="w-4 h-4" /> UI/UX Responsif &amp; Cepat
            </div>
          </div>

          {/* CARD 5: TERIMA BERES */}
          <div className="rounded-2xl p-7 flex flex-col justify-between border border-emerald-800 bg-emerald-900/50 hover:bg-emerald-800/80 transition-colors shadow-sm md:col-span-2 lg:col-span-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 border border-emerald-700 text-emerald-300 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 fill-current stroke-0" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Proses "Terima Beres" 100%
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed max-w-3xl">
                Anda tidak perlu pusing memikirkan coding, hosting, domain, maupun susunan tampilan. Cukup konsultasikan kebutuhan bisnis Anda, dan kami akan menangani seluruh proses perancangan hingga website siap online.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-800 text-xs text-emerald-300 font-mono flex items-center gap-2 relative z-10">
              <CheckCircle2 className="w-4 h-4" /> Konsultasi &bull; Perancangan &bull; Pengerjaan &bull; Review &bull; Launch
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

