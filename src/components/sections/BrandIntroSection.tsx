import React from 'react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, scaleFade, hoverLift, VIEWPORT, staggerContainer } from '../../hooks/useAnimations';

export const BrandIntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono mb-6 shadow-sm">
              <Target className="w-3.5 h-3.5" />
              <span>SOLUSI DIGITAL TERJANGKAU</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6 leading-tight">
              Mengapa Bisnis Anda Membutuhkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Website &amp; Otomasi AI?</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Sebagian besar calon pelanggan mencari informasi bisnis melalui internet sebelum melakukan pembelian. Memiliki website profesional membangun persepsi kredibilitas secara instan.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              {[
                { title: 'Harga Terjangkau (Mulai Rp599 Ribu)', desc: 'Paket terjangkau tanpa mengorbankan kualitas visual profesional.' },
                { title: 'Proses Terima Beres 100%', desc: 'Kami menangani seluruh aspek desain, konten, hingga website siap online.' },
                { title: 'Otomasi Asisten AI 24/7', desc: 'Integrasi agen AI yang mampu menjawab FAQ pelanggan secara konstan.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors shadow-sm">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a 
              variants={fadeUp}
              href="#layanan" 
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
            >
              Lihat Pilihan Layanan Kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* RIGHT: IMAGE WITH COOL GRID / SHAPE */}
          <motion.div 
            variants={scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-[80px] -z-10" />
            
            {/* Main image wrapped in rounded non-box shape */}
            <motion.div 
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50"
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tim Profesional KNEXU STUDIO"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium text-sm drop-shadow-md">
                  Membangun Kredibilitas Bisnis di Era Digital
                </p>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              variants={hoverLift}
              whileHover="hover"
              className="absolute -left-6 lg:-left-12 top-1/4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                🚀
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Performa Maksimal</p>
                <p className="text-xs text-slate-500">Website Cepat &amp; Responsif</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

