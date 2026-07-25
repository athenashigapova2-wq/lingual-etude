import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const reveal = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  show: { opacity: 1, filter: 'blur(0px)' },
};

const FORMATS = [
  {
    title: { ru: 'Персональные занятия', en: 'Personal lessons' },
    sub: { ru: '1 на 1 со мной', en: '1-on-1 with me' },
    price: '2 050 ₽',
    unit: { ru: 'за занятие', en: 'per session' },
    text: {
      ru: 'Разговор тет-а-тет, выстроенный вокруг вас: ваших тем, вашего ритма, ваших пауз. Мы идём за смыслом, а не за учебником.',
      en: 'A one-on-one conversation built around you — your topics, your rhythm, your pauses. We follow meaning, not a textbook.',
    },
    points: {
      ru: [
        'Полный фокус на ваших целях и темпе',
        'Гибкое расписание под вас',
        'Обратная связь после каждого занятия',
        'Материалы и словарь под вашу специфику',
      ],
      en: [
        'Full focus on your goals and pace',
        'Flexible schedule built around you',
        'Feedback after every session',
        'Materials and vocabulary tailored to you',
      ],
    },
    cta: { ru: 'Записаться →', en: 'Book →' },
  },
  {
    title: { ru: 'Ami Studio', en: 'Ami Studio' },
    sub: { ru: '1,5 месяца · старт каждый месяц', en: '1.5 months · starts monthly' },
    price: '20 990 ₽',
    unit: { ru: 'за курс', en: 'per course' },
    text: {
      ru: 'Маленькая группа, где английский выращивают как практику самораскрытия. Через видео, задания и наблюдение за собой, вместе.',
      en: 'A small group where English is grown as a practice of self-unfolding. Through video, assignments and observing yourself — together.',
    },
    points: {
      ru: [
        'Группы 3–5 человек',
        'Старт новой группы 25 числа каждого месяца',
        'Еженедельные живые сессии',
        'Домашние задания с обратной связью',
        'Закрытая библиотека материалов',
      ],
      en: [
        'Groups of 3–5 people',
        'A new group starts on the 25th of every month',
        'Weekly live sessions',
        'Homework with personal feedback',
        'Private library of materials',
      ],
    },
    cta: { ru: 'Войти в студию →', en: 'Join the studio →' },
  },
  {
    title: { ru: 'Деловой английский (ДАЯ)', en: 'Business English (BEA)' },
    sub: { ru: 'Профессиональная коммуникация', en: 'Professional communication' },
    price: '15 600 ₽',
    unit: { ru: 'за курс', en: 'per course' },
    text: {
      ru: 'Переговоры, переписка, презентации, контракты. Регистр, точность формулировок, рамка BATNA. Язык, который работает в бизнесе.',
      en: 'Negotiations, correspondence, presentations, contracts. Register, precise wording, the BATNA framework. Language that works in business.',
    },
    points: {
      ru: [
        'Переговоры, переписка, презентации',
        'Деловой регистр и точность формулировок',
        'Рамка BATNA для переговоров',
        'Шаблоны писем и контрактов',
      ],
      en: [
        'Negotiations, correspondence, presentations',
        'Professional register and precise wording',
        'BATNA framework for negotiations',
        'Email and contract templates',
      ],
    },
    cta: { ru: 'Обсудить задачи →', en: 'Discuss →' },
  },
];

