import React, { useState } from 'react';
import { Bot, Zap, Send, RefreshCw, MessageSquare, CheckCircle2, User, CornerDownRight } from 'lucide-react';
import { AIChatMessage } from '../../types';

interface AICustomerServiceSectionProps {
  onOpenConsultation: () => void;
}

const initialMessages: AIChatMessage[] = [
  {
    id: '1',
    sender: 'ai',
    text: 'Halo! Saya KNEXU AI Assistant. Ada yang bisa saya bantu tentang pembuatan website atau layanan studio digital KNEXU STUDIO?',
    timestamp: 'Just now'
  }
];

const samplePrompts = [
  'Berapa harga pembuatan website?',
  'Apakah bisa buat website sekolah?',
  'Bagaimana alur pengerjaannya?',
  'Saya punya travel umrah, ada solusi paketnya?'
];

export const AICustomerServiceSection: React.FC<AICustomerServiceSectionProps> = ({ onOpenConsultation }) => {
  const [messages, setMessages] = useState<AIChatMessage[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: AIChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let aiText = '';
      const lower = query.toLowerCase();

      if (lower.includes('harga') || lower.includes('biaya') || lower.includes('berapa')) {
        aiText = 'Layanan website profesional di KNEXU STUDIO tersedia mulai dari Rp599.000 untuk Landing Page. Untuk Company Profile mulai Rp899.000 dan Web Sekolah Rp1.199.000. Semua paket sudah termasuk desain responsif dan fitur AI FAQ!';
      } else if (lower.includes('sekolah') || lower.includes('pendidikan')) {
        aiText = 'Tentu! Kami menyediakan paket khusus Website Sekolah lengkap dengan portal berita, informasi pengumuman, struktur pengajar, dan integrasi AI yang dapat menjawab pertanyaan calon wali murid secara otomatis.';
      } else if (lower.includes('alur') || lower.includes('proses') || lower.includes('terima beres')) {
        aiText = 'Alur kerja kami sangat sederhana (Terima Beres): 1. Konsultasi Brief -> 2. Rancang Tampilan -> 3. Pengerjaan Development -> 4. Review & Revisi -> 5. Launching Online! Anda tidak perlu memahami coding sama sekali.';
      } else if (lower.includes('travel') || lower.includes('umrah')) {
        aiText = 'Untuk bisnis Travel & Umrah, kami memiliki modul khusus yang menampilkan katalog paket perjalanan, fasilitas itinerary lengkap, serta tombol pemesanan langsung ke WhatsApp.';
      } else {
        aiText = 'Terima kasih atas pertanyaannya! KNEXU STUDIO melayani pembuatan website profesional, aplikasi web kustom, dan otomasi AI di Meulaboh & nasional. Anda bisa berkonsultasi langsung dengan tim kami via WhatsApp.';
      }

      const aiMsg: AIChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleReset = () => {
    setMessages(initialMessages);
  };

  return (
    <section id="ai-agent" className="py-24 bg-white relative overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-400/20 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT EXPLANATION */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono mb-4 shadow-sm">
              <Bot className="w-3.5 h-3.5" />
              <span>OTOMASI CUSTOMER SERVICE 24/7</span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Website Anda Bisa Melayani, <span className="text-emerald-600">Bahkan Saat Anda Offline</span>.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Banyak pelanggan membatalkan niat membeli karena pertanyaan mereka terlambat dibalas saat malam hari atau luar jam kerja. 
              Fitur <strong className="text-slate-900">AI Customer Service</strong> dari KNEXU STUDIO melatih asisten pintar dengan data bisnis Anda untuk menjawab FAQ secara instan.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Menjawab Pertanyaan Harga, Lokasi, &amp; Layanan</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mengurangi Beban Pertanyaan Berulang ke Admin</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Otomatis Mengarahkan Pelanggan Serius ke WhatsApp</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              <Zap className="w-4 h-4 fill-current stroke-0" />
              <span>Pasang AI di Website Saya</span>
            </button>
          </div>

          {/* RIGHT LIVE CHAT SIMULATION WIDGET */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
              
              {/* CHAT HEADER */}
              <div className="bg-emerald-50 p-4 border-b border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold shadow-sm shadow-emerald-500/20">
                      <Bot className="w-6 h-6" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white"></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      KNEXU AI Assistant <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 stroke-0" />
                    </div>
                    <div className="text-[11px] text-emerald-700 font-mono">DEMO INTERAKTIF AGEN CS WEBSITE</div>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
                  title="Reset Demo Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* CHAT MESSAGES BODY */}
              <div className="p-4 sm:p-6 h-[340px] overflow-y-auto space-y-4 bg-slate-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.sender === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-500 text-white font-bold shadow-sm shadow-emerald-500/20'
                    }`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-white text-slate-700 rounded-tr-none border border-slate-200'
                        : 'bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-tl-none'
                    }`}>
                      <div className="text-[10px] text-slate-500 mb-1 font-mono flex items-center justify-between gap-4">
                        <span>{msg.sender === 'user' ? 'Pengunjung' : 'KNEXU AI'}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-mono bg-white p-3 rounded-xl max-w-xs border border-emerald-200 shadow-sm">
                    <Bot className="w-4 h-4 animate-bounce" />
                    <span>KNEXU AI sedang mengetik balasan...</span>
                  </div>
                )}
              </div>

              {/* QUICK PROMPT CHIPS */}
              <div className="p-3 bg-white border-t border-slate-200 overflow-x-auto flex items-center gap-2">
                <span className="text-[10px] text-slate-500 uppercase font-mono whitespace-nowrap flex items-center gap-1">
                  <CornerDownRight className="w-3 h-3 text-emerald-500" /> Coba Pertanyaan:
                </span>
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-300 text-slate-600 hover:text-emerald-700 text-xs whitespace-nowrap transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {/* CHAT INPUT FORM */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ketik pertanyaan seputar layanan website di sini..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20 font-bold transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
