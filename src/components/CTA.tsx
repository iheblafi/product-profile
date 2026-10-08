import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
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

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6 md:px-8 max-w-5xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 dark:text-emerald-700 font-semibold">
            Brand Inquiries & Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white dark:text-zinc-900">
            Let's represent excellence together.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 dark:text-zinc-600 max-w-2xl font-light">
            Available for international skincare exhibitions, medical beauty congresses, partner roundtable meetings, and retail activation events.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href={`https://wa.me/${USER.socials.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium hover:scale-105 transition-all shadow-md"
              aria-label={`Chat on WhatsApp at ${USER.socials.whatsapp}`}
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp: {USER.socials.whatsapp}</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href={`mailto:${USER.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/20 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-all border border-white/20 dark:border-zinc-900/20"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
