import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import ReachingHand from '@/components/landing/ReachingHand';

const TELEGRAM_URL = 'https://t.me/amistudios';

const T = {
  ru: {
    label: 'Запись на занятие',
    h2: 'Давайте двигаться вместе.',
    p: 'Расскажите пару слов о себе и о том, что для Вас важно в английском — отвечаю лично, без автоматических писем и шаблонов.',
    cta: 'Написать в Telegram',
  },
  en: {
    label: 'Book a session',
    h2: 'Let’s move forward together.',
    p: 'Tell me a bit about yourself and what matters to you in English — I reply personally, no automated emails or templates.',
    cta: 'Message on Telegram',
  },
};

export default function BookingSection() {
  const { lang } = useLang();
  const t = T[lang];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 88%', 'center 55%'],
  });

  // Руки начинают за пределами блока (в боковых полях) и сходятся к центру
  // по мере прокрутки к секции — почти касаясь друг друга, но не смыкаясь.
  const leftX = useTransform(scrollYProgress, [0, 1], ['-6vw', '9vw']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['6vw', '-9vw']);
  const handOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const handScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative overflow-hidden bg-alabaster px-[8vw] py-[14vh]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[38%] w-[26vw] max-w-[280px]"
        style={{ x: leftX, opacity: handOpacity, scale: handScale }}
      >
        <ReachingHand className="w-full" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[30%] w-[26vw] max-w-[280px]"
        style={{ x: rightX, opacity: handOpacity, scale: handScale }}
      >
        <ReachingHand flip className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[720px] text-center"
      >
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
        <h2 className="font-heading text-4xl font-light leading-tight text-ink md:text-6xl text-balance">
          {t.h2}
        </h2>
        <p className="mx-auto mt-8 max-w-md text-lg leading-[1.7] text-foreground/70">{t.p}</p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="pill-btn mt-12 inline-flex items-center gap-2 md:min-w-[280px]"
        >
          <Send className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          {t.cta}
        </a>
      </motion.div>
    </section>
  );
}
