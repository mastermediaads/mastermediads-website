import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ServicesSection } from './components/ServicesSection';
import { GiftsSection } from './components/GiftsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalModals } from './components/LegalModals';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenContact = (serviceName?: string) => {
    setSelectedService(serviceName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
      {/* Sticky Top Navbar with Logo Placeholder */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={() => handleOpenContact()} />

        {/* 2. Why Social Media Ads Matter (5 Benefits) */}
        <BenefitsSection />

        {/* 3. Agency Core Services (6 Services) */}
        <ServicesSection onSelectService={handleOpenContact} />

        {/* 4. Gifts and Contests Special Feature */}
        <GiftsSection onOpenContact={handleOpenContact} />

        {/* 5. Portfolio & Case Studies */}
        <PortfolioSection onOpenContact={handleOpenContact} />

        {/* 6. Why Master Media (Stats & Trust) */}
        <WhyUsSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. Marketing Blog & Insights */}
        <BlogSection />

        {/* 9. Final Call to Action */}
        <CTASection onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={setLegalModalType}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Consultation Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Privacy Policy & Terms Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
        title="تواصل مباشرة عبر واتساب"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          مستشارنا متواجد لخدمتك
        </span>
      </a>
    </div>
  );
}

export default App;
