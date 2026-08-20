import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    quote: 'Говорить — значит быть услышанным.',
    contact: 'Связь',
    nav: 'Навигация',
    formats: 'Форматы',
    about: 'О преподавателе',
    book: 'Записаться',
    partners: 'При поддержке',
    privacy: 'Политика конфиденциальности',
    cookies: 'Использование cookie',
    personalData: 'Согласие на обработку персональных данных',
    agreement: 'Пользовательское соглашение',
  },
  en: {
    quote: 'To speak is to be heard.',
    contact: 'Contact',
    nav: 'Navigation',
    formats: 'Formats',
    about: 'About',
    book: 'Book',
    partners: 'Powered by',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    personalData: 'Consent to Personal Data Processing',
    agreement: 'User Agreement',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <footer className="footer-selection bg-ink px-[8vw] py-[14vh] text-background">
      <p className="font-heading text-4xl font-light italic leading-tight text-background/90 md:text-7xl text-balance">
        {t.quote}
      </p>

      <div className="mt-20 grid gap-12 border-t border-background/15 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-background/40">{t.contact}</p>
          <a href="mailto:amistudios.office@mail.ru" className="mt-4 block break-all font-heading text-xl italic transition-opacity hover:opacity-70 sm:text-2xl">
            amistudios.office@mail.ru
          </a>
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
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-background/60">
        <a href="https://supabase.com/" target="_blank" rel="noreferrer" className="hover:text-background">Supabase</a>
        <span className="text-background/30">✦</span>
        <a href="https://turboflare.ru/" target="_blank" rel="noreferrer" className="hover:text-background">TurboFlare</a>
        <span className="text-background/30">✦</span>
        <a href="https://www.nic.ru/" target="_blank" rel="noreferrer" className="hover:text-background">РуЦентр</a>
        <span className="text-background/30">✦</span>
        <a href="https://console.cloud.google.com/welcome" target="_blank" rel="noreferrer" className="hover:text-background">Google Cloud Console</a>
      </p>

      <div className="mt-10 hairline w-full bg-background/20" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
        <p className="text-sm text-background/40">© 2026 ami</p>
        <div className="grid gap-x-8 gap-y-3 text-sm text-background/50 sm:grid-cols-2 lg:justify-self-end">
          <a href="/privacy-policy" className="hover:text-background">{t.privacy}</a>
          <a href="/cookie-policy" className="hover:text-background">{t.cookies}</a>
          <a href="/personal-data-consent" className="hover:text-background">{t.personalData}</a>
          <a href="/user-agreement" className="hover:text-background">{t.agreement}</a>
        </div>
      </div>
    </footer>
  );
}
