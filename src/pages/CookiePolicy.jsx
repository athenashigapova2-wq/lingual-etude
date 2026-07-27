import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function CookiePolicy() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Cookie Policy" updated="Last updated: July 26, 2026">
        <p>
          This Cookie Policy explains how Ami Studios ("we", "us", "our") uses
          cookies and similar technologies when you visit amistudios.ru.
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">What are cookies</h2>
          <p className="mt-3">
            Cookies are small data files placed on your device when you visit a
            website, used to make the site work and to remember your preferences.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Why we use cookies</h2>
          <p className="mt-3">
            We use only strictly necessary, first-party cookies:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>an authentication cookie that keeps you signed in to your account;</li>
            <li>a preference cookie that remembers your selected interface language (Russian/English).</li>
          </ul>
          <p className="mt-3">
            We do not use advertising cookies, cross-site tracking, analytics
            trackers, or third-party marketing pixels. We do not serve targeted
            advertising and we do not use Flash cookies (Local Shared Objects).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">How you can control cookies</h2>
          <p className="mt-3">
            Since the cookies we use are strictly necessary, there is no cookie
            preference banner on the site. You can still block or delete cookies
            at any time through your browser settings, though this will sign you
            out of your account and reset your language preference.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Other tracking technologies</h2>
          <p className="mt-3">
            We do not use web beacons, tracking pixels, or similar technologies on
            the site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Updates to this policy</h2>
          <p className="mt-3">
            We may update this Cookie Policy from time to time. The "Last
            updated" date above reflects the latest revision.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Contact</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{' '}
            <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>{' '}
            or via Telegram{' '}
            <a href="https://t.me/amistudios" className="underline">@amistudios</a>.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Использование cookie" updated="Обновлено: 26 июля 2026 г.">
      <p>
        Настоящая политика описывает, как «Ami Studios» (далее — «мы»)
        использует cookie-файлы и похожие технологии на сайте amistudios.ru.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">Что такое cookie</h2>
        <p className="mt-3">
          Cookie — небольшие файлы, которые сохраняются на Вашем устройстве при
          посещении сайта, чтобы сайт работал корректно и запоминал Ваши
          настройки.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Зачем мы используем cookie</h2>
        <p className="mt-3">
          Мы используем только строго необходимые cookie собственного сайта
          (first-party):
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>cookie авторизации — сохраняет Вашу сессию входа в аккаунт;</li>
          <li>cookie предпочтений — запоминает выбранный язык интерфейса (русский/английский).</li>
        </ul>
        <p className="mt-3">
          Мы не используем рекламные cookie, межсайтовое отслеживание,
          аналитические трекеры или сторонние маркетинговые пиксели. Мы не
          показываем таргетированную рекламу и не используем Flash-cookie
          (Local Shared Objects).
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Как управлять cookie</h2>
        <p className="mt-3">
          Поскольку используемые нами cookie строго необходимы для работы
          сайта, отдельного баннера с настройками cookie на сайте нет. Вы
          всегда можете заблокировать или удалить cookie через настройки
          браузера — это приведёт к выходу из аккаунта и сбросу выбранного
          языка.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Другие технологии отслеживания</h2>
        <p className="mt-3">
          Мы не используем веб-маяки, трекинг-пиксели и похожие технологии на
          сайте.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Изменения политики</h2>
        <p className="mt-3">
          Мы можем время от времени обновлять эту политику. Дата «Обновлено» в
          начале страницы отражает актуальную версию.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Контакты</h2>
        <p className="mt-3">
          По вопросам, связанным с этой политикой, пишите на{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>{' '}
          или в Telegram{' '}
          <a href="https://t.me/amistudios" className="underline">@amistudios</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
