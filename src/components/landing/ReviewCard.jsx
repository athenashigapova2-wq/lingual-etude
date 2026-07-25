import { useState } from 'react';
import { motion } from 'framer-motion';

const L = {
  ru: { more: 'Читать полностью', less: 'Свернуть' },
  en: { more: 'Read more', less: 'Collapse' },
};

export default function ReviewCard({ review, lang }) {
  const [open, setOpen] = useState(false);
  const l = L[lang];

  return (
    <motion.figure
      initial={{ opacity: 0, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex h-full w-full max-w-3xl flex-col rounded-2xl border border-foreground/10 bg-white/60 p-8 md:p-12"
    >
      <blockquote
        className={`font-body text-[17px] leading-[1.75] text-foreground/85 md:text-[18px] ${
          open ? '' : 'line-clamp-4'
        }`}
      >
        {lang === 'ru' ? `«${review.text}»` : `“${review.text}”`}
      </blockquote>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 self-start text-xs uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-60"
      >
        {open ? l.less : l.more}
      </button>

      <figcaption className="mt-6 border-t border-foreground/10 pt-5">
        <div className="font-heading text-lg italic text-ink">{review.name}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/45">{review.role}</div>
      </figcaption>
    </motion.figure>
  );
}