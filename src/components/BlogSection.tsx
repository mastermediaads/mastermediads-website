import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { ArrowLeft, Clock, Calendar, BookOpen, Check, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-4">
            <BookOpen className="w-4 h-4 text-cyan-600" />
            <span>مدونة ماستر ميديا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            أحدث المقالات وأسرار التسويق الرقمي
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نشاركك أحدث الرؤى والتكتيكات التسويقية لمساعدتك على اتخاذ أفضل القرارات الترويجية لعلامتك التجارية.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/80 hover:border-cyan-400 p-7 shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-3 leading-snug font-heading">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {post.summary}
                </p>
              </div>

              {/* Read Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  <span>قراءة المقال</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 mb-3">
              {selectedPost.category}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading leading-snug">
              {selectedPost.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span className="text-cyan-600 font-semibold">فريق تحرير ماستر ميديا</span>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900">
                {selectedPost.summary}
              </p>
              <p>
                في ماستر ميديا للإعلان، نؤمن بأن التسويق الناجح يبدأ من فهم دقيق لطبيعة الجمهور المستهدف واختيار المنصة الإعلانية التي يقضي فيها هذا الجمهور أطول أوقاته ويكون أكثر استعدادًا للتفاعل والشراء.
              </p>
              <h4 className="text-lg font-bold text-slate-900 pt-2 font-heading">
                أهم التوصيات العملية:
              </h4>
              <ul className="space-y-2 pr-4 list-disc text-slate-600 text-sm">
                <li>قم بإجراء اختبارات A/B دورية للعناوين والصور ومقاطع الفيديو الترويجية.</li>
                <li>ركز على القيمة التي يحصل عليها العميل وليس فقط مميزات المنتج.</li>
                <li>تأكد من سلاسة تجربة المستخدم وسرعة تحميل صفحة الهبوط أو المتجر.</li>
                <li>حلل تقارير الإعلانات أسبوعيًا لخفض تكلفة اكتساب العميل (CPA).</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 transition-colors"
              >
                إغلاق المقال
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
