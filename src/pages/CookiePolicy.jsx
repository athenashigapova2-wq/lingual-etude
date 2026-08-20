import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function CookiePolicy() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Cookie Policy" updated="Last updated: August 20, 2026">
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
            We use strictly necessary first-party cookies and local storage:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>authentication and session data that keeps you signed in to your account;</li>
            <li>preference data that supports the selected interface language;</li>
            <li>a local record of the choice made in the cookie notice.</li>
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
            On your first visit, a notice lets you agree to or decline the use of
            cookies and similar storage. If you decline, we do not enable optional
            cookies; strictly necessary session data may still be used when you
            choose to sign in. Your choice is stored locally on your device. You
            can clear the site's cookies and local storage in your browser to make
            a new choice. Clearing site data may also sign you out.
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
            <a href="mailto:amistudios.office@mail.ru" className="underline">amistudios.office@mail.ru</a>.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Использование cookie" updated="Обновлено: 20 августа 2026 года">
      <p>
        Настоящая политика описывает, как «Ami Studios» (далее - «мы»)
        использует cookie-файлы и похожие технологии на сайте amistudios.ru.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">Что такое cookie</h2>
        <p className="mt-3">
          Cookie - небольшие файлы, которые сохраняются на Вашем устройстве при
          посещении сайта, чтобы сайт работал корректно и запоминал Ваши
          настройки.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Зачем мы используем cookie</h2>
        <p className="mt-3">
          Мы используем строго необходимые cookie собственного сайта
          (first-party) и локальное хранилище:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>данные авторизации и сессии - сохраняют вход в аккаунт;</li>
          <li>данные предпочтений - поддерживают выбранный язык интерфейса;</li>
          <li>локальная запись о выборе, сделанном в уведомлении об использовании cookie.</li>
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
          При первом посещении уведомление позволяет согласиться или отказаться
          от использования cookie и похожих способов хранения данных. При
          отказе необязательные cookie не включаются; строго необходимые данные
          сессии могут использоваться, когда Вы самостоятельно входите в
          аккаунт. Выбор сохраняется локально на устройстве. Чтобы сделать новый
          выбор, удалите cookie и локальные данные сайта в настройках браузера.
          Это также может привести к выходу из аккаунта.
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
          <a href="mailto:amistudios.office@mail.ru" className="underline">amistudios.office@mail.ru</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
