import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const FAQ = {
  ru: [
    {
      q: 'Нужен ли какой-то стартовый уровень английского?',
      a: 'Нет, беру учеников с любого уровня — от начального до продвинутого, программа адаптируется под Вас.',
    },
    {
      q: 'Чем персональные занятия отличаются от Ami Studio?',
      a: 'Персональные — полностью под Вашу цель и темп, 1-на-1. Ami Studio — камерная группа 3–5 человек с фиксированной программой на 1,5 месяца, дешевле за счёт группового формата.',
    },
    {
      q: 'Как получить доступ в личный кабинет?',
      a: 'После записи и первой оплаты Вы получите приглашение на email — там же будут все материалы, ДЗ и видео.',
    },
  ],
  en: [
    {
      q: 'Do I need a starting level of English?',
      a: 'No — I take students of any level, from beginner to advanced, and the program adapts to you.',
    },
    {
      q: 'How do personal lessons differ from Ami Studio?',
      a: 'Personal lessons are fully built around your goal and pace, 1-on-1. Ami Studio is an intimate group of 3–5 with a fixed 1.5-month program — more affordable thanks to the group format.',
    },
    {
      q: 'How do I get access to the personal dashboard?',
      a: 'After booking and your first payment you’ll receive an invitation by email — all materials, homework and videos will be there.',
    },
  ],
};

const T = {
  ru: { label: 'Если остались сомнения', h2: 'Вопросы и ответы' },
  en: { label: 'If you still wonder', h2: 'Questions & answers' },
};

export default function FAQSection() {
  const { lang } = useLang();
  const t = T[lang];
  const items = FAQ[lang];
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="bg-alabaster px-[8vw] py-[14vh]">
      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
      <h2 className="font-heading text-4xl font-light italic text-ink md:text-6xl text-balance">{t.h2}</h2>

      <div className="mt-14 max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="font-body text-lg text-ink">{item.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pr-12 text-base leading-[1.75] text-foreground/75">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}