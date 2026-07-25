import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    quote: 'Говорить — значит быть услышанным.',
    contact: 'Связь',
    social: 'Соцсети',
    nav: 'Навигация',
    formats: 'Форматы',
    about: 'О преподавателе',
    book: 'Записаться',
    partners: 'Технологии',
    privacy: 'Политика конфиденциальности',
    cookies: 'Использование cookie',
  },
  en: {
    quote: 'To speak is to be heard.',
    contact: 'Contact',
    social: 'Social',
    nav: 'Navigation',
    formats: 'Formats',
    about: 'About',
    book: 'Book',
    partners: 'Technology',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <footer className="bg-ink px-[8vw] py-[14vh] text-background">
      <p className="font-heading text-4xl font-light italic leading-tight text-background/90 md:text-7xl text-balance">
        {t.quote}
      </p>

      <div className="mt-20 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-background/40">{t.contact}</p>
          <a href="mailto:amina.shigapova.06@mail.ru" className="mt-4 block font-heading text-2xl italic">
            amina.shigapova.06@mail.ru
          </a>
          <a href="https://t.me/ami_shig" className="mt-2 block text-background/70 hover:text-background">
            @ami_shig
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-background/40">{t.social}</p>
          <div className="mt-4 space-y-2">
            <a href="https://t.me/ath_shig" className="block text-background/70 hover:text-background">Telegram</a>
            <a href="https://www.youtube.com/@amina_sh" className="block text-background/70 hover:text-background">YouTube</a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-background/40">{t.nav}</p>
          <div className="mt-4 space-y-2">
            <a href="#formats" className="block text-background/70 hover:text-background">{t.formats}</a>
            <a href="#about" className="block text-background/70 hover:text-background">{t.about}</a>
            <a href="#booking" className="block text-background/70 hover:text-background">{t.book}</a>
          </div>
        </div>
      </div>

      <div className="mt-20 hairline w-full bg-background/20" />

      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-background/40">{t.partners}</p>
      <p className="mt-3 text-sm text-background/60">
        Supabase · Resend · GitHub · TurboFlare · РуЦентр · Google Cloud Console
      </p>

      <div className="mt-10 hairline w-full bg-background/20" />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-background/40">© 2026 ami</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/50">
          <a href="/privacy-policy" className="hover:text-background">{t.privacy}</a>
          <a href="/cookie-policy" className="hover:text-background">{t.cookies}</a>
        </div>
      </div>
    </footer>
  );
}