import LegalLayout from '@/components/legal/LegalLayout';
import { useLang } from '@/lib/LanguageContext';

export default function PersonalDataConsent() {
  const { lang } = useLang();

  if (lang === 'en') {
    return (
      <LegalLayout title="Consent to Personal Data Processing" updated="Last updated: August 20, 2026">
        <p>
          By submitting a form, creating an account, or otherwise voluntarily
          providing information on amistudios.ru, I freely, specifically,
          knowingly, and unambiguously consent to the processing of my personal
          data by Ami Studios (the “Operator”).
        </p>

        <section>
          <h2 className="font-heading text-xl text-ink">1. Personal data</h2>
          <p className="mt-3">This consent may cover the following information:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>name, email address, and contact details voluntarily provided by me;</li>
            <li>account and profile information;</li>
            <li>lesson records, homework, uploaded files, feedback, and learning progress;</li>
            <li>technical and session data required for the website and account to operate.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">2. Purposes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>creating and maintaining my account;</li>
            <li>providing educational services and access to learning materials;</li>
            <li>reviewing homework and recording learning progress;</li>
            <li>responding to enquiries and sending service notifications;</li>
            <li>maintaining the security and proper operation of the website.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">3. Processing activities</h2>
          <p className="mt-3">
            The Operator may collect, record, organise, store, update, retrieve,
            use, transfer to contracted service providers where necessary,
            restrict, delete, and destroy personal data using automated and
            non-automated means.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">4. Service providers</h2>
          <p className="mt-3">
            Data may be processed using Supabase and Google services to the
            extent necessary for authentication, storage, and optional Google
            sign-in. Further details are set out in the{' '}
            <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-ink">5. Duration and withdrawal</h2>
          <p className="mt-3">
            This consent remains valid while my account is active or until the
            purposes described above are fulfilled. I may withdraw it at any
            time by emailing{' '}
            <a href="mailto:amistudios.office@mail.ru" className="underline">amistudios.office@mail.ru</a>.
            Withdrawal does not affect processing carried out before the request
            was received or processing otherwise permitted by law.
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Согласие на обработку персональных данных" updated="Обновлено: 20 августа 2026 года">
      <p>
        Отправляя форму, создавая учётную запись или иным образом добровольно
        предоставляя сведения на сайте amistudios.ru, я свободно, своей волей и
        в своём интересе даю конкретное, предметное, информированное,
        сознательное и однозначное согласие Ami Studios (далее - «Оператор») на
        обработку моих персональных данных.
      </p>

      <section>
        <h2 className="font-heading text-xl text-ink">1. Персональные данные</h2>
        <p className="mt-3">Согласие может распространяться на следующие сведения:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>имя, адрес электронной почты и добровольно предоставленные контактные данные;</li>
          <li>данные учётной записи и профиля;</li>
          <li>сведения о занятиях, домашние задания, загруженные файлы, обратную связь и прогресс обучения;</li>
          <li>технические данные и данные сессии, необходимые для работы сайта и личного кабинета.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">2. Цели обработки</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>создание и ведение учётной записи;</li>
          <li>оказание образовательных услуг и предоставление учебных материалов;</li>
          <li>проверка домашних заданий и фиксация прогресса обучения;</li>
          <li>ответы на обращения и направление сервисных уведомлений;</li>
          <li>обеспечение безопасности и корректной работы сайта.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">3. Действия с данными</h2>
        <p className="mt-3">
          Оператор вправе осуществлять сбор, запись, систематизацию, накопление,
          хранение, уточнение, извлечение, использование, передачу привлечённым
          сервисам в необходимом объёме, блокирование, удаление и уничтожение
          персональных данных с использованием средств автоматизации или без них.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">4. Привлечённые сервисы</h2>
        <p className="mt-3">
          Для авторизации, хранения данных и выбранного пользователем входа
          через Google могут использоваться сервисы Supabase и Google.
          Подробная информация приведена в{' '}
          <a href="/privacy-policy" className="underline">Политике конфиденциальности</a>.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl text-ink">5. Срок действия и отзыв</h2>
        <p className="mt-3">
          Согласие действует, пока активна моя учётная запись или пока не
          достигнуты указанные цели обработки. Я могу отозвать согласие в любой
          момент, направив письмо на{' '}
          <a href="mailto:amistudios.office@mail.ru" className="underline">amistudios.office@mail.ru</a>.
          Отзыв не влияет на обработку, выполненную до получения требования, и
          на обработку, допустимую без согласия в соответствии с законом.
        </p>
      </section>
    </LegalLayout>
  );
}
