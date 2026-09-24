import React, { useState } from 'react';
import { X, MessageSquare, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [selectedService, setSelectedService] = useState('Landing Page (Rp599k)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL
    const text = `Halo KNEXU STUDIO! Saya berminat berkonsultasi mengenai pembuatan website:%0A%0A` +
      `- *Nama*: ${encodeURIComponent(name || 'Pengunjung Website')}%0A` +
      `- *Nama Usaha/Institusi*: ${encodeURIComponent(businessName || '-')}%0A` +
      `- *Pilihan Layanan*: ${encodeURIComponent(selectedService)}%0A` +
      `- *Catatan/Pertanyaan*: ${encodeURIComponent(notes || 'Mohon info ketersediaan dan alur pengerjaan.')}`;

    // WhatsApp phone placeholder or standard endpoint
    const waUrl = `https://wa.me/?text=${text}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="glass-card-emerald rounded-3xl w-full max-w-lg border border-emerald-500/40 shadow-2xl overflow-hidden relative">
        
        {/* MODAL HEADER */}
        <div className="bg-[#0D1713] p-6 border-b border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-extrabold shadow-md shadow-emerald-500/30">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Konsultasi Gratis KNEXU STUDIO</h3>
              <p className="text-xs text-emerald-400 font-mono">Tim Meulaboh Siap Membantu via WhatsApp</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-[#07110D]">
          
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">Nama Lengkap</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Teuku Rian"
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">Nama Usaha / Sekolah / Personal</label>
            <input
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Contoh: Kedai Kopi Meulaboh / SMA Negeri 1"
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">Pilihan Paket Layanan</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value="Landing Page (Mulai Rp599k)">Landing Page Promosi (Mulai Rp599k)</option>
              <option value="Company Profile & Toko (Mulai Rp899k)">Company Profile &amp; Toko Online (Mulai Rp899k)</option>
              <option value="Web Sekolah / Travel (Mulai Rp1.199k)">Website Sekolah &amp; Travel (Mulai Rp1.199k)</option>
              <option value="AI Customer Service Agent">AI Customer Service Agent 24/7</option>
              <option value="Custom Web Application">Custom Web Application / System</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">Catatan Kebutuhan / Pertanyaan</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Saya butuh website untuk menampilkan katalog usaha dan fitur AI chat otomatis..."
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-extrabold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan ke WhatsApp Studio</span>
            </button>
          </div>

          <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1 font-mono pt-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Respon Cepat Tim KNEXU STUDIO &bull; Meulaboh, Aceh Barat</span>
          </div>

        </form>

      </div>
    </div>
  );
};
