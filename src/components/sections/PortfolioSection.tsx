import React, { useState } from 'react';
import { ExternalLink, Layers, Laptop, Smartphone, Eye } from 'lucide-react';
import { PortfolioProject } from '../../types';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../../hooks/useAnimations';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Portal Edukasi Digital Sekolah',
    category: 'Sekolah',
    clientType: 'Institusi Pendidikan',
    description: 'Showcase konsep website profil sekolah modern dengan portal berita, pengumuman jadwal, dan integrasi AI FAQ wali murid.',
    tags: ['Sekolah', 'Portal Berita', 'AI Assistant', 'Responsive'],
    isConcept: true,
    imageBgGradient: 'from-emerald-50 via-slate-50 to-slate-100',
    highlights: ['Modul Pengumuman Resmi', 'Informasi Ekstrakurikuler', 'Form Inkuiri Pendaftaran']
  },
  {
    id: 'p2',
    title: 'Website Travel & Umrah Mandiri',
    category: 'Travel',
    clientType: 'Travel Agency',
    description: 'Konsep halaman katalog paket umrah dan wisata halal lengkap dengan rincian biaya, itinerary harian, dan order WhatsApp.',
    tags: ['Travel Umrah', 'Package Showcase', 'WhatsApp Direct'],
    isConcept: true,
    imageBgGradient: 'from-teal-50 via-slate-50 to-slate-100',
    highlights: ['Katalog Paket Interaktif', 'Jadwal Keberangkatan', 'Rincian Fasilitas']
  },
  {
    id: 'p3',
    title: 'Landing Page Produk Kuliner UMKM',
    category: 'UMKM',
    clientType: 'Usaha Lokal',
    description: 'Halaman promosi cepat produk unggulan lokal dengan visual selera tinggi dan tombol pemesanan WhatsApp langsung.',
    tags: ['Landing Page', 'UMKM', 'High Conversion'],
    isConcept: true,
    imageBgGradient: 'from-emerald-100/50 via-slate-50 to-slate-100',
    highlights: ['Single Page Layout', 'Order Format Direct WA', 'Galeri Foto Produk']
  },
  {
    id: 'p4',
    title: 'E-Commerce Katalog Toko Baju',
    category: 'Retail',
    clientType: 'Toko Online',
    description: 'Platform katalog busana Muslim dan pakaian dengan sistem filter kategori dan keranjang belanja sederhana.',
    tags: ['Online Store', 'E-Commerce', 'Katalog Produk'],
    isConcept: true,
    imageBgGradient: 'from-slate-100 via-emerald-50 to-slate-200',
    highlights: ['Filter Ukuran & Warna', 'Order Cart via WA', 'Galeri Testimonial']
  },
  {
    id: 'p5',
    title: 'Company Profile Jasa Konstruksi',
    category: 'Corporate',
    clientType: 'Jasa & Konstruksi',
    description: 'Website profil perusahaan jasa dengan galeri dokumentasi proyek, sertifikasi, dan form penawaran harga.',
    tags: ['Company Profile', 'Corporate', 'SEO Friendly'],
    isConcept: true,
    imageBgGradient: 'from-teal-100/50 via-slate-50 to-slate-100',
    highlights: ['Galeri Dokumentasi Proyek', 'Legalitas & Sertifikat', 'Form Penawaran Kerjasama']
  }
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>SHOWCASE KARYA &amp; KONSEP</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Portfolio &amp; <span className="text-emerald-600">Demo Project</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl">
              Contoh tampilan dan rancangan website studio kami. Kami secara transparan memberikan penanda <strong className="text-emerald-600 font-mono">Concept Project</strong> untuk rancangan demo.
            </p>
          </motion.div>

          {/* CATEGORY FILTER TABS */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 self-start shadow-sm">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all' ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedCategory('sekolah')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'sekolah' ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Sekolah
            </button>
            <button
              onClick={() => setSelectedCategory('travel')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'travel' ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => setSelectedCategory('umkm')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'umkm' ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              UMKM
            </button>
          </motion.div>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              variants={fadeUp}
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-emerald-400 shadow-sm shadow-slate-200/50 transition-all duration-300"
            >
              {/* IMAGE / MOCKUP CONTAINER */}
              <div className={`h-48 bg-gradient-to-br ${project.imageBgGradient} p-6 flex flex-col justify-between relative border-b border-slate-200`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  {project.isConcept && (
                    <span className="text-[10px] font-mono text-slate-500 bg-white/80 backdrop-blur-sm border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                      Concept Project
                    </span>
                  )}
                </div>

                {/* SIMULATED BROWSER BAR IN MOCKUP */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-md transform group-hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 font-mono text-[9px] text-slate-500">demo.{project.id}.knexu.site</span>
                  </div>
                  <div className="h-1.5 w-2/3 bg-emerald-200 rounded mb-1"></div>
                  <div className="h-1.5 w-1/3 bg-slate-200 rounded"></div>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 shadow-sm font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Buat Website Seperti Ini</span>
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
