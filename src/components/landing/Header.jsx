import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

export default function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  const NAV = lang === 'ru'
    ? [
        { label: 'Форматы', href: '#formats' },
        { label: 'О преподавателе', href: '#about' },
        { label: 'Отзывы', href: '#reviews' },
        { label: 'Запись', href: '#booking' },
      ]
    : [
        { label: 'Formats', href: '#formats' },
        { label: 'About', href: '#about' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Book', href: '#booking' },
      ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? 'translate-y-0 bg-background/80 backdrop-blur-md border-b border-foreground/10 opacity-100'
          : '-translate-y-2 bg-transparent opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-[8vw] py-5">
        <Link to="/" className="font-heading text-2xl italic tracking-tight text-ink">ami</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/70 transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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

          <Link to="/dashboard" className="pill-btn text-ink">
            {lang === 'ru' ? 'Личный кабинет' : 'Dashboard'}
          </Link>
        </div>
      </div>
    </header>
  );
}