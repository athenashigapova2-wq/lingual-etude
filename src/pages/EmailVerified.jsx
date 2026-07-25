import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    label: 'Готово',
    h1: 'Почта подтверждена',
    p: 'Ваш аккаунт активирован. Теперь можно войти в личный кабинет.',
    btn: 'Перейти в личный кабинет',
  },
  en: {
    label: 'Done',
    h1: 'Email verified',
    p: 'Your account is now active. You can go to your dashboard.',
    btn: 'Go to dashboard',
  },
};

export default function EmailVerified() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <div className="relative min-h-screen bg-alabaster">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-6" strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
        <h1 className="mt-6 font-heading text-4xl font-medium leading-[1.1] text-ink md:text-6xl text-balance">
          {t.h1}
        </h1>
        <p className="mt-8 text-lg leading-[1.7] text-foreground/70">{t.p}</p>
        <Link to="/dashboard" className="pill-btn mt-12 md:min-w-[260px]">
          {t.btn}
        </Link>
      </div>
    </div>
  );
}
