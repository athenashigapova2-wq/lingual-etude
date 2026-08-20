# Lingual Étude — Ami Studio

Сайт и личный кабинет онлайн-школы английского языка Ami Studio. Проект объединяет публичный лендинг, запись на занятия, бесплатные материалы и закрытое пространство ученика с уроками и домашними заданиями.

Рабочий сайт: [amistudios.ru](https://amistudios.ru)

![Главная страница Ami Studio](docs/screenshots/01-manifest.webp)

## Возможности

- двуязычный лендинг на русском и английском;
- описание форматов обучения, отзывы, FAQ и форма заявки;
- регистрация, вход по email и Google, восстановление пароля;
- личный кабинет с расписанием, видеоуроками и домашними заданиями;
- административный раздел для управления учениками и материалами;
- загрузка файлов в Supabase Storage;
- адаптивная вёрстка и анимации интерфейса.

## Интерфейс

### Манифест

![Манифест Ami Studio](docs/screenshots/01-manifest.webp)

### О преподавателе

![Раздел о преподавателе](docs/screenshots/02-about-teacher.webp)

### Форматы обучения

![Карточки форматов обучения](docs/screenshots/03-learning-formats.webp)

### КСО и устойчивое развитие ЦОД

![Отраслевая программа по КСО и устойчивому развитию ЦОД](docs/screenshots/04-data-centre-sustainability.webp)

### Отзывы

![Раздел с отзывами учеников](docs/screenshots/05-reviews.webp)

### Вопросы и ответы

![Раздел с вопросами и ответами](docs/screenshots/06-faq.webp)

### Запись на занятие

![Форма записи на занятие](docs/screenshots/07-booking.webp)

## Стек

- React 18 и React Router;
- Vite 6;
- Tailwind CSS и Radix UI;
- Supabase: Authentication, Database и Storage;
- TanStack Query;
- Framer Motion;
- GitHub Pages и GitHub Actions.

## Быстрый старт

Понадобятся Node.js 20+ и npm.

```bash
git clone https://github.com/athenashigapova2-wq/lingual-etude.git
cd lingual-etude
npm ci
cp .env.example .env.local
npm run dev
```

Заполните `.env.local` данными своего проекта Supabase:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

После запуска приложение будет доступно по адресу, который выведет Vite (обычно `http://localhost:5173`).

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запустить локальный сервер разработки |
| `npm run build` | Собрать production-версию в `dist/` |
| `npm run preview` | Локально открыть production-сборку |
| `npm run lint` | Проверить код ESLint |
| `npm run lint:fix` | Исправить доступные замечания ESLint |
| `npm run typecheck` | Проверить типы по `jsconfig.json` |

## Supabase

Приложение ожидает настроенный проект Supabase со следующими ресурсами:

- таблицы `profiles`, `leads`, `lessons` и `homeworks`;
- публичный Storage bucket `uploads`;
- email/password-аутентификация;
- OAuth-провайдер Google, если нужен вход через Google.

SQL-миграции пока не включены в репозиторий, поэтому структуру таблиц и Row Level Security необходимо настроить в Supabase отдельно. Не используйте service role key во фронтенде: доступ к данным должен ограничиваться политиками RLS.

## Структура проекта

```text
src/
├── api/appApi.js          # Supabase-клиент и операции приложения
├── components/            # Общие, лендинговые и UI-компоненты
├── lib/                   # Контексты, хуки и вспомогательный код
├── pages/                 # Публичные страницы и авторизация
└── pages/dashboard/       # Личный кабинет и админ-раздел
public/
├── media/                 # Изображения интерфейса
├── self-study-map.pdf     # Бесплатный материал
└── 404.html               # Поддержка SPA-маршрутов на GitHub Pages
```

## Деплой

Workflow `.github/workflows/deploy.yml` собирает проект и публикует `dist/` в GitHub Pages после push в `main`. Перед первым деплоем добавьте в настройках репозитория Actions secrets:

- `VITE_SUPABASE_URL`;
- `VITE_SUPABASE_ANON_KEY`.

Домен задаётся файлом `public/CNAME`. Для корректной работы вложенных маршрутов используется редирект из `public/404.html`.

## Работа с конфигурацией

- не коммитьте `.env` и `.env.local`;
- храните только публичный anon key Supabase во фронтенд-переменных;
- после изменения зависимостей обновляйте `package-lock.json`;
- перед отправкой изменений запускайте `npm run lint`, `npm run typecheck` и `npm run build`.
