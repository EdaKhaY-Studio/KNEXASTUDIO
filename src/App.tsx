import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BrandIntroSection } from './components/sections/BrandIntroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { AICustomerServiceSection } from './components/sections/AICustomerServiceSection';
import { PricingSection } from './components/sections/PricingSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { AboutSection } from './components/sections/AboutSection';
import { FAQSection } from './components/sections/FAQSection';
import { BlogSection } from './components/sections/BlogSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/footer/Footer';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { WaveDivider } from './components/ui/WaveDivider';

/*
 * Background color reference for each section
 *  Hero           #F8FAFC
 *  BrandIntro     #FFFFFF
 *  Services       #F8FAFC
 *  WhyUs          #FFFFFF
 *  AICustomer     #F8FAFC
 *  Pricing        #FFFFFF
 *  Process        #F8FAFC
 *  Portfolio      #FFFFFF
 *  Industries     #F8FAFC
 *  About          #FFFFFF
 *  FAQ            #F8FAFC
 *  CTA            #FFFFFF
 *  Footer         #0F172A
 */

export function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenConsultation  = () => setIsConsultationModalOpen(true);
  const handleCloseConsultation = () => setIsConsultationModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 font-body selection:bg-emerald-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* ── 1. HERO (Emerald) ─────────────────────────────────────────── */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: hero (emerald-900) → brand (white) */}
        <WaveDivider variant="soft"  fill="#FFFFFF" bg="#064E3B" />

        {/* ── 2. BRAND INTRO (White) ──────────────────────────────────── */}
        <BrandIntroSection />

        {/* wave: brand (white) → services (neon/slate-900) */}
        <WaveDivider variant="down"  fill="#0F172A" bg="#FFFFFF" />

        {/* ── 3. SERVICES (Neon) ─────────────────────────────────────── */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: services (neon/slate-900) → whyus (emerald) */}
        <WaveDivider variant="tilt"  fill="#064E3B" bg="#0F172A" />

        {/* ── 4. WHY US (Emerald) ───────────────────────────────────────── */}
        <WhyUsSection />

        {/* wave: whyus (emerald-900) → ai (white) */}
        <WaveDivider variant="up"    fill="#FFFFFF" bg="#064E3B" />

        {/* ── 5. AI CUSTOMER SERVICE (White) ──────────────────────────── */}
        <AICustomerServiceSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: ai (white) → pricing (neon/slate-900) */}
        <WaveDivider variant="soft"  fill="#0F172A" bg="#FFFFFF" flip />

        {/* ── 6. PRICING (Neon) ──────────────────────────────────────── */}
        <PricingSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: pricing (neon/slate-900) → process (emerald) */}
        <WaveDivider variant="down"  fill="#064E3B" bg="#0F172A" />

        {/* ── 7. PROCESS (Emerald) ──────────────────────────────────────── */}
        <ProcessSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: process (emerald-900) → portfolio (white) */}
        <WaveDivider variant="tilt"  fill="#FFFFFF" bg="#064E3B" flip />

        {/* ── 8. PORTFOLIO (White) ────────────────────────────────────── */}
        <PortfolioSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: portfolio (white) → industries (neon/slate-900) */}
        <WaveDivider variant="up"    fill="#0F172A" bg="#FFFFFF" />

        {/* ── 9. INDUSTRIES (Neon) ───────────────────────────────────── */}
        <IndustriesSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: industries (neon/slate-900) → about (emerald) */}
        <WaveDivider variant="soft"  fill="#064E3B" bg="#0F172A" />

        {/* ── 10. ABOUT (Emerald) ───────────────────────────────────────── */}
        <AboutSection />

        {/* wave: about (emerald-900) → faq (white) */}
        <WaveDivider variant="down"  fill="#FFFFFF" bg="#064E3B" flip />

        {/* ── 11. FAQ (White) ─────────────────────────────────────────── */}
        <FAQSection onOpenConsultation={handleOpenConsultation} />

        {/* wave: faq (white) → blog/cta (neon/slate-900) */}
        <WaveDivider variant="tilt"  fill="#0F172A" bg="#FFFFFF" />

        {/* ── 12. BLOG (Slate-900) ──────────────────────────────────── */}
        <BlogSection onOpenConsultation={handleOpenConsultation} />

        {/* ── 13. CTA (Slate-900) ───────────────────────────────────── */}
        <CTASection onOpenConsultation={handleOpenConsultation} />

        {/* wave: cta (neon/slate-900) → footer (emerald) */}
        <WaveDivider variant="up"    fill="#064E3B" bg="#0F172A" />
      </main>

      {/* FOOTER */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

export default App;
