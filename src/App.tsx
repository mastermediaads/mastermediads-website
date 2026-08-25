import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AGENCY_INFO } from './data/content';
import { MessageCircle, Sun, Moon } from 'lucide-react';

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleOpenContact = (serviceName?: string) => {
    setSelectedService(serviceName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-deep-950 dark:text-slate-100 flex flex-col antialiased selection:bg-cyanGlow-500 selection:text-deep-950 relative overflow-x-hidden transition-colors duration-300">
      
      {/* 1. Floating Top Liquid Glass Navbar */}
      <Navbar onOpenContact={handleOpenContact} isDark={isDark} onToggleTheme={toggleTheme} />

      {/* 2. Main Sections Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenContact={() => handleOpenContact()} />

        {/* Core Services Section (01. Video Production, 02. Social Media Ads) */}
        <ServicesSection onSelectService={handleOpenContact} />

        {/* Why Advertising Matters (5 Educational Points) */}
        <BenefitsSection />

        {/* Interactive Campaign Reach & ROI Calculator */}
        <CalculatorSection />

        {/* High Impact Call To Action Section */}
        <CTASection onOpenContact={() => handleOpenContact()} />

        {/* Direct Contact Channels & Consultation Form */}
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 4. Interactive Consultation Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={selectedService}
      />

      {/* 5. Floating Liquid Glass WhatsApp Action Button */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group border-2 border-white/40"
        title="تواصل معنا عبر واتساب"
        aria-label="تواصل معنا عبر واتساب"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
        <span className="absolute right-full ml-3 px-3 py-1.5 liquid-glass-nav text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/20">
          تواصل معنا عبر واتساب
        </span>
      </a>

      {/* 6. Floating Quick Theme Toggle Button (Bottom-Right) */}
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-full liquid-glass-nav text-slate-800 dark:text-cyanGlow-300 shadow-2xl border border-slate-300/80 dark:border-white/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group backdrop-blur-xl"
        title={isDark ? "التبديل إلى الوضع النهاري (Light Mode)" : "التبديل إلى الوضع الليلي (Dark Mode)"}
        aria-label="تبديل الوضع"
      >
        <span className="p-1 rounded-full bg-slate-200/80 dark:bg-white/10 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon className="w-4 h-4 text-electric-600 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </span>
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
          {isDark ? 'الوضع النهاري' : 'الوضع الليلي'}
        </span>
      </button>

    </div>
  );
}

export default App;
