import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const PORTRAIT = '/media/teacher-portrait.webp';

const T = {
  ru: {
    label: 'О преподавателе',
    h2: 'Язык как способ стать собой.',
    p1:
      <>Английский — это не только язык, на котором я думаю почти так же свободно, как на русском. Это то, с чем я прожила <strong className="font-semibold text-ink">больше десяти лет</strong>: 100 баллов на ЕГЭ, победы и призовые места на олимпиадах «Ломоносов», «Высшая проба», ВсОШ и международном конкурсе Dominanta Education, стажировка в Ирландии.</>,
    p2:
      <>Но за цифрами и медалями для меня всегда стояло другое — <strong className="font-semibold text-ink">язык как способ стать собой</strong>. Не заучить правила, а найти в другом языке ещё один способ говорить о себе честно.</>,
    p3:
      'Я учу и тех, кому язык нужен для жизни — свободно говорить, думать, чувствовать себя собой на английском, — и тех, кому предстоит экзамен и нужен результат. Подход один: без зубрёжки, через понимание и личный интерес.',
    p4:
      <>Именно поэтому я преподаю не «по учебнику», а через <strong className="font-semibold text-ink">личный подход — будь то индивидуальные занятия или Ami Studio</strong>, где мы растим язык медленно, бережно и по-настоящему.</>,
    achievements: [
      { label: '100 баллов ЕГЭ', href: 'https://drive.google.com/file/d/1ErNCXCKhDO5iDR_k_MFQmS6xpLvut0Gb/view?usp=sharing' },
      { label: 'Dominanta Education', href: 'https://drive.google.com/file/d/1siQM4iv87xWLjoaaG1-dL2nCVBJquADA/view?usp=sharing' },
      { label: 'Стажировка в Ирландии', href: 'https://drive.google.com/file/d/1dd1EzaL8xmB2RbCAx7PPuPtOZTF3AZF8/view?usp=sharing' },
      { label: '«Ломоносов»' },
      { label: '«Высшая проба»' },
      { label: 'ВсОШ' },
    ],
  },
  en: {
    label: 'About the teacher',
    h2: 'Language as a way to become yourself.',
    p1:
      <>English isn’t only the language I think in almost as freely as in Russian. It’s something I’ve lived with <strong className="font-semibold text-ink">for over ten years</strong>: a perfect 100 on the EGE, wins and prizes at the Lomonosov, Higher Probe and VSOSh olympiads and the international Dominanta Education contest, an internship in Ireland.</>,
    p2:
      <>But behind the numbers and medals there was always something else for me — <strong className="font-semibold text-ink">language as a way to become yourself</strong>. Not memorising rules, but finding in another language one more way to speak about yourself honestly.</>,
    p3:
      'I teach both those who need the language for life — to speak freely, think, feel themselves in English — and those facing an exam and needing a result. The approach is the same: no rote learning, through understanding and personal interest.',
    p4:
      <>That’s why I don’t teach “by the textbook” but through a <strong className="font-semibold text-ink">personal approach — whether individual lessons or Ami Studio</strong>, where we grow the language slowly, gently and truly.</>,
    achievements: [
      { label: '100 pts EGE', href: 'https://drive.google.com/file/d/1ErNCXCKhDO5iDR_k_MFQmS6xpLvut0Gb/view?usp=sharing' },
      { label: 'Dominanta Education', href: 'https://drive.google.com/file/d/1siQM4iv87xWLjoaaG1-dL2nCVBJquADA/view?usp=sharing' },
      { label: 'Internship in Ireland', href: 'https://drive.google.com/file/d/1dd1EzaL8xmB2RbCAx7PPuPtOZTF3AZF8/view?usp=sharing' },
      { label: 'Lomonosov' },
      { label: 'Higher Probe' },
      { label: 'VSOSh' },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <section id="about" className="bg-alabaster px-[8vw] py-[16vh]">
      <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-12 md:items-start">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 md:sticky md:top-24"
        >
          <motion.img
            src={PORTRAIT}
            alt={lang === 'ru' ? 'Портрет преподавателя' : 'Portrait of the teacher'}
            className="w-full object-contain"
          />
        </motion.div>

        <div className="md:col-span-1" />

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6"
        >
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
          <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-[0.01em] text-ink md:text-6xl text-balance">
            {t.h2}
          </h2>

          <div className="mt-12 space-y-8 text-lg leading-[1.75] text-foreground/75">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {t.achievements.map((a) =>
              a.href ? (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 text-sm text-gold transition-colors hover:bg-gold hover:text-background"
                >
                  {a.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span
                  key={a.label}
                  className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm text-foreground/60"
                >
                  {a.label}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
