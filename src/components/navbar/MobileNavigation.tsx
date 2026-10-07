import React, { useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './types';

interface MobileNavigationProps {
  items: NavItem[];
  activeSection: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onNavClick: (id: string, href: string) => void;
  onOpenConsultation: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  items,
  activeSection,
  isOpen,
  onToggle,
  onClose,
  onNavClick,
  onOpenConsultation,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="flex md:hidden items-center gap-2">
      {/* Quick compact consultation button on mobile bar */}
      <button
        onClick={onOpenConsultation}
        className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-nav font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
        aria-label="Konsultasi Langsung"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-current stroke-0" />
        <span>Konsultasi</span>
      </button>

      {/* Hamburger Toggle Button */}
      <button
        onClick={onToggle}
        className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-emerald-400" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[65px] left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl z-40 overflow-hidden"
          >
            <div className="max-w-md mx-auto px-6 py-6 flex flex-col gap-3">
              <nav className="flex flex-col gap-1" aria-label="Navigasi Mobile">
                {items.map(({ id, label, href }, index) => {
                  const isActive = activeSection === id;

                  return (
                    <motion.a
                      key={id}
                      href={href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        onNavClick(id, href);
                      }}
                      className={`
                        flex items-center justify-between px-4 py-3 rounded-xl font-nav text-sm font-medium transition-all duration-200
                        ${
                          isActive
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isActive ? 'bg-emerald-400' : 'bg-slate-600'
                          }`}
                        />
                        <span>{label}</span>
                      </span>

                      {isActive && (
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          Aktif
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.2 }}
                className="pt-3 border-t border-white/[0.08]"
              >
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-nav font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current stroke-0" />
                  <span>Konsultasi Gratis</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
