import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Glow Blob */}
      <div className="cyan-blob w-80 h-80 top-1/2 -right-20 bg-cyan-100/60 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-bold mb-4">
            <span>شهادات نعتز بها</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            آراء وتجارب حقيقية لشركاء النجاح الذين وضعوا ثقتهم في ماستر ميديا للإعلان لتحقيق أهدافهم التسويقية.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Top Quote Icon and Star Rating */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 italic font-normal">
                  {testimonial.content}
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-200 shadow-sm shrink-0"
                  loading="lazy"
                />
                <div className="text-right">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      {testimonial.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  </div>
                  <p className="text-xs text-slate-500">
                    {testimonial.role} - {testimonial.company}
                  </p>
                  <span className="text-[10px] text-cyan-600 font-medium">
                    {testimonial.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
