import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Zap, Shield, HeartHandshake } from 'lucide-react';
import { slideLeft, slideRight, staggerContainer, staggerChild, fadeUp, VIEWPORT } from '../../hooks/useAnimations';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-emerald-900 relative overflow-hidden text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-xs font-mono mb-4 shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>BERBASIS DI MEULABOH, ACEH BARAT</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Membangun Solusi Digital Modern Dari <span className="text-emerald-400 drop-shadow-sm">Meulaboh</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-emerald-100/90 text-base sm:text-lg leading-relaxed mb-6">
              KNEXU STUDIO lahir dengan misi sederhana: membantu bisnis, sekolah, travel, dan UMKM memiliki kehadiran digital yang profesional dan berteknologi tinggi tanpa harus dibebani biaya yang tidak masuk akal.
            </motion.p>

            <motion.p variants={fadeUp} className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-8">
              Kami percaya bahwa bisnis di mana pun berada — baik di daerah maupun pusat kota — berhak memiliki website berkualitas dan asisten AI pintar yang siap melayani calon pelanggan secara profesional.
            </motion.p>

            {/* THREE PILLARS */}
            <motion.div
              variants={staggerContainer(0.1)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-emerald-800 pt-6"
            >
              <motion.div variants={staggerChild}>
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">ACCESSIBLE</div>
                <div className="text-white text-sm font-bold">Terjangkau</div>
                <div className="text-emerald-200/70 text-xs mt-1">Investasi mulai Rp599.000 dengan alur Terima Beres.</div>
              </motion.div>
              <motion.div variants={staggerChild}>
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">PROFESSIONAL</div>
                <div className="text-white text-sm font-bold">Desain Kustom</div>
                <div className="text-emerald-200/70 text-xs mt-1">Tampilan modern responsif sesuai identitas brand.</div>
              </motion.div>
              <motion.div variants={staggerChild}>
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">INNOVATIVE</div>
                <div className="text-white text-sm font-bold">Otomasi AI</div>
                <div className="text-emerald-200/70 text-xs mt-1">Integrasi agen AI pintar melayani FAQ 24/7.</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT LOCATION / BRAND CARD */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-5 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="bg-emerald-800/40 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-8 relative overflow-hidden shadow-sm hover:border-emerald-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-black text-2xl mb-6 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                KS
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                KNEXU STUDIO
              </h3>
              <div className="text-emerald-400 font-mono text-xs mb-6 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Meulaboh, Aceh Barat, Indonesia
              </div>

              <div className="space-y-4 text-xs text-emerald-100/90 border-t border-emerald-700/50 pt-6">
                <div className="flex justify-between py-1 border-b border-emerald-800/50">
                  <span className="text-emerald-200/60">Kategori Bisnis:</span>
                  <span className="text-white font-medium">Digital Studio &amp; AI Solutions</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-800/50">
                  <span className="text-emerald-200/60">Pilihan Layanan:</span>
                  <span className="text-white font-medium">Web App, Profile, AI Agent</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-800/50">
                  <span className="text-emerald-200/60">Starting Price:</span>
                  <span className="text-emerald-400 font-bold drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]">Mulai Rp599.000</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-emerald-200/60">Jangkauan Layanan:</span>
                  <span className="text-white font-medium">Lokal (Aceh) &amp; Nasional</span>
                </div>
              </div>

              <div className="mt-6 pt-4 bg-emerald-900/60 rounded-xl p-3 border border-emerald-700/50 text-[11px] text-emerald-300 flex items-center gap-2 font-mono shadow-sm">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400 stroke-0 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                <span>Siap Membantu Bisnis Anda Bertransformasi Digital!</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
