import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function PrivacyPolicy() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Privacy Policy" updated="Last updated: July 26, 2026">
        <p>
          This Privacy Notice for Ami Studios ("we", "us", "our") describes how and
          why we process your personal information when you use our services
          ("Services"), including when you visit amistudios.ru, register an
          account, book a lesson, or otherwise contact us.
        </p>
        <p>
          If you do not agree with this notice, please do not use our Services.
          Questions or concerns can be sent to{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">1. What information do we collect</h2>
          <p className="mt-3">We collect personal information you voluntarily provide to us, which may include:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>name and contact details (email, messenger handle);</li>
            <li>account credentials (email and a securely hashed password);</li>
            <li>homework submissions, uploaded files, and lesson progress;</li>
            <li>if you sign in with Google, basic profile information (name, email, profile picture) shared with us by Google.</li>
          </ul>
          <p className="mt-3">We do not process sensitive categories of information (health, religion, ethnicity, etc.), and we do not collect information about you from third parties other than what Google shares when you choose to sign in with it.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">2. How we process your information</h2>
          <p className="mt-3">We process your information to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>create and manage your account and authenticate you;</li>
            <li>deliver lessons, homework, and track your progress;</li>
            <li>communicate with you about bookings, homework, and account matters;</li>
            <li>maintain the security and proper functioning of the Services;</li>
            <li>comply with legal obligations, where applicable.</li>
          </ul>
          <p className="mt-3">
            We do not use your information for targeted advertising, and we do not
            sell it to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">3. When and with whom we share your information</h2>
          <p className="mt-3">We share information only with the service providers necessary to run the Services:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>Supabase</strong> — stores your account data, lesson records, and homework;</li>
            <li><strong>Resend</strong> — delivers account and notification emails on our behalf;</li>
            <li><strong>Google</strong> — processes sign-in if you choose "Continue with Google".</li>
          </ul>
          <p className="mt-3">
            These providers may store data outside of your country of residence.
            We do not share your information for advertising purposes and we are
            not currently part of any business transfer, merger, or acquisition.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">4. Cookies and similar technologies</h2>
          <p className="mt-3">
            We use a minimal set of cookies needed to keep you signed in and
            remember your language preference. Details are available in our{' '}
            <a href="/cookie-policy" className="underline">Cookie Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">5. Do we use AI-based products</h2>
          <p className="mt-3">
            No. The Services do not currently include AI-powered features, and
            your data is not processed by third-party AI providers.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">6. How we handle social logins</h2>
          <p className="mt-3">
            If you register or sign in using Google, we receive basic profile
            information from Google (name, email, profile picture). We use this
            information only to create and manage your account. We do not control
            Google's own use of your data — please review Google's privacy policy
            for that.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">7. How long we keep your information</h2>
          <p className="mt-3">
            We keep your personal information for as long as you have an account
            with us. If you ask us to delete your account, we will delete or
            anonymise your data, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">8. How we keep your information safe</h2>
          <p className="mt-3">
            We rely on reasonable technical and organisational measures (including
            encrypted storage and access controls provided by Supabase) to protect
            your information. No method of transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">9. Your privacy rights</h2>
          <p className="mt-3">
            You may at any time request access to, correction of, or deletion of
            your personal data, or withdraw any consent you've given, by
            contacting us at{' '}
            <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
            Upon request to delete your account, we will remove your data from our
            active systems, except where we must retain some information to
            comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">10. Do-Not-Track signals</h2>
          <p className="mt-3">
            There is currently no uniform standard for DNT signals, so our
            Services do not respond to them at this time.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">11. Updates to this notice</h2>
          <p className="mt-3">
            We may update this Privacy Notice from time to time. The "Last
            updated" date at the top reflects the latest revision.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">12. How to contact us</h2>
          <p className="mt-3">
            Questions about this notice can be sent to{' '}
            <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>{' '}
            or via Telegram{' '}
            <a href="https://t.me/ami_shig" className="underline">@ami_shig</a>.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Политика конфиденциальности" updated="Обновлено: 26 июля 2026 г.">
      <p>
        Настоящая политика описывает, как и почему онлайн-школа английского
        языка «Ami Studios» (далее — «мы») обрабатывает Ваши персональные
        данные при использовании сайта amistudios.ru — включая регистрацию
        аккаунта, запись на занятие или обращение к нам любым другим способом.
      </p>
      <p>
        Если Вы не согласны с этой политикой, пожалуйста, не используйте
        сайт. По вопросам пишите на{' '}
        <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">1. Какие данные мы собираем</h2>
        <p className="mt-3">Мы собираем персональные данные, которые Вы добровольно предоставляете нам:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>имя и контактные данные (email, мессенджер);</li>
          <li>данные учётной записи — email и надёжно захешированный пароль;</li>
          <li>домашние задания, загружаемые файлы и данные о прогрессе занятий;</li>
          <li>при входе через Google — базовые данные профиля (имя, email, фото), которые передаёт нам Google.</li>
        </ul>
        <p className="mt-3">Мы не обрабатываем чувствительные категории данных (о здоровье, религии, этнической принадлежности и т. п.) и не собираем данные о Вас из сторонних источников, кроме тех, что передаёт Google при входе через него.</p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">2. Как мы обрабатываем данные</h2>
        <p className="mt-3">Данные используются для того, чтобы:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>создать и вести Вашу учётную запись, авторизовать Вас;</li>
          <li>проводить занятия, домашние задания и отслеживать прогресс;</li>
          <li>связываться с Вами по вопросам записи, ДЗ и аккаунта;</li>
          <li>обеспечивать безопасность и корректную работу сайта;</li>
          <li>соблюдать требования законодательства, если применимо.</li>
        </ul>
        <p className="mt-3">
          Мы не используем Ваши данные для таргетированной рекламы и не
          продаём их третьим лицам.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">3. С кем мы делимся данными</h2>
        <p className="mt-3">Данные передаются только сервисам, необходимым для работы сайта:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Supabase</strong> — хранит данные учётной записи, занятий и домашних заданий;</li>
          <li><strong>Resend</strong> — отправляет письма от нашего имени (уведомления, подтверждения);</li>
          <li><strong>Google</strong> — обрабатывает вход, если Вы выбираете «Войти через Google».</li>
        </ul>
        <p className="mt-3">
          Обращаем внимание, что серверы этих сервисов могут находиться за
          пределами страны Вашего проживания. Мы не передаём данные в
          рекламных целях и в настоящий момент не участвуем ни в каких
          сделках по продаже или слиянию бизнеса.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">4. Cookie и похожие технологии</h2>
        <p className="mt-3">
          Мы используем минимальный набор cookie — для сохранения авторизации
          и выбранного языка интерфейса. Подробности — в{' '}
          <a href="/cookie-policy" className="underline">Политике использования cookie</a>.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">5. Используем ли мы AI-продукты</h2>
        <p className="mt-3">
          Нет. Сайт в настоящий момент не использует функции на основе
          искусственного интеллекта, и Ваши данные не передаются сторонним
          AI-провайдерам.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">6. Вход через социальные сети</h2>
        <p className="mt-3">
          При регистрации или входе через Google мы получаем от Google
          базовые данные профиля (имя, email, фото). Эти данные используются
          только для создания и ведения Вашей учётной записи. Мы не
          контролируем, как Google использует Ваши данные самостоятельно —
          ознакомьтесь с политикой конфиденциальности Google отдельно.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">7. Сколько мы храним данные</h2>
        <p className="mt-3">
          Данные хранятся, пока у Вас есть аккаунт на сайте. При запросе на
          удаление аккаунта мы удалим или обезличим Ваши данные, кроме
          случаев, когда их хранение требуется по закону.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">8. Как мы защищаем данные</h2>
        <p className="mt-3">
          Мы применяем разумные технические и организационные меры защиты
          (включая шифрованное хранение и контроль доступа со стороны
          Supabase). Ни один способ передачи или хранения данных не может
          быть гарантированно защищён на 100%.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">9. Ваши права</h2>
        <p className="mt-3">
          Вы можете в любой момент запросить доступ к своим данным, их
          исправление, удаление или отозвать ранее данное согласие, написав
          на{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>.
          При запросе на удаление аккаунта мы удалим Ваши данные из активных
          систем, за исключением случаев, когда их хранение необходимо для
          соблюдения требований закона.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">10. Сигналы Do-Not-Track</h2>
        <p className="mt-3">
          Единого стандарта обработки сигналов Do-Not-Track пока не
          существует, поэтому сайт на них не реагирует.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">11. Изменения политики</h2>
        <p className="mt-3">
          Мы можем время от времени обновлять эту политику. Дата «Обновлено»
          в начале страницы отражает актуальную версию.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">12. Как с нами связаться</h2>
        <p className="mt-3">
          По вопросам, связанным с этой политикой, пишите на{' '}
          <a href="mailto:amina.shigapova.06@mail.ru" className="underline">amina.shigapova.06@mail.ru</a>{' '}
          или в Telegram{' '}
          <a href="https://t.me/ami_shig" className="underline">@ami_shig</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
