import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Brand() {
  return (
    <section id="brand" className="py-20 px-6 md:px-8 max-w-5xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-base md:text-lg font-mono uppercase tracking-widest mb-12 opacity-50"
      >
        01. Brand Representation — {BRAND_INFO.name}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-14 shadow-sm"
      >
        <div className="flow-root">
          {/* Top-Left Floated Product Image */}
          <div className="float-left mr-6 mb-4 sm:mr-8 sm:mb-6 w-44 sm:w-56 md:w-64 max-w-[45%]">
            <div className="aspect-[4/3] sm:aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 relative flex items-center justify-center shadow-sm group">
              <img 
                src={BRAND_INFO.image} 
                alt={`${BRAND_INFO.name} Skincare Product`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const currentSrc = e.currentTarget.getAttribute('src') || '';
                  if (currentSrc.includes('.jpeg')) {
                    e.currentTarget.src = currentSrc.replace('.jpeg', '.jpg');
                  } else {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                <Sparkles size={24} className="mb-2 opacity-60 text-emerald-600 dark:text-emerald-400" />
                <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                  Dr. Anne Product
                </span>
                <span className="font-mono text-[10px] text-zinc-400 mt-1">
                  {BRAND_INFO.image}
                </span>
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Signature Skincare Line
            </p>
          </div>

          {/* Brand Header & Text Content that flows around image */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono uppercase tracking-widest text-emerald-800 dark:text-emerald-300 mb-3">
              {BRAND_INFO.category}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {BRAND_INFO.name}
            </h3>
            <p className="text-base md:text-lg font-light text-zinc-500 dark:text-zinc-400 mt-1 mb-4 italic">
              "{BRAND_INFO.tagline}"
            </p>

            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed text-justify mb-4">
              {BRAND_INFO.description}
            </p>

            <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-justify mb-5">
              {BRAND_INFO.marketTrust}
            </p>

            {/* Founder Quote */}
            <div className="border-l-2 border-emerald-500 pl-4 py-2 my-4 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-r-xl">
              <p className="text-sm md:text-base italic text-zinc-800 dark:text-zinc-200 font-light leading-relaxed">
                "{BRAND_INFO.quote.text}"
              </p>
              <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 mt-1.5 font-medium">
                — {BRAND_INFO.quote.author}
              </p>
            </div>
          </div>

          {/* Highlights & Ambassador details */}
          <div className="clear-both pt-8 border-t border-zinc-200 dark:border-zinc-800 mt-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Formulation Highlights & Philosophy
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {BRAND_INFO.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                  <span className="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Check size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-5 border border-zinc-200/60 dark:border-zinc-700/40">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                Ambassador Representation
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                {BRAND_INFO.ambassadorRole}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
