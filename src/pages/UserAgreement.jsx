import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function UserAgreement() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="User Agreement" updated="Last updated: August 20, 2026">
        <p>
          This User Agreement governs access to and use of amistudios.ru, the
          Ami Studios website and learning dashboard. By using the website or
          creating an account, you confirm that you have read and accepted this
          Agreement.
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">1. The service</h2>
          <p className="mt-3">
            The website provides information about learning formats and gives
            registered students access to schedules, video lessons, homework,
            feedback, and other educational materials. The terms and price of
            paid lessons may be agreed separately with the student.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">2. User account</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>You must provide accurate information and keep it up to date.</li>
            <li>You are responsible for keeping your credentials confidential.</li>
            <li>You must notify us if you suspect unauthorised access to your account.</li>
            <li>You may not transfer your student account to another person without our consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">3. Acceptable use</h2>
          <p className="mt-3">
            You must not interfere with the website, attempt to bypass access
            controls, upload unlawful or malicious content, misuse another
            person’s data, or use learning materials for commercial distribution.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">4. Intellectual property</h2>
          <p className="mt-3">
            The website design, texts, videos, assignments, and other materials
            belong to Ami Studios or their respective rights holders. Students
            receive a limited, personal, non-transferable right to use materials
            for learning purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">5. Availability and liability</h2>
          <p className="mt-3">
            We aim to keep the website available and secure but cannot guarantee
            uninterrupted operation. We may temporarily restrict access for
            maintenance, security, or circumstances beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">6. Privacy</h2>
          <p className="mt-3">
            Personal data is processed in accordance with the{' '}
            <a href="/privacy-policy" className="underline">Privacy Policy</a> and the{' '}
            <a href="/personal-data-consent" className="underline">Consent to Personal Data Processing</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">7. Changes and termination</h2>
          <p className="mt-3">
            We may update this Agreement when the service or applicable
            requirements change. Access may be restricted if a user materially
            breaches this Agreement or threatens the security of the service.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Пользовательское соглашение" updated="Обновлено: 20 августа 2026 года">
      <p>
        Настоящее Пользовательское соглашение регулирует использование сайта
        amistudios.ru, публичных материалов Ami Studios и личного кабинета
        ученика. Используя сайт или создавая учётную запись, пользователь
        подтверждает, что ознакомился с Соглашением и принимает его условия.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">1. Возможности сервиса</h2>
        <p className="mt-3">
          Сайт содержит информацию о форматах обучения, а зарегистрированным
          ученикам предоставляет доступ к расписанию, видеоурокам, домашним
          заданиям, обратной связи и другим учебным материалам. Условия и
          стоимость платных занятий могут согласовываться с учеником отдельно.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">2. Учётная запись</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Пользователь предоставляет достоверные и актуальные сведения.</li>
          <li>Пользователь самостоятельно обеспечивает конфиденциальность данных для входа.</li>
          <li>О подозрении на несанкционированный доступ необходимо сообщить Ami Studios.</li>
          <li>Передача ученической учётной записи другому лицу без согласования не допускается.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">3. Допустимое использование</h2>
        <p className="mt-3">
          Запрещено нарушать работу сайта, обходить ограничения доступа,
          загружать незаконные или вредоносные материалы, неправомерно
          использовать чужие данные и распространять учебные материалы в
          коммерческих целях.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">4. Интеллектуальная собственность</h2>
        <p className="mt-3">
          Дизайн сайта, тексты, видео, задания и иные материалы принадлежат Ami
          Studios или соответствующим правообладателям. Ученику предоставляется
          ограниченное, личное и непередаваемое право использовать материалы в
          целях обучения.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">5. Доступность и ответственность</h2>
        <p className="mt-3">
          Мы стремимся поддерживать доступность и безопасность сайта, но не
          гарантируем его бесперебойную работу. Доступ может быть временно
          ограничен для технического обслуживания, обеспечения безопасности или
          по причинам, не зависящим от Ami Studios.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">6. Персональные данные</h2>
        <p className="mt-3">
          Персональные данные обрабатываются в соответствии с{' '}
          <a href="/privacy-policy" className="underline">Политикой конфиденциальности</a> и{' '}
          <a href="/personal-data-consent" className="underline">Согласием на обработку персональных данных</a>.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">7. Изменение условий и прекращение доступа</h2>
        <p className="mt-3">
          Соглашение может обновляться при изменении сервиса или применимых
          требований. Доступ пользователя может быть ограничен при существенном
          нарушении условий Соглашения или создании угрозы безопасности сервиса.
        </p>
      </section>
    </LegalLayout>
  );
}
