import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQItem } from '../../types';
import { RevealText } from '../ui/RevealText';
import { staggerContainer, fadeUp, VIEWPORT } from '../../hooks/useAnimations';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

const faqs: FAQItem[] = [
  {
    id: 'f1',
    category: 'harga',
    question: 'Berapa harga pembuatan website di KNEXU STUDIO?',
    answer: 'Layanan website kami tersedia mulai dari Rp599.000 untuk paket Landing Page. Untuk Company Profile & Toko Online mulai dari Rp899.000, dan Website Sekolah/Travel mulai Rp1.199.000. Semua harga bersifat transparan tanpa biaya tersembunyi.'
  },
  {
    id: 'f2',
    category: 'proses',
    question: 'Apakah saya harus mengerti koding atau teknologi?',
    answer: 'Sama sekali tidak. Alur kerja kami adalah "Terima Beres". Anda hanya perlu menyampaikan info usaha, foto produk/kegiatan, dan kontak. Tim KNEXU STUDIO yang akan menangani seluruh proses perancangan visual, koding, hingga website siap online.'
  },
  {
    id: 'f3',
    category: 'proses',
    question: 'Berapa lama proses pembuatan websitenya?',
    answer: 'Waktu pengerjaan standar berkisar antara 1 hingga 5 hari kerja setelah materi (foto & informasi) kami terima secara lengkap, tergantung pada tingkat kompleksitas paket yang dipilih.'
  },
  {
    id: 'f4',
    category: 'ai',
    question: 'Bagaimana cara kerja fitur AI Customer Service 24/7?',
    answer: 'Asisten pintar AI akan dilatih menggunakan informasi bisnis Anda (seperti harga, alamat, jam buka, dan FAQ). Saat pengunjung bertanya melalui widget chat di website, AI akan memberikan balasan otomatis secara akurat 24 jam nonstop.'
  },
  {
    id: 'f5',
    category: 'layanan',
    question: 'Apakah websitenya bisa dibuka di HP / Smartphone?',
    answer: 'Ya! Setiap website yang kami buat dirancang secara Mobile-First & Responsif, artinya tampilan akan secara otomatis menyesuaikan diri dengan layar HP, tablet, maupun laptop dengan sempurna.'
  },
  {
    id: 'f6',
    category: 'layanan',
    question: 'Apakah KNEXU STUDIO melayani klien di luar Meulaboh / Aceh?',
    answer: 'Tentu saja! Meskipun studio kami berbasis di Meulaboh, Aceh Barat, proses konsultasi, pengiriman materi, dan review dapat dilakukan secara online melalui WhatsApp & Zoom untuk klien di seluruh Indonesia.'
  },
  {
    id: 'f7',
    category: 'proses',
    question: 'Bagaimana jika ada bagian tampilan yang ingin saya revisi?',
    answer: 'Setiap paket pengerjaan sudah termasuk garansi sesi review dan revisi penyesuaian konten/tampilan sebelum website dipublikasikan secara resmi.'
  },
  {
    id: 'f8',
    category: 'harga',
    question: 'Apakah saya bisa menambah fitur khusus di kemudian hari?',
    answer: 'Sangat bisa. Website buatan KNEXU STUDIO dirancang dengan arsitektur modular sehingga Anda dapat menambah halaman baru, fitur katalog, atau sistem kustom kapan saja bisnis Anda berkembang.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string>('f1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </motion.div>
          <RevealText as="h2" className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Jawaban Pertanyaan Calon Klien
          </RevealText>
          <motion.p variants={fadeUp} className="text-slate-600 text-base">
            Temukan jawaban langsung untuk pertanyaan yang paling sering ditanyakan seputar pembuatan website di KNEXU STUDIO.
          </motion.p>
        </motion.div>

        {/* ACCORDION LIST */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white shadow-sm shadow-slate-200/50 rounded-2xl overflow-hidden border transition-all ${
                  isOpen ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS */}
        <div className="bg-emerald-50 border border-emerald-200 shadow-sm shadow-emerald-100 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-slate-900">Punya Pertanyaan Lain yang Belum Terjawab?</h4>
            <p className="text-slate-600 text-xs mt-0.5">Tim KNEXU STUDIO siap menjawab konsultasi Anda melalui WhatsApp.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-emerald-600 transition-all shrink-0 flex items-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Tanyakan via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
