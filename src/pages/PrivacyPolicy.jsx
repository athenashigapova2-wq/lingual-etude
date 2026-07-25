import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function PrivacyPolicy() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Privacy Policy" updated="Last updated: July 2026">
        <p>
          This policy describes what personal data the ami online English school
          ("we", "ami") collects through amistudios.ru, how it is used, where it is
          stored, and what rights you have regarding it.
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">What we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Name and contact details (email, messenger handle) you provide when booking a trial lesson or registering an account.</li>
            <li>Account credentials (email and a securely hashed password) if you create an account.</li>
            <li>Homework submissions, files you upload, and your lesson progress.</li>
            <li>Basic technical data (IP address, browser type) collected automatically by our hosting and security providers for the purposes of running and protecting the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">How we use it</h2>
          <p className="mt-3">
            We use your data to provide lessons and track your progress, to
            communicate with you about bookings and homework, and to maintain the
            security and functioning of the site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Where it is stored</h2>
          <p className="mt-3">
            Account data, lesson records and homework are stored using Supabase, a
            third-party database provider. Emails are sent through Resend. These
            providers may store data outside of your country of residence.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Your rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your personal
            data at any time by writing to us at{' '}
            <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">Contact</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{' '}
            <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Политика конфиденциальности" updated="Обновлено: июль 2026">
      <p>
        Настоящая политика описывает, какие персональные данные онлайн-школа
        английского языка «ami» (далее — «мы») собирает через сайт amistudios.ru,
        как они используются, где хранятся и какие права есть у пользователя в
        отношении своих данных.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">Какие данные мы собираем</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Имя и контактные данные (email, мессенджер), которые вы указываете при записи на пробное занятие или регистрации аккаунта.</li>
          <li>Данные учётной записи — email и надёжно захешированный пароль, если вы регистрируетесь на сайте.</li>
          <li>Домашние задания, загружаемые вами файлы и данные о прогрессе занятий.</li>
          <li>Базовые технические данные (IP-адрес, тип браузера), которые автоматически обрабатываются нашими хостинг- и security-провайдерами для работы и защиты сайта.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Как мы используем данные</h2>
        <p className="mt-3">
          Данные используются для проведения занятий и отслеживания прогресса,
          связи с вами по вопросам записи и домашних заданий, а также для
          обеспечения безопасности и работоспособности сайта.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Где хранятся данные</h2>
        <p className="mt-3">
          Данные учётной записи, информация о занятиях и домашние задания
          хранятся с использованием стороннего сервиса баз данных Supabase.
          Письма отправляются через сервис Resend. Обращаем внимание, что серверы
          этих провайдеров могут располагаться за пределами Российской Федерации.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Ваши права</h2>
        <p className="mt-3">
          Вы можете в любой момент запросить доступ к своим персональным данным,
          их исправление или удаление, написав нам на{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">Контакты</h2>
        <p className="mt-3">
          По вопросам, связанным с этой политикой, пишите на{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
