import React from 'react';
import { BookOpen, Sparkles, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../../hooks/useAnimations';

interface BlogSectionProps {
  onOpenConsultation: () => void;
}

const upcomingArticles = [
  {
    category: 'Strategi Digital',
    title: '5 Alasan Mengapa Website Resmi Lebih Efektif Menghasilkan Klien Dibanding Medsos',
    desc: 'Pelajari bagaimana website independen membangun otoritas brand, mempermudah katalog produk, dan menjaring calon pelanggan tanpa bergantung pada algoritma media sosial.',
    readTime: '4 menit baca',
    tag: 'Edukasi Bisnis',
  },
  {
    category: 'Otomasi AI',
    title: 'Cara Kerja Agen AI CS 24/7 dalam Menjawab FAQ & Meningkatkan Penjualan Otomatis',
    desc: 'Eksplorasi bagaimana asisten cerdas berbasis AI dapat dilatih dengan data bisnis Anda untuk menjawab pertanyaan pelanggan secara instan kapan pun.',
    readTime: '5 menit baca',
    tag: 'Teknologi AI',
  },
  {
    category: 'Panduan Website',
    title: 'Landing Page vs Company Profile: Mana yang Paling Tepat untuk Usaha Anda?',
    desc: 'Panduan praktis menentukan tipe website yang sesuai dengan kebutuhan dan fase pertumbuhan usaha Anda agar investasi digital tepat sasaran.',
    readTime: '3 menit baca',
    tag: 'Panduan Praktis',
  },
];

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="blog" className="py-24 bg-slate-900 relative overflow-hidden text-white scroll-mt-24">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>BLOG &amp; WAWASAN DIGITAL</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4"
          >
            Artikel &amp; Panduan <span className="text-emerald-400">Bisnis Digital</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Kumpulan artikel edukatif, studi kasus, dan strategi seputar pembuatan website profesional serta implementasi AI untuk pertumbuhan bisnis Anda.
          </motion.p>
        </motion.div>

        {/* ARTICLE CARDS PREVIEW */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {upcomingArticles.map((article, idx) => (
            <motion.div
              variants={fadeUp}
              key={idx}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-7 flex flex-col justify-between border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {article.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Segera Terbit
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Diskusi Topik Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM NOTICE / INQUIRY BANNER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                Punya Topik Khusus yang Ingin Anda Pelajari?
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Konsultasikan kendala digital bisnis Anda langsung dengan tim developer &amp; analis KNEXU STUDIO.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Tanya Topik via WhatsApp</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
