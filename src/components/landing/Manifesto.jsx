import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    label: 'Манифест',
    h2a: 'Английский — это не зубрёжка.',
    h2b: 'Это способ наконец',
    h2em: 'быть услышанным',
    h2c: '— без той брони, к которой мы привыкли на родном языке.',
    p1:
      <>Я работаю из того, какая я есть. Без супергеройского нарратива и обещаний «английского за месяц». Я <strong className="font-semibold text-ink">учу так, как чувствую язык сама</strong> — медленно, внимательно, через интонацию и смысл, а не через шаблоны.</>,
    p2:
      <>Каждое занятие — это диалог, в котором важна не грамматика ради грамматики, а <strong className="font-semibold text-ink">то, что Вы хотите сказать и почему Вам это важно</strong>. Язык раскрывается, когда раскрываетесь Вы.</>,
  },
  en: {
    label: 'Manifesto',
    h2a: 'English isn’t memorisation.',
    h2b: 'It’s a way to finally',
    h2em: 'be heard',
    h2c: '— without the armour we’re used to in our native tongue.',
    p1:
      <>I work from who I am. No superhero narrative, no promises of “English in a month.” I <strong className="font-semibold text-ink">teach the way I feel the language myself</strong> — slowly, attentively, through intonation and meaning, not through templates.</>,
    p2:
      <>Every lesson is a dialogue where what matters isn’t grammar for grammar’s sake, but <strong className="font-semibold text-ink">what you want to say and why it matters to you</strong>. Language unfolds when you do.</>,
  },
};

export default function Manifesto() {
  const { lang } = useLang();
  const t = T[lang];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="bg-alabaster px-[8vw] py-[18vh]">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
          <motion.h2
            style={{ y }}
            className="font-heading text-4xl font-light leading-[1.15] text-ink md:text-6xl text-balance"
          >
            {t.h2a}
            <br />
            {t.h2b} <em className="text-gold">{t.h2em}</em> {t.h2c}
          </motion.h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-lg leading-[1.7] text-foreground/75"
            >
              {t.p1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg leading-[1.7] text-foreground/75"
            >
              {t.p2}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}