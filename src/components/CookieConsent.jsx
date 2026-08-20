import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const CONSENT_KEY = 'ami-cookie-consent-v1';

const T = {
  ru: {
    title: 'Мы используем cookie',
    description:
      'Сайт использует необходимые cookie и локальное хранилище для авторизации, сохранения настроек и Вашего выбора.',
    details: 'Подробнее об использовании cookie',
    accept: 'Согласен',
    decline: 'Не согласен',
  },
  en: {
    title: 'We use cookies',
    description:
      'The site uses essential cookies and local storage for authentication, preferences, and remembering your choice.',
    details: 'Read our Cookie Policy',
    accept: 'Agree',
    decline: 'Decline',
  },
};

export default function CookieConsent() {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const t = T[lang];

  useEffect(() => {
    try {
      setIsVisible(!window.localStorage.getItem(CONSENT_KEY));
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveChoice = (choice) => {
    try {
      window.localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ choice, savedAt: new Date().toISOString() }),
      );
    } catch {
      // The banner can still be dismissed when storage is unavailable.
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="dialog"
          aria-labelledby="cookie-consent-title"
          initial={{ opacity: 0, x: 36, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 24, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[100] border border-foreground/15 bg-alabaster p-5 shadow-2xl sm:left-auto sm:max-w-md sm:p-6"
        >
          <h2 id="cookie-consent-title" className="font-heading text-2xl text-ink">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/65">{t.description}</p>
          <Link
            to="/cookie-policy"
            className="mt-3 inline-block text-sm text-ink underline decoration-foreground/30 underline-offset-4 hover:decoration-ink"
          >
            {t.details}
          </Link>
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveChoice('declined')}
              className="min-h-11 border border-foreground/25 px-5 text-sm text-ink transition-colors hover:border-ink"
            >
              {t.decline}
            </button>
            <button
              type="button"
              onClick={() => saveChoice('accepted')}
              className="min-h-11 bg-ink px-5 text-sm text-background transition-opacity hover:opacity-85"
            >
              {t.accept}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
