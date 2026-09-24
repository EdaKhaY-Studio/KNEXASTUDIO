import React, { useState, useEffect, useRef } from 'react';
import {
  Home, 
  HelpCircle, 
  User, 
  Grid, 
  MessageSquare, 
  Zap,
  Menu as MenuIcon, 
  X, 
  ArrowUpRight,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  Icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'beranda', label: 'Beranda',      href: '#',       Icon: Home       },
  { id: 'faq',     label: 'FAQ',          href: '#faq',    Icon: HelpCircle },
  { id: 'tentang', label: 'Tentang Saya', href: '#tentang',Icon: User       },
  { id: 'layanan', label: 'Menu',         href: '#layanan',Icon: Grid       },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]  = useState('beranda');
  const [hoveredItem, setHoveredItem]      = useState<string | null>(null);
  const ticking = useRef(false);

  /* ─── Scroll + section-spy ─────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 40;
        setScrolled(isScrolled);

        const sectionIds = NAV_ITEMS.map(n => n.id);
        const scrollPos  = window.scrollY + 200;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const { offsetTop: top, offsetHeight: h } = el;
            if (scrollPos >= top && scrollPos < top + h) {
              setActiveSection(id);
              break;
            }
          }
        }
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── Body scroll lock when mobile menu open ────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  /* ─── Helpers ───────────────────────────────────────────────────── */
  const isActive  = (id: string) => activeSection === id;
  const isVisible = (id: string) => isActive(id) || hoveredItem === id;

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">

      {/* ── Outer wrapper: morphs from full-width → floating pill ── */}
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? 'max-w-5xl sm:max-w-6xl pt-4 px-4 sm:px-8'
            : 'w-full pt-0 px-0'
        }`}
      >
        {/* ── Inner bar ──────────────────────────────────────────── */}
        <div
          className={`transition-all duration-500 ease-out flex items-center justify-between ${
            scrolled
              ? 'bg-emerald-50/95 backdrop-blur-2xl border border-emerald-200/80 rounded-full px-5 sm:px-7 py-3 sm:py-3.5 shadow-2xl shadow-emerald-900/10'
              : 'bg-gradient-to-r from-emerald-50/95 to-white/95 backdrop-blur-md border-b border-emerald-100 px-6 sm:px-14 py-5 sm:py-6'
          }`}
        >

          {/* ── Logo ──────────────────────────────────────────────── */}
          <a href="#" className="flex items-center gap-3 group shrink-0" onClick={() => handleNavClick('beranda')}>
            <div
              className={`flex items-center justify-center transition-all duration-300 bg-white text-emerald-500 border border-emerald-100 shadow-lg shadow-emerald-400/10 group-hover:scale-105 group-hover:rotate-6 ${
                scrolled ? 'w-9 h-9 rounded-full' : 'w-11 h-11 rounded-2xl'
              }`}
            >
              <Zap className="w-5 h-5 fill-current stroke-0" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-1.5">
                KNEXU{' '}
                <span className="text-emerald-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                  STUDIO
                </span>
              </span>
              {!scrolled && (
                <span className="text-[10px] text-slate-500 font-mono hidden sm:inline-block mt-0.5">
                  Digital Studio · Meulaboh, Aceh Barat
                </span>
              )}
            </div>
          </a>

          {/* ── Desktop Nav ───────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center font-nav font-medium text-sm"
            style={{ gap: '6px' }}
          >
            {NAV_ITEMS.map(({ id, label, href, Icon }) => {
              const active  = isActive(id);
              const visible = isVisible(id);

              return (
                <a
                  key={id}
                  href={href}
                  onClick={() => handleNavClick(id)}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  title={label}
                  aria-current={active ? 'page' : undefined}
                  /*
                   * KEY FIX: we use inline style for width so we can animate
                   * from icon-only (40px) to text-wide (~auto) smoothly.
                   * Tailwind `max-w-*` on a flex parent works but causes the
                   * inner translate-x glitch. Using CSS transition on `width`
                   * with a measured max-width avoids it entirely.
                   */
                  style={{
                    /* Reserve space for the widest label ("Tentang Saya" ≈ 130px + 40px icon+gap) */
                    width: visible ? `${40 + 8 + label.length * 8.2}px` : '40px',
                    transition: 'width 300ms cubic-bezier(0.4,0,0.2,1), background 250ms, border-color 250ms, box-shadow 250ms',
                  }}
                  className={`
                    relative flex items-center justify-start overflow-hidden
                    h-10 px-0 pl-[10px] rounded-full border
                    transition-all duration-300
                    ${active
                      ? 'bg-white border-emerald-200 shadow-sm shadow-emerald-500/10'
                      : 'bg-transparent border-transparent hover:bg-emerald-100/50 hover:border-emerald-200/50'
                    }
                  `}
                >
                  {/* Icon — always visible */}
                  <Icon
                    className={`w-[18px] h-[18px] shrink-0 transition-colors duration-200 ${
                      active
                        ? 'text-emerald-600'
                        : 'text-slate-500 group-hover:text-emerald-500'
                    }`}
                  />

                  {/* Label — fades in when visible, fades out otherwise */}
                  <span
                    aria-hidden={!visible}
                    style={{
                      opacity:    visible ? 1 : 0,
                      transform:  visible ? 'translateX(0)' : 'translateX(-6px)',
                      transition: 'opacity 250ms ease-out, transform 250ms ease-out',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                    className={`ml-2 mr-2.5 whitespace-nowrap text-[13px] ${
                      active ? 'text-emerald-700 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    {label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────────── */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="
                inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3
                rounded-full bg-emerald-500 text-white font-nav font-bold text-xs sm:text-sm
                hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20
                active:scale-95
                transition-all duration-300
                group
              "
            >
              <PhoneCall className="w-4 h-4 fill-current stroke-[2.5] group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden lg:inline">Hubungi saya sekarang!</span>
              <span className="lg:hidden">Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-full bg-emerald-500 text-white font-nav font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Hubungi</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2.5 rounded-full bg-emerald-100/50 text-slate-600 hover:text-slate-900 hover:bg-emerald-200/50 transition-colors"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" />
                : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>{/* end inner bar */}

        {/* ── Mobile Drawer ─────────────────────────────────────────── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="p-6 rounded-3xl bg-emerald-50/95 backdrop-blur-xl border border-emerald-200 shadow-2xl shadow-emerald-900/10 flex flex-col gap-4">
            <nav className="flex flex-col gap-1.5 text-sm font-nav font-semibold">
              {NAV_ITEMS.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-200 ${
                    isActive(id)
                      ? 'bg-white text-emerald-700 border border-emerald-200'
                      : 'text-slate-600 hover:bg-emerald-100/50 hover:text-slate-900 border border-transparent'
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive(id) ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{label}</span>
                  {isActive(id) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-full bg-emerald-500 text-white font-nav font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
            >
              <PhoneCall className="w-4 h-4 fill-current stroke-[2.5]" />
              <span>Hubungi saya sekarang!</span>
            </button>
          </div>
        </div>

      </div>{/* end outer wrapper */}
    </header>
  );
};
