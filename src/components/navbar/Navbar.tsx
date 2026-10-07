import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { NavbarProps } from './types';
import { NAV_ITEMS } from './nav-data';
import { NavLogo } from './NavLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { NavCTA } from './NavCTA';
import { MobileNavigation } from './MobileNavigation';

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  /* ─── Smooth scroll handler with sticky offset compensation ──────── */
  const handleNavClick = useCallback((id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', href);
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navOffset = 84; // Compensation for sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  }, []);

  /* ─── Scroll Spy + Hide/Show on Directional Scroll ───────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const isScrolled = currentScrollY > 24;
        setScrolled(isScrolled);

        // Hide / Show behavior:
        // Always visible when at or near top (scrollY <= 80)
        // Or when mobile menu is open
        if (mobileMenuOpen || currentScrollY <= 80) {
          setVisible(true);
        } else {
          const delta = currentScrollY - lastScrollY.current;
          // Scrolling down with threshold > 8px
          if (delta > 8 && currentScrollY > 160) {
            setVisible(false);
          }
          // Scrolling up with threshold < -4px
          else if (delta < -4) {
            setVisible(true);
          }
        }
        lastScrollY.current = currentScrollY;

        // Active Section ScrollSpy
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // Bottom of page detection -> Kontak is active
        if (windowHeight + currentScrollY >= docHeight - 90) {
          setActiveSection('kontak');
          ticking.current = false;
          return;
        }

        // Section scan from top to bottom
        const threshold = currentScrollY + 160;
        const sectionIds = NAV_ITEMS.map((item) => item.id);
        let currentActive = 'beranda';

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (threshold >= top && threshold < top + height) {
              currentActive = id;
              break;
            } else if (threshold >= top) {
              currentActive = id;
            }
          }
        }

        setActiveSection(currentActive);
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  /* ─── Re-reveal navbar when mouse hovers near the top viewport ──── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 64) {
        setVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.header
      role="banner"
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: visible ? 0 : -100,
      }}
      transition={{
        opacity: { duration: 0.35, ease: 'easeOut' },
        y: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-out
        ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm shadow-black/25 py-3.5 sm:py-4'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* ── 1. LOGO KNEXU STUDIO (Left) ────────────────────────── */}
          <NavLogo onNavClick={handleNavClick} scrolled={scrolled} />

          {/* ── 2. DESKTOP NAVIGATION (Center) ─────────────────────── */}
          <DesktopNavigation
            items={NAV_ITEMS}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          {/* ── 3. CTA BUTTON (Right) ──────────────────────────────── */}
          <div className="hidden md:flex items-center shrink-0">
            <NavCTA onOpenConsultation={onOpenConsultation} />
          </div>

          {/* ── 4. MOBILE NAVIGATION (Toggle & Drawer) ─────────────── */}
          <MobileNavigation
            items={NAV_ITEMS}
            activeSection={activeSection}
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen((prev) => !prev)}
            onClose={() => setMobileMenuOpen(false)}
            onNavClick={handleNavClick}
            onOpenConsultation={onOpenConsultation}
          />

        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
