import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { ArrowLeft, ExternalLink, Sparkles, TrendingUp } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenContact: (projectName?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const categories = ['الكل', 'حملات ممولة & مبيعات', 'إدارة حسابات ومحتوى', 'توليد عملاء محتملين (Leads)'];

  const filteredItems = activeFilter === 'الكل'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-4">
            <span>نماذج من إنجازاتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            قصص نجاح وأعمال نفخر بها
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نتائج حقيقية حققناها لشركائنا من خلال استراتيجيات تسويقية دقيقة وحملات إعلانية عالية الكفاءة.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === category
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/80 hover:border-cyan-400 overflow-hidden shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-3 font-heading">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Result Card Highlight */}
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50/60 rounded-2xl p-4 border border-cyan-100/80 mb-6">
                  <div className="flex items-center gap-2 text-cyan-800 text-xs font-bold mb-1">
                    <TrendingUp className="w-4 h-4 text-cyan-600" />
                    <span>النتيجة المحققة</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {item.metricValue}
                </span>
                <button
                  onClick={() => onOpenContact(`استفسار عن قصة نجاح: ${item.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  <span>أريد نتائج مماثلة</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
