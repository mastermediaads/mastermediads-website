import React from 'react';
import { AGENCY_INFO, PLATFORMS_LIST } from '../data/content';
import { Logo } from './Logo';
import { ArrowLeft, Sparkles, Video, Megaphone, TrendingUp, Play, Eye, Flame, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* 1. Dynamic Ambient Glowing Light Blobs */}
      <div className="ambient-glow-orb ambient-cyan w-[500px] h-[500px] -top-24 -right-24 animate-pulse-glow" />
      <div className="ambient-glow-orb ambient-blue w-[600px] h-[600px] top-1/3 -left-32 animate-float-slow" />
      <div className="ambient-glow-orb ambient-cyan w-[400px] h-[400px] -bottom-20 right-1/4 animate-float-reverse" />

      {/* 2. Massive Watermark Background Geometric Glyph */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] pointer-events-none opacity-[0.035] select-none -z-0">
        <Logo variant="mark" size="custom" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Typography & Actions (RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6 sm:space-y-8">
            
            {/* Top Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-300 text-xs sm:text-sm font-bold shadow-cyan-glow/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanGlow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyanGlow-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-cyanGlow-400" />
              <span>وكالة إعلانية وإنتاج إعلامي بهوية رقمية متقدمة</span>
            </div>

            {/* Brand Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.18] font-heading">
                {AGENCY_INFO.name}
              </h1>

              {/* Inspiring Tagline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold cyan-gradient-text font-heading leading-relaxed">
                {AGENCY_INFO.tagline}
              </p>
            </div>

            {/* Concise Mission Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {AGENCY_INFO.description}
            </p>

            {/* Dual Liquid Glass Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Button: Discover Services */}
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white liquid-glass-btn group"
              >
                <span>اكتشف خدماتنا</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </a>

              {/* Secondary Button: Contact Us */}
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-slate-200 hover:text-white liquid-glass-btn-secondary group"
              >
                <span>تواصل معنا</span>
                <Sparkles className="w-4 h-4 text-cyanGlow-400 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Quick Guarantees / Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white">
                  <Video className="w-4 h-4 text-cyanGlow-400 shrink-0" />
                  <span>تصوير سينمائي</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">إنتاج فيديو عالي الجودة</p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white">
                  <Megaphone className="w-4 h-4 text-cyanGlow-400 shrink-0" />
                  <span>ترويج مستهدف</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">حملات مدروسة بدقة</p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white">
                  <TrendingUp className="w-4 h-4 text-cyanGlow-400 shrink-0" />
                  <span>عائد حقيقي</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">مضاعفة مبيعات وتفاعل</p>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Showcase (Liquid Glass 3D Deck & Dynamic Metrics) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight for Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-600/30 via-cyanGlow-500/20 to-transparent rounded-3xl blur-3xl" />

            {/* Main Interactive Liquid Glass Showcase Card */}
            <div className="relative w-full max-w-md liquid-glass-card rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl animate-float-slow">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Logo variant="badge" size="sm" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">
                      ماستر ميديا
                    </h3>
                    <p className="text-[11px] text-cyanGlow-400 font-mono">
                      LIVE CAMPAIGN PERFORMANCE
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  حملات نشطة
                </span>
              </div>

              {/* Interactive Video Production Showcase Widget */}
              <div className="mt-5 relative rounded-2xl overflow-hidden bg-gradient-to-tr from-deep-900 via-deep-850 to-deep-800 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-electric-600/30 border border-electric-500/40 text-cyanGlow-300 flex items-center justify-center">
                      <Play className="w-4 h-4 text-cyanGlow-400 fill-cyanGlow-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">إعلان فيديو ريلز وسوشيال</p>
                      <p className="text-[10px] text-slate-400">Cinematic 4K UGC Production</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyanGlow-300 bg-cyanGlow-950/60 px-2 py-0.5 rounded border border-cyanGlow-800">
                    +4.8x ROI
                  </span>
                </div>

                {/* Progress Visual Bar */}
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-300">معدل المشاهدات والتفاعل</span>
                    <span className="text-cyanGlow-300 font-bold font-mono">94.2%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-electric-600 via-cyanGlow-500 to-cyanGlow-300"
                      style={{ width: '94%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Stats Row */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 text-right">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Eye className="w-3.5 h-3.5 text-cyanGlow-400" />
                    <span>الوصول الشهري</span>
                  </div>
                  <div className="text-xl font-black text-white font-mono">+1.8M</div>
                  <span className="text-[10px] text-emerald-400 font-semibold">↑ نمو سريع للجمهور</span>
                </div>

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 text-right">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Flame className="w-3.5 h-3.5 text-cyanGlow-400" />
                    <span>التحويل والطلبات</span>
                  </div>
                  <div className="text-xl font-black text-cyanGlow-300 font-mono">+340%</div>
                  <span className="text-[10px] text-cyanGlow-400 font-semibold">استهداف موجه 100%</span>
                </div>
              </div>

              {/* Platforms Floating Mini-Pills */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="text-[11px] text-slate-400">المنصات المدعومة:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white">Instagram</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white">TikTok</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white">Snapchat</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
