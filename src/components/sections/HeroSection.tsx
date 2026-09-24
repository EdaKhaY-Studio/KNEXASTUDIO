import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight, MessageSquare, Bot, CheckCircle2,
  Layers, TrendingUp, Shield, Clock, Star
} from 'lucide-react';
import {
  fadeUp, slideLeft, slideRight, staggerContainer, staggerChild,
  scaleFade, hoverLift, hoverGlow, VIEWPORT
} from '../../hooks/useAnimations';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

// ── Typing animation hook ─────────────────────────────────────────────────
const TYPING_WORDS = [
  'Website Profesional',
  'Agen AI 24/7',
  'Landing Page',
  'Company Profile',
  'Web Sekolah',
];

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplayed(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// ── Animated counter ──────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref  = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Stats data ────────────────────────────────────────────────────────────
const STATS = [
  { value: 50,  suffix: '+',  label: 'Project Selesai',   color: 'text-white' },
  { value: 100, suffix: '%',  label: 'Terima Beres',      color: 'text-emerald-300'   },
  { value: 24,  suffix: '/7', label: 'Otomasi Agen AI',   color: 'text-white' },
];

// ── Features list ─────────────────────────────────────────────────────────
const FEATURES = [
  'Desain Kustom Modern (Bukan Template)',
  'SEO Google & Kecepatan Tinggi',
  'Agen AI Customer Service 24/7',
  'Harga Terjangkau, Alur Terima Beres',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const typedText = useTyping(TYPING_WORDS);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-emerald-900 text-white"
    >
      {/* ── Background grid & subtle glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/30 blur-[120px] rounded-full animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-400/20 blur-[100px] rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Light Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-emerald-400/40 rounded-full blur-sm animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-emerald-300/30 rounded-full blur-sm animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ════════════════════════════════════════════════════════
            YOGAZ-STYLE HERO: Asymmetric left-text / right-visual
            ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center min-h-[calc(100vh-200px)]">

          {/* ── LEFT COLUMN: Text content ─────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-8 sm:pt-12 lg:pt-0"
          >
            {/* Top badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-100 text-[10px] sm:text-xs font-mono mb-6 sm:mb-8 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-400"></span>
              </span>
              <span>TERSEDIA UNTUK PROJECT BARU — 2026</span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={fadeUp} className="mb-5">
              <h1 className="font-heading font-black text-[2.6rem] sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] text-white tracking-tight leading-[1.06]">
                Transformasi Bisnis Anda dengan{' '}
                {/* Typing animated word */}
                <span className="relative block mt-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-white">
                    {typedText}
                  </span>
                  {/* Cursor blink */}
                  <span className="inline-block w-[3px] h-[0.85em] bg-emerald-300 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
                </span>
              </h1>
            </motion.div>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-xl mb-8"
            >
              Solusi digital terlengkap untuk{' '}
              <strong className="text-white font-semibold">Landing Page, Company Profile, hingga Web Sekolah</strong>.
              {' '}Setiap paket sudah dilengkapi asisten AI pintar yang melayani pelanggan Anda 24/7.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0 mb-10 sm:mb-12">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 sm:py-3.5 rounded-full bg-white text-emerald-900 font-nav font-bold text-sm hover:bg-emerald-50 hover:shadow-xl hover:shadow-white/10 active:scale-95 transition-all duration-300 group flex items-center justify-center gap-2"
              >
                Konsultasi Gratis <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <a 
                href="#layanan"
                className="w-full sm:w-auto px-8 py-4 sm:py-3.5 rounded-full bg-emerald-800/50 text-white border border-emerald-700/50 font-nav font-bold text-sm hover:bg-emerald-800 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Layers className="w-4 h-4 opacity-70" /> Lihat Katalog
              </a>
            </motion.div>

            {/* Features check list */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-emerald-100/90 px-4 sm:px-0 w-full lg:w-auto">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-left">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof micro-strip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mt-8 pt-6 border-t border-emerald-700/50"
            >
              <div className="flex -space-x-2">
                {['A', 'B', 'R'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-2 border-emerald-900 flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-emerald-200 mt-0.5">Dipercaya 50+ bisnis di Aceh & Nasional</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right side image/graphic ── */}
          <motion.div
            variants={scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative lg:h-[600px] xl:h-[700px] flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Main image container */}
            <motion.div 
              className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-auto lg:h-[90%] rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 bg-white"
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="KNEXU STUDIO Digital Solutions"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent" />

              {/* Interactive badge 1 */}
              <motion.div
                variants={hoverLift}
                whileHover="hover"
                className="absolute bottom-8 left-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-4 animate-float"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">+125%</p>
                  <p className="text-xs text-emerald-100 font-mono">Conversion Rate</p>
                </div>
              </motion.div>

              {/* Interactive badge 2 */}
              <motion.div
                variants={hoverLift}
                whileHover="hover"
                className="absolute top-8 right-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-4 hidden sm:flex animate-float-delayed"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">100% Aman</p>
                  <p className="text-xs text-emerald-100 font-mono">Gratis SSL</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-3 -right-3 z-10"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="bg-emerald-500 border border-emerald-400 rounded-xl px-3 py-1.5 text-xs font-mono text-white shadow-md flex items-center gap-1.5 animate-glow-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Studio Premium
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── STATS BAR — below the two columns ── */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pb-8"
        >
          {/* Glass background for stats */}
          <div className="absolute inset-0 mx-4 sm:mx-6 lg:mx-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 sm:py-10 px-6 sm:px-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className={`flex flex-col items-center justify-center text-center ${idx > 1 ? 'pt-8 lg:pt-0' : 'pb-8 lg:pb-0'}`}
              >
                <div className={`font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-2 ${stat.color}`}>
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-emerald-200/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            <motion.div 
              variants={fadeUp}
              className="flex flex-col items-center justify-center text-center pt-8 lg:pt-0"
            >
              <div className="flex -space-x-3 mb-3">
                {[
                  'https://i.pravatar.cc/100?img=11',
                  'https://i.pravatar.cc/100?img=32',
                  'https://i.pravatar.cc/100?img=47',
                  'https://i.pravatar.cc/100?img=68'
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={src} alt="Client" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-emerald-200/80 mt-0.5">Dipercaya 50+ bisnis</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
