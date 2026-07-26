import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

export default function LegalLayout({ title, updated, children }) {
  const { lang, setLang } = useLang();

  return (
    <div className="min-h-screen bg-alabaster">
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-alabaster/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-[6vw] py-5">
          <Link to="/" className="font-heading text-2xl italic tracking-tight text-ink">ami</Link>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm text-foreground/70">
              <Link to="/" className="hover:text-ink">{lang === 'ru' ? 'На главную' : 'Home'}</Link>
              <Link to="/dashboard" className="hover:text-ink">{lang === 'ru' ? 'Личный кабинет' : 'Dashboard'}</Link>
            </nav>
            <div className="flex items-center rounded-full border border-foreground/20 p-0.5 text-xs">
              <button
                onClick={() => setLang('ru')}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === 'ru' ? 'bg-ink text-background' : 'text-foreground/60 hover:text-ink'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang('en')}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === 'en' ? 'bg-ink text-background' : 'text-foreground/60 hover:text-ink'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[800px] px-[6vw] py-16 md:py-24">
        <h1 className="font-heading text-3xl font-medium text-ink md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-foreground/50">{updated}</p>
        <div className="prose-legal mt-12 space-y-8 text-[15px] leading-[1.8] text-foreground/80">
          {children}
        </div>

        <div className="mt-20 hairline w-full" />
        <div className="mt-8 space-y-2 text-sm text-foreground/60">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">
            {lang === 'ru' ? 'Контакты' : 'Contact'}
          </p>
          <a href="mailto:amina.shigapova.06@mail.ru" className="block hover:text-ink">
            amina.shigapova.06@mail.ru
          </a>
          <a href="https://t.me/ami_shig" className="block hover:text-ink">@ami_shig</a>
        </div>
      </main>
    </div>
  );
}
