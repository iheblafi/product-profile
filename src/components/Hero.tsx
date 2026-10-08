import { motion } from "motion/react";
import { Mail, Sparkles } from "lucide-react";
import { USER } from "../data";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.889 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.487-8.413z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-8 max-w-5xl mx-auto w-full">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-6 md:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={13} className="text-emerald-600 dark:text-emerald-400" />
              Available for Brand Representation & Exhibitions
            </span>
          </motion.div>

          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
            >
              {USER.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4"
            >
              {USER.role}
            </motion.p>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl text-justify">
                {USER.about}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href={`mailto:${USER.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <Mail size={18} />
                  Get in touch
                </a>
                
                <div className="flex items-center gap-3">
                  <a 
                    href={`https://wa.me/${USER.socials.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all font-medium"
                    aria-label={`Chat on WhatsApp at ${USER.socials.whatsapp}`}
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 shrink-0 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center overflow-hidden text-zinc-400 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800 shadow-md"
        >
          <img 
            src={USER.profileImage} 
            alt={USER.name} 
            className="w-full h-full object-cover object-top"
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
          <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-zinc-100 dark:bg-zinc-900">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
              Profile Photo
            </span>
            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
              {USER.profileImage}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
