import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, PenTool, ArrowUpRight, Plus } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const CARDS = [
  {
    icon: Music,
    label: { ru: 'Пишу музыку', en: 'I write music' },
    btn: { ru: 'Слушать', en: 'Listen' },
    href: 'https://t.me/ath_shig/539',
    src: 'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/31f5092ef_Frame2131328151.png',
  },
  {
    icon: PenTool,
    label: { ru: 'Веб-дизайнер', en: 'Web designer' },
    btn: { ru: 'Портфолио', en: 'Portfolio' },
    href: 'https://www.behance.net/athena_shig',
    src: 'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/d1699662e_behance.png',
  },
];

const T = {
  ru: {
    label: 'За пределами урока',
    h2: 'Больше, чем английский',
    intro:
      'Я строю занятия через личность человека — потому что сама позволила себе быть собой. Помимо английского я пишу музыку и работаю как веб-дизайнер, и это держит меня в живом тоне и в трендах, а не в застывшей методичке.',
    open: 'Узнать больше',
    close: 'Свернуть',
  },
  en: {
    label: 'Beyond the lesson',
    h2: 'More than English',
    intro:
      'I build lessons around the person — because I let myself be myself. Beyond English, I write music and work as a web designer, which keeps me in a living tone and in trend, not in a frozen syllabus.',
    open: 'See more',
    close: 'Collapse',
  },
};

export default function MoreThanEnglish() {
  const { lang } = useLang();
  const t = T[lang];
  const [open, setOpen] = useState(false);

  return (
    <section id="more" className="bg-linen px-[8vw] py-[14vh]">
      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
      <h2 className="font-heading text-4xl font-light italic text-ink md:text-6xl text-balance">{t.h2}</h2>

      <button
        onClick={() => setOpen((v) => !v)}
        className="group mt-8 inline-flex items-center gap-3 font-heading text-lg italic text-gold transition-opacity hover:opacity-60"
      >
        {open ? t.close : t.open}
        <Plus className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-10 max-w-2xl text-lg leading-[1.75] text-foreground/85">{t.intro}</p>

            <div className="mt-14 flex flex-col gap-8 pb-2 sm:flex-row sm:items-start sm:justify-center">
              {CARDS.map((c) => {
                const Icon = c.icon;
                return (
                  <motion.article
                    key={c.href}
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative flex-1 overflow-hidden rounded-2xl border border-foreground/10 shadow-[0_18px_50px_-30px_hsl(222_48%_21%/0.4)]"
                  >
                    <img src={c.src} alt={c.label[lang]} className="block w-full h-auto" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-7">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-body text-lg text-background">{c.label[lang]}</span>
                      </div>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 rounded-full bg-background px-6 py-2.5 text-sm font-medium text-ink transition-all hover:bg-background/85"
                      >
                        {c.btn[lang]}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}