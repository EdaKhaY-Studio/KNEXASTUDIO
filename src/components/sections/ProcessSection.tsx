import React from 'react';
import { MessageSquare, Layout, Code2, CheckCircle2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../../hooks/useAnimations';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

const steps = [
  {
    num: '01',
    title: 'Konsultasi & Brief',
    desc: 'Diskusi awal mengenai jenis bisnis, tujuan website, serta materi (foto, logo, & kontak).',
    icon: MessageSquare
  },
  {
    num: '02',
    title: 'Rancang Visual UI/UX',
    desc: 'Penyesuaian struktur tampilan, skema warna identitas brand, dan tata letak halaman.',
    icon: Layout
  },
  {
    num: '03',
    title: 'Development & AI',
    desc: 'Pengkodean website responsif serta integrasi asisten AI Customer Service 24/7.',
    icon: Code2
  },
  {
    num: '04',
    title: 'Review & Revisi',
    desc: 'Klien meninjau hasil website dan penyesuaian revisi sesuai scope yang disepakati.',
    icon: CheckCircle2
  },
  {
    num: '05',
    title: 'Launch & Online',
    desc: 'Website siap digunakan, terhubung ke domain resmi, dan siap menerima calon pelanggan.',
    icon: Rocket
  }
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="proses" className="py-24 bg-emerald-900 relative text-white">
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ALUR TERIMA BERES 100%</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            5 Langkah Mudah Memiliki <span className="text-emerald-300">Website Resmi</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-emerald-100/80 text-base sm:text-lg">
            Anda tidak perlu memiliki kemampuan koding atau pemahaman teknis. Cukup sampaikan kebutuhan Anda, dan kami tangani sisanya.
          </motion.p>
        </motion.div>

        {/* WORKFLOW TIMELINE GRID */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                variants={fadeUp}
                key={idx} 
                className="bg-emerald-900/50 border border-emerald-800 rounded-2xl p-6 relative flex flex-col justify-between group hover:bg-emerald-800/80 hover:border-emerald-500/50 shadow-sm transition-all overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all pointer-events-none"></div>
                <div className="mb-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-emerald-700 group-hover:text-emerald-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 text-emerald-300 border border-emerald-700 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-emerald-100/80 text-xs leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-emerald-800 text-[10px] font-mono text-emerald-400 relative z-10">
                  Step {idx + 1} of 5
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 text-white font-extrabold text-base hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Mulai Konsultasi Langkah Pertama</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
