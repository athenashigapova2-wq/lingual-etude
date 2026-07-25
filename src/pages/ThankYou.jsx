import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

// Замените на свою ссылку на PDF-материал.
const MATERIAL_URL = 'https://example.com/ami-free-material.pdf';

const T = {
  ru: {
    label: 'Спасибо',
    h1: 'Материал уже здесь.',
    p: 'Скачайте PDF-карту самостоятельной работы. Я напишу вам в течение дня, чтобы узнать, над чем вы работаете.',
    btn: 'Скачать PDF-материал',
    home: '← На главную',
  },
  en: {
    label: 'Thank you',
    h1: 'The material is ready.',
    p: 'Download the self-study PDF. I’ll write to you within a day to learn what you’re working on.',
    btn: 'Download the PDF',
    home: '← Home',
  },
};

export default function ThankYou() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <div className="relative min-h-screen bg-alabaster">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
        <h1 className="mt-6 font-heading text-4xl font-medium leading-[1.1] text-ink md:text-6xl text-balance">
          {t.h1}
        </h1>
        <p className="mt-8 text-lg leading-[1.7] text-foreground/70">{t.p}</p>
        <a href={MATERIAL_URL} download className="pill-btn mt-12 md:min-w-[260px]">
          {t.btn}
        </a>
        <Link
          to="/"
          className="mt-10 text-sm uppercase tracking-[0.25em] text-foreground/50 transition-colors hover:text-ink"
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}