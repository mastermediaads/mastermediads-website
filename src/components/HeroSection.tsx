import React from 'react';
import { AGENCY_INFO } from '../data/content';
import { Logo } from './Logo';
import { ArrowLeft, Sparkles, Video, Megaphone, TrendingUp, Play, Eye, Flame } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* 1. Dynamic Ambient Glowing Light Blobs */}
      <div className="ambient-glow-orb ambient-cyan w-[450px] h-[450px] -top-24 -right-24 animate-pulse-glow" />
      <div className="ambient-glow-orb ambient-blue w-[550px] h-[550px] top-1/3 -left-32 animate-float-slow" />

      {/* 2. Massive Watermark Background Circular Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] pointer-events-none opacity-[0.035] select-none -z-0">
        <img
          src="/logo.webp"
          alt="Master Media Background Watermark"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Right Column: Hero Typography & Actions (RTL Arabic Right-Aligned) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Top Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-700 dark:text-cyanGlow-300 text-xs sm:text-sm font-bold shadow-cyan-glow/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanGlow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyanGlow-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-cyanGlow-500 dark:text-cyanGlow-400" />
              <span>وكالة إعلانية وإنتاج إعلامي بهوية رقمية متقدمة</span>
            </div>

            {/* Brand Headline (Refined Elegant Size) */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.25] font-heading">
                {AGENCY_INFO.name}
              </h1>

              {/* Inspiring Tagline */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold cyan-gradient-text font-heading leading-relaxed">
                {AGENCY_INFO.tagline}
              </p>
            </div>

            {/* Concise Mission Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {AGENCY_INFO.description}
            </p>

            {/* Dual Liquid Glass Action Buttons (Right-aligned) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
              {/* Primary Button: Discover Services */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold text-white liquid-glass-btn group"
              >
                <span>اكتشف خدماتنا</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </a>

              {/* Secondary Button: Contact Us */}
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white liquid-glass-btn-secondary group"
              >
                <span>تواصل معنا</span>
                <Sparkles className="w-4 h-4 text-cyanGlow-500 dark:text-cyanGlow-400 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Quick Guarantees / Pillars */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl text-right">
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <Video className="w-4 h-4 text-cyanGlow-500 dark:text-cyanGlow-400 shrink-0" />
                  <span>تصوير سينمائي</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">إنتاج فيديو عالي الجودة</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <Megaphone className="w-4 h-4 text-cyanGlow-500 dark:text-cyanGlow-400 shrink-0" />
                  <span>ترويج مستهدف</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">حملات مدروسة بدقة</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <TrendingUp className="w-4 h-4 text-cyanGlow-500 dark:text-cyanGlow-400 shrink-0" />
                  <span>عائد حقيقي</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">مضاعفة مبيعات وتفاعل</p>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Showcase (Liquid Glass 3D Deck & Circular Logo Emblem) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-600/20 dark:from-electric-600/30 via-cyanGlow-500/15 dark:via-cyanGlow-500/20 to-transparent rounded-3xl blur-3xl" />

            {/* Main Interactive Liquid Glass Showcase Card */}
            <div className="relative w-full max-w-md liquid-glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/20 shadow-xl dark:shadow-2xl animate-float-slow text-right">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <Logo variant="badge" size="sm" />
                  <div className="text-right">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                      ماستر ميديا
                    </h3>
                    <p className="text-[10px] text-cyanGlow-600 dark:text-cyanGlow-400 font-mono">
                      LIVE CAMPAIGN PERFORMANCE
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-400/40 text-emerald-600 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  حملات نشطة
                </span>
              </div>

              {/* Interactive Video Production Showcase Widget */}
              <div className="mt-5 relative rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-100 via-white to-slate-100 dark:from-deep-900 dark:via-deep-850 dark:to-deep-800 border border-slate-200 dark:border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-electric-600/20 dark:bg-electric-600/30 border border-electric-500/30 dark:border-electric-500/40 text-electric-600 dark:text-cyanGlow-300 flex items-center justify-center">
                      <Play className="w-4 h-4 text-electric-600 dark:text-cyanGlow-400 fill-electric-600 dark:fill-cyanGlow-400" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">إعلان فيديو ريلز وسوشيال</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Cinematic 4K UGC Production</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-electric-700 dark:text-cyanGlow-300 bg-electric-50 dark:bg-cyanGlow-950/60 px-2 py-0.5 rounded border border-electric-200 dark:border-cyanGlow-800">
                    +4.8x ROI
                  </span>
                </div>

                {/* Progress Visual Bar */}
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600 dark:text-slate-300">معدل المشاهدات والتفاعل</span>
                    <span className="text-electric-600 dark:text-cyanGlow-300 font-bold font-mono">94.2%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-electric-600 via-cyanGlow-500 to-cyanGlow-300"
                      style={{ width: '94%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Stats Row */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 p-3.5 text-right">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <Eye className="w-3.5 h-3.5 text-cyanGlow-600 dark:text-cyanGlow-400" />
                    <span>الوصول الشهري</span>
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white font-mono">+1.8M</div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">↑ نمو سريع للجمهور</span>
                </div>

                <div className="rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 p-3.5 text-right">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <Flame className="w-3.5 h-3.5 text-cyanGlow-600 dark:text-cyanGlow-400" />
                    <span>التحويل والطلبات</span>
                  </div>
                  <div className="text-xl font-black text-electric-600 dark:text-cyanGlow-300 font-mono">+340%</div>
                  <span className="text-[10px] text-cyanGlow-700 dark:text-cyanGlow-400 font-semibold">استهداف موجه 100%</span>
                </div>
              </div>

              {/* Platforms Floating Mini-Pills */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">المنصات المدعومة:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-[10px] font-bold text-slate-800 dark:text-white">Instagram</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-[10px] font-bold text-slate-800 dark:text-white">TikTok</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-[10px] font-bold text-slate-800 dark:text-white">Snapchat</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
