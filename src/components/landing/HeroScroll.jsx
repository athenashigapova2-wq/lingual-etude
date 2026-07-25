import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const OUTER = 12;
const INNER = 8;
const RAY_D =
  'M0,0 C -16,-28 -26,-70 -14,-104 C -8,-124 -3,-146 0,-168 C 3,-146 8,-124 14,-104 C 26,-70 16,-28 0,0 Z';

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const seg = (p, s, e) => clamp01((p - s) / (e - s));

export default function HeroScroll() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const coreRef = useRef(null);
  const glowRef = useRef(null);
  const hintRef = useRef(null);
  const [shining, setShining] = useState(false);

  useEffect(() => {
    const outer = outerRefs.current;
    const inner = innerRefs.current;

    const apply = (p) => {
      for (let i = 0; i < OUTER; i++) {
        const t = seg(p, 0.16 + i * 0.05, 0.56 + i * 0.05);
        const angle = (360 / OUTER) * i;
        const r = 86 * t;
        const s = 0.28 + 0.72 * t;
        const el = outer[i];
        if (el) {
          el.setAttribute('transform', `rotate(${angle} 0 0) translate(0 ${-r}) scale(${s})`);
          el.setAttribute('opacity', (0.5 + 0.5 * t).toFixed(3));
        }
      }
      for (let j = 0; j < INNER; j++) {
        const t = seg(p, 0.05 + j * 0.04, 0.44 + j * 0.04);
        const angle = (360 / INNER) * j + 22.5;
        const r = 42 * t;
        const s = 0.26 + 0.58 * t;
        const el = inner[j];
        if (el) {
          el.setAttribute('transform', `rotate(${angle} 0 0) translate(0 ${-r}) scale(${s})`);
          el.setAttribute('opacity', (0.55 + 0.45 * t).toFixed(3));
        }
      }
      if (coreRef.current) {
        const ct = seg(p, 0, 0.32);
        coreRef.current.setAttribute('r', (18 + 32 * ct).toFixed(2));
        coreRef.current.setAttribute('opacity', (0.78 + 0.22 * ct).toFixed(3));
      }
      if (glowRef.current) {
        const gt = seg(p, 0.1, 0.6);
        glowRef.current.setAttribute('r', (30 + 120 * gt).toFixed(2));
        glowRef.current.setAttribute('opacity', (0.12 * gt).toFixed(3));
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(clamp01(1 - p / 0.12));
      }
    };

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const prog = scrollable > 0 ? clamp01(-rect.top / scrollable) : 0;
      apply(prog);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-alabaster" style={{ height: '380vh' }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <svg
          viewBox="-320 -320 640 640"
          className="h-[104vmin] w-[104vmin] max-w-[900px] cursor-pointer transition-transform duration-500 active:scale-95"
          role="img"
          aria-label={
            lang === 'ru'
              ? 'Солнце из рапунцель раскрывается луч за лучом по мере прокрутки, нажмите чтобы засияло'
              : 'A Rapunzel sun unfolds ray by ray as you scroll, click to make it shine'
          }
          onClick={() => setShining((v) => !v)}
        >
          <defs>
            <radialGradient id="sunShine">
              <stop offset="0%" stopColor="hsl(52 98% 86%)" stopOpacity="0.85" />
              <stop offset="45%" stopColor="hsl(48 92% 72%)" stopOpacity="0.42" />
              <stop offset="100%" stopColor="hsl(46 85% 68%)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle ref={glowRef} cx="0" cy="0" r="30" fill="hsl(45 70% 68%)" opacity="0" />

          {shining && (
            <motion.circle
              cx="0"
              cy="0"
              r="300"
              fill="url(#sunShine)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.92, 1.1, 0.92] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'center' }}
            />
          )}

          {shining &&
            Array.from({ length: 12 }).map((_, k) => (
              <motion.g
                key={`beam${k}`}
                transform={`rotate(${k * 30} 0 0)`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.25, 1.5], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: k * 0.1, ease: 'easeOut' }}
                style={{ transformOrigin: 'center' }}
              >
                <line x1="0" y1="46" x2="0" y2="300" stroke="hsl(52 98% 86%)" strokeWidth="4" strokeLinecap="round" />
              </motion.g>
            ))}

          {Array.from({ length: OUTER }).map((_, i) => (
            <g
              key={`o${i}`}
              ref={(el) => (outerRefs.current[i] = el)}
              transform="rotate(0 0 0) translate(0 0) scale(0.28)"
              opacity="0.5"
            >
              <path
                d={RAY_D}
                fill="hsl(42 76% 62%)"
                fillOpacity="0.85"
                stroke="hsl(38 64% 40%)"
                strokeOpacity="0.4"
                strokeWidth="1.4"
              />
            </g>
          ))}
          {Array.from({ length: INNER }).map((_, j) => (
            <g
              key={`i${j}`}
              ref={(el) => (innerRefs.current[j] = el)}
              transform="rotate(22.5 0 0) translate(0 0) scale(0.26)"
              opacity="0.55"
            >
              <path
                d={RAY_D}
                fill="hsl(46 82% 84%)"
                fillOpacity="0.95"
                stroke="hsl(38 64% 40%)"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
            </g>
          ))}
          <circle ref={coreRef} cx="0" cy="0" r="10" fill={shining ? 'hsl(48 92% 66%)' : 'hsl(42 70% 60%)'} opacity="0.6" />
          <circle cx="0" cy="0" r="6" fill="hsl(50 95% 90%)" opacity="0.95" />
        </svg>

        <div
          ref={hintRef}
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink/40"
        >
          {shining
            ? lang === 'ru' ? 'сияет ✦' : 'shining ✦'
            : lang === 'ru' ? 'прокрутите, чтобы раскрыть · нажмите, чтобы засияло' : 'scroll to unfold · click to shine'}
        </div>
      </div>
    </section>
  );
}