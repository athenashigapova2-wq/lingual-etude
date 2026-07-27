import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

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

  return (
    <section id="booking" className="bg-alabaster px-[8vw] py-[14vh]">
      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[720px] text-center"
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
