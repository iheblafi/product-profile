import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Sparkles, ChevronLeft, ChevronRight, Layers, Play, Pause } from "lucide-react";
import { EXHIBITIONS } from "../data";

function ExhibitionCarousel({ 
  images, 
  title 
}: { 
  images: NonNullable<typeof EXHIBITIONS[number]["images"]>; 
  title: string; 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Automatically advance slides every 4 seconds unless paused or hovered
  useEffect(() => {
    if (isPaused || isUserHovering || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, isUserHovering, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsPaused((prev) => !prev);
  };

  const currentImage = images[currentIndex];
  const isPlaying = !isPaused && !isUserHovering;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main Carousel Screen */}
      <div 
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
        className="w-full h-80 sm:h-96 md:h-[30rem] bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800 relative shadow-sm group select-none"
      >
        {/* Animated Slide Progress Bar along top edge */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/10 z-30 overflow-hidden">
          <motion.div
            key={`${currentIndex}-${isPlaying}`}
            initial={{ width: "0%" }}
            animate={{ width: isPlaying ? "100%" : "0%" }}
            transition={{ duration: isPlaying ? 4 : 0, ease: "linear" }}
            className="h-full bg-emerald-400"
          />
        </div>

        {/* Ambient blurred background */}
        <img 
          src={currentImage.url} 
          alt="" 
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none transition-all duration-700"
        />

        {/* Top Badges: Auto-play status button & Slide counter */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <button
            onClick={toggleAutoPlay}
            aria-label={isPaused ? "Start automatic slideshow" : "Pause automatic slideshow"}
            className="flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-white text-[11px] font-mono shadow-md transition-all cursor-pointer"
            title={isPaused ? "Slideshow paused. Click to resume auto-sliding." : "Auto-sliding active. Click to pause."}
          >
            {isPaused ? (
              <>
                <Play size={11} className="text-amber-400 fill-amber-400" />
                <span className="text-zinc-300">Paused</span>
              </>
            ) : isUserHovering ? (
              <>
                <Pause size={11} className="text-emerald-400 fill-emerald-400" />
                <span className="text-zinc-300">Hover Paused</span>
              </>
            ) : (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-zinc-300">Auto Sliding</span>
              </>
            )}
          </button>
        </div>

        {/* Foreground Active Image with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center p-2"
          >
            <img 
              src={currentImage.url} 
              alt={currentImage.title} 
              className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              onError={(e) => {
                const target = e.currentTarget;
                const currentSrc = target.getAttribute('src') || '';
                // Resilient fallback chain for Netlify / static hosts
                if (currentSrc.includes('recipet.jpeg')) {
                  target.src = '/assets/img/receipt.jpeg';
                } else if (currentSrc.includes('receipt.jpeg')) {
                  target.src = '/assets/img/conversation3.jpeg';
                } else if (currentSrc.includes('mihas2.jpeg')) {
                  target.src = '/assets/img/mihas.jpeg';
                } else if (currentSrc.includes('team4.jpeg')) {
                  target.src = '/assets/img/conversation3.jpeg';
                } else if (currentSrc.endsWith('.jpeg')) {
                  target.src = currentSrc.replace('.jpeg', '.jpg');
                } else {
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-zinc-900 text-zinc-400">
              <Sparkles size={24} className="mb-2 text-zinc-400 opacity-60" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-medium mb-1">
                {currentImage.title}
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {currentImage.url}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous photo"
          className="absolute left-3 md:left-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-lg border border-white/10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-3 md:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-lg border border-white/10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Badges: Counter */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-white text-xs font-mono shadow-md">
          <Layers size={13} className="text-emerald-400" />
          <span>{currentIndex + 1} / {images.length}</span>
        </div>

        {/* Bottom Caption Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-0.5">
              {currentImage.title}
            </p>
            <p className="text-xs sm:text-sm text-zinc-200 font-light max-w-xl line-clamp-2">
              {currentImage.caption}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 self-center sm:self-end">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Jump to slide ${dotIdx + 1}`}
                className={`h-1.5 transition-all rounded-full ${
                  currentIndex === dotIdx
                    ? "w-6 bg-emerald-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Thumbnail Selector Strip */}
      <div className={`grid gap-2.5 sm:gap-3 w-full ${
        images.length === 2 ? "grid-cols-2" : "grid-cols-3"
      }`}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl border text-left transition-all ${
              currentIndex === idx
                ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 shadow-sm ring-1 ring-emerald-500/30"
                : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/60 dark:bg-zinc-900/60"
            }`}
          >
            <div className="w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-zinc-200/50 dark:border-zinc-700/50">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = target.getAttribute('src') || '';
                  if (currentSrc.includes('recipet.jpeg')) {
                    target.src = '/assets/img/receipt.jpeg';
                  } else if (currentSrc.includes('receipt.jpeg')) {
                    target.src = '/assets/img/conversation3.jpeg';
                  } else if (currentSrc.includes('mihas2.jpeg')) {
                    target.src = '/assets/img/mihas.jpeg';
                  } else if (currentSrc.includes('team4.jpeg')) {
                    target.src = '/assets/img/conversation3.jpeg';
                  } else if (currentSrc.endsWith('.jpeg')) {
                    target.src = currentSrc.replace('.jpeg', '.jpg');
                  }
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <span className={`block text-[11px] sm:text-xs font-mono truncate font-medium ${
                currentIndex === idx 
                  ? 'text-emerald-700 dark:text-emerald-400' 
                  : 'text-zinc-700 dark:text-zinc-300'
              }`}>
                0{idx + 1}. {img.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-20 px-6 md:px-8 max-w-5xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-base md:text-lg font-mono uppercase tracking-widest mb-12 opacity-50"
      >
        02. Exhibitions & Meetings
      </motion.h2>

      <div className="flex flex-col gap-20">
        {EXHIBITIONS.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 group"
          >
            {/* Exhibition Media: Multi-image carousel or Single photo */}
            {item.images && item.images.length > 0 ? (
              <ExhibitionCarousel images={item.images} title={item.title} />
            ) : (
              <div className="w-full h-72 sm:h-96 md:h-[28rem] bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 relative shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
                  <Sparkles size={24} className="mb-2 text-zinc-400 opacity-60" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-medium mb-1">
                    Exhibition Photo
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                    {item.image}
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start pt-2">
              <div className="md:w-1/3 flex flex-col gap-2">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={13} />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-medium">
                  {item.subtitle}
                </span>
              </div>

              <div className="md:w-2/3 flex flex-col gap-4">
                <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {index < EXHIBITIONS.length - 1 && (
              <div className="w-full border-b border-zinc-200 dark:border-zinc-800/80 pt-10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
