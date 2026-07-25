import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function CookiePolicy() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Cookie Policy" updated="Last updated: July 2026">
        <p>
          This site uses a minimal set of cookies and similar technologies needed
          to keep you signed in and remember your language preference.
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">What we use cookies for</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Keeping you signed in to your account between visits (authentication session).</li>
            <li>Remembering your selected interface language (Russian/English).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">What we don't use</h2>
          <p className="mt-3">
            We do not use advertising or cross-site tracking cookies, and we do
            not sell any data to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Managing cookies</h2>
          <p className="mt-3">
            You can clear or block cookies at any time through your browser
            settings. Doing so may sign you out of your account.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Использование cookie" updated="Обновлено: июль 2026">
      <p>
        Сайт использует минимальный набор cookie-файлов и похожих технологий,
        необходимых для того, чтобы сохранять вашу авторизацию и выбранный язык
        интерфейса.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">Для чего мы используем cookie</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Чтобы сохранять вашу авторизацию между визитами на сайт (сессия входа в аккаунт).</li>
          <li>Чтобы запоминать выбранный язык интерфейса (русский/английский).</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Что мы не используем</h2>
        <p className="mt-3">
          Мы не используем рекламные cookie и технологии межсайтового
          отслеживания, а также не передаём и не продаём данные третьим лицам.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Управление cookie</h2>
        <p className="mt-3">
          Вы можете в любой момент очистить или заблокировать cookie через
          настройки браузера. Это может привести к выходу из аккаунта на сайте.
        </p>
      </section>
    </LegalLayout>
  );
}
