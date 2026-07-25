import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

export default function LegalLayout({ title, updated, children }) {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-alabaster">
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-alabaster/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-[6vw] py-5">
          <Link to="/" className="font-heading text-2xl italic tracking-tight text-ink">ami</Link>
          <nav className="flex items-center gap-6 text-sm text-foreground/70">
            <Link to="/" className="hover:text-ink">{lang === 'ru' ? 'На главную' : 'Home'}</Link>
            <Link to="/dashboard" className="hover:text-ink">{lang === 'ru' ? 'Личный кабинет' : 'Dashboard'}</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[800px] px-[6vw] py-16 md:py-24">
        <h1 className="font-heading text-3xl font-medium text-ink md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-foreground/50">{updated}</p>
        <div className="prose-legal mt-12 space-y-8 text-[15px] leading-[1.8] text-foreground/80">
          {children}
        </div>
      </main>
    </div>
  );
}