const KSO = {
  label: { ru: 'Дополнительно', en: 'Additionally' },
  title: { ru: 'Естественные науки · КСО', en: 'Natural Sciences · CSR' },
  text: {
    ru: 'Подготовка по КСО для корпораций: как применять новые стандарты ISO, выстраивать формы отчётности (ESG, GRI, SASB) и описывать химические и экологические последствия деятельности компании. Английский для работы с регуляторами, инвесторами и устойчивым развитием.',
    en: 'CSR training for corporations: how to apply new ISO standards, build reporting frameworks (ESG, GRI, SASB) and describe the chemical and environmental consequences of a company’s operations. English for working with regulators, investors and sustainability.',
  },
  price: '5 400 ₽',
  unit: { ru: 'за курс', en: 'per course' },
  points: {
    ru: [
      'Новые стандарты ISO и их применение',
      'Формы отчётности: ESG, GRI, SASB',
      'Химические и экологические последствия',
      'Язык для регуляторов и инвесторов',
    ],
    en: [
      'New ISO standards and their application',
      'Reporting frameworks: ESG, GRI, SASB',
      'Chemical and environmental consequences',
      'Language for regulators and investors',
    ],
  },
  cta: { ru: 'Уточнить программу →', en: 'Clarify the program →' },
};

export default function LearningFormats() {
  const { lang } = useLang();

  return (
    <section id="formats" className="bg-alabaster px-[8vw] py-[14vh]">
      <p className="mb-16 text-xs uppercase tracking-[0.4em] text-foreground/40">
        {lang === 'ru' ? 'Форматы обучения' : 'Learning formats'}
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {FORMATS.map((f) => (
          <motion.article
            key={f.title.en}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col justify-between rounded-2xl border p-8 md:p-10 ${
              f.title.en === 'Ami Studio'
                ? 'border-gold bg-white shadow-[0_18px_50px_-30px_hsl(222_48%_21%/0.45)] md:-translate-y-2'
                : 'border-foreground/10 bg-white'
            }`}
          >
            <div>
              {f.title.en === 'Ami Studio' && (
                <span className="mb-5 inline-block rounded-full bg-gold px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background">
                  {lang === 'ru' ? 'Наиболее популярен' : 'Most popular'}
                </span>
              )}
              <h3 className="font-heading text-2xl font-light leading-[1.15] text-ink md:text-3xl text-balance">
                {f.title[lang]}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-foreground/40">{f.sub[lang]}</p>

              <div className="mt-7">
                <p className="font-heading text-4xl leading-none text-ink md:text-5xl">
                {f.price.replace(' ₽', '')}<span className="ml-1 align-middle text-2xl text-foreground/65">₽</span>
              </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/45">{f.unit[lang]}</p>
              </div>

              <div className="my-8 hairline w-full" />

              <p className="text-base leading-[1.7] text-foreground/75">{f.text[lang]}</p>

              <ul className="mt-7 space-y-3">
                {f.points[lang].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-[1.5] text-foreground/85">
                    <span className="mt-0.5 shrink-0 text-base leading-none text-gold">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#booking" className="mt-10 inline-block font-heading text-lg italic text-gold transition-opacity hover:opacity-60">
              {f.cta[lang]}
            </a>
          </motion.article>
        ))}
      </div>

      {/* Дополнительно: Естественные науки / КСО */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-col gap-8 rounded-3xl border border-foreground/10 bg-linen p-8 md:flex-row md:items-center md:justify-between md:p-12"
      >
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">{KSO.label[lang]}</p>
          <h3 className="mt-3 font-heading text-3xl font-light text-ink md:text-4xl">{KSO.title[lang]}</h3>
          <p className="mt-5 text-base leading-[1.7] text-foreground/75">{KSO.text[lang]}</p>
          <ul className="mt-7 space-y-3">
            {KSO.points[lang].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm leading-[1.5] text-foreground/85">
                <span className="mt-0.5 shrink-0 text-base leading-none text-gold">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-6 md:items-end">
          <div className="md:text-right">
            <p className="font-heading text-4xl leading-none text-ink md:text-5xl">
              {KSO.price.replace(' ₽', '')}<span className="ml-1 align-middle text-2xl text-foreground/65">₽</span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/45">{KSO.unit[lang]}</p>
          </div>
          <a href="#booking" className="pill-btn md:min-w-[220px]">
            {KSO.cta[lang]}
          </a>
        </div>
      </motion.div>
    </section>
  );
}