import React from 'react';
import { ArrowLeft, Sparkles, TrendingUp, Users, Target, ShieldCheck, Zap } from 'lucide-react';
import { SOCIAL_PLATFORMS } from '../data/content';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-cyan-50/50 via-white to-white">
      {/* Background Subtle Cyan Blobs */}
      <div className="cyan-blob w-96 h-96 -top-20 -right-20 bg-cyan-200/50 rounded-full" />
      <div className="cyan-blob w-80 h-80 top-1/2 -left-24 bg-teal-200/40 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content (RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Agency Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs sm:text-sm font-bold shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>وكالة رائدة في التسويق والإعلانات الرقمية</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.25] font-heading">
              الترويج الرقمي{' '}
              <span className="relative inline-block">
                <span className="cyan-gradient-text">مفتاح نجاح</span>
                <svg
                  className="absolute -bottom-2 right-0 w-full h-3 text-cyan-400/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              أعمالك
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              في عالم اليوم، حضورك على منصات التواصل الاجتماعي لم يعد خيارًا، بل ضرورة. في <strong className="text-slate-800 font-semibold">ماستر ميديا للإعلان</strong> نساعدك على الوصول إلى جمهورك المستهدف وتحقيق نمو حقيقي ومستدام.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>استكشف خدماتنا</span>
                <ArrowLeft className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-700 bg-white border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50/40 shadow-sm transition-all"
              >
                <span>تواصل معنا</span>
                <Zap className="w-5 h-5 text-cyan-500" />
              </button>
            </div>

            {/* Trust Highlights Snippet */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-right">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">استهداف</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">دقيق ومخصص</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-right">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">عائد استثمار</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">مضاعف وسريع</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-right">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">شفافية</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">تقارير مباشرة</p>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Showcase (Smartphone & Analytics with Floating Badges) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Main Smartphone Mockup Container */}
              <div className="relative mx-auto w-[280px] sm:w-[310px] h-[580px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-cyan-900/20 ring-1 ring-slate-800/80 animate-float">
                {/* Speaker & Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Smartphone Screen */}
                <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[36px] overflow-hidden p-4 pt-10 text-white relative flex flex-col justify-between border border-slate-700/50">
                  
                  {/* Top Stats Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-semibold text-slate-300">حملة نشطة ومباشرة</span>
                      </div>
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono font-bold">
                        LIVE
                      </span>
                    </div>

                    <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700/60 mb-3">
                      <p className="text-xs text-slate-400 mb-1 font-medium">إجمالي الوصول والظهور</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-black text-white font-mono tracking-tight">184,920</span>
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          +318%
                        </span>
                      </div>
                      <div className="mt-2.5 h-2 bg-slate-700/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full w-[82%]" />
                      </div>
                    </div>

                    {/* Mini Analytics Chart Simulation */}
                    <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700/60 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-300">معدل التحويل والمبيعات</span>
                        <span className="text-xs font-bold text-cyan-400 font-mono">4.9x ROI</span>
                      </div>
                      {/* Bar Chart Simulation */}
                      <div className="h-16 flex items-end gap-1.5 justify-between pt-2">
                        <div className="w-full bg-slate-700 rounded-t h-[30%]" />
                        <div className="w-full bg-slate-700 rounded-t h-[45%]" />
                        <div className="w-full bg-cyan-700 rounded-t h-[60%]" />
                        <div className="w-full bg-cyan-600 rounded-t h-[75%]" />
                        <div className="w-full bg-cyan-500 rounded-t h-[90%]" />
                        <div className="w-full bg-gradient-to-t from-cyan-500 to-teal-300 rounded-t h-[100%]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Campaign Status Card */}
                  <div className="bg-cyan-950/70 border border-cyan-500/30 rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold text-white">ماستر ميديا للإعلان</p>
                      <p className="text-[10px] text-cyan-300">تحقيق أقصى وصول بأعلى عائد</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Social Media Badges */}
              
              {/* Instagram Badge */}
              <div className="absolute -top-4 -right-6 sm:-right-8 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5 animate-float-slow z-20">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <span className="text-xs font-bold font-sans">IG</span>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-800">Instagram</p>
                  <p className="text-[10px] text-cyan-600 font-semibold">+45K تفاعل</p>
                </div>
              </div>

              {/* TikTok Badge */}
              <div className="absolute top-1/4 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5 animate-float-reverse z-20">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm">
                  <span className="text-xs font-bold text-cyan-400">TT</span>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-800">TikTok Ads</p>
                  <p className="text-[10px] text-cyan-600 font-semibold">+1.2M مشاهدة</p>
                </div>
              </div>

              {/* Snapchat Badge */}
              <div className="absolute top-2/3 -right-6 sm:-right-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5 animate-float z-20">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-900 shadow-sm font-bold">
                  <span className="text-xs">👻</span>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-800">Snapchat</p>
                  <p className="text-[10px] text-cyan-600 font-semibold">+80K سحب شاشة</p>
                </div>
              </div>

              {/* Facebook & X and YouTube Row Badges (Bottom Overlay) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl flex items-center justify-around z-20">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">f</div>
                  <span className="text-[11px] font-bold text-slate-700">Facebook</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold">▶</div>
                  <span className="text-[11px] font-bold text-slate-700">YouTube</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">𝕏</div>
                  <span className="text-[11px] font-bold text-slate-700">Platform</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
