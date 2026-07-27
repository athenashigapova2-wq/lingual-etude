import { Camera } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

// ============================================================
// Замените на свои фото: положите файлы в /public/gallery/
// (например, public/gallery/1.jpg) и впишите пути сюда.
// Пункты без фото (photo: null) показывают плейсхолдер —
// просто добавьте путь, чтобы плейсхолдер сменился на фото.
// ============================================================
const PHOTOS = [
  { photo: null, big: true },
  { photo: null, big: false },
  { photo: null, big: false },
  { photo: null, big: false },
  { photo: null, big: true },
  { photo: null, big: false },
];

const T = {
  ru: {
    label: 'Как я веду занятия',
    h2: 'Немного из жизни занятий',
    p: 'Так выглядят наши уроки и материалы — фото с занятий, скриншоты рабочих досок и черновиков.',
    placeholder: 'Фото с занятия',
  },
  en: {
    label: 'How I teach',
    h2: 'A glimpse into our lessons',
    p: 'This is what our lessons and materials actually look like — photos from classes, boards, and drafts.',
    placeholder: 'Lesson photo',
  },
};

export default function HowITeach() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section className="relative bg-alabaster py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-[6vw]">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
        <h2 className="mt-5 max-w-2xl font-heading text-4xl font-medium leading-[1.1] text-ink md:text-6xl text-balance">
          {t.h2}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-[1.7] text-foreground/70">{t.p}</p>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {PHOTOS.map((item, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl bg-ink/5 ${
                item.big ? 'col-span-2 aspect-[4/3] md:aspect-[16/10]' : 'aspect-square'
              }`}
            >
              {item.photo ? (
                <img src={item.photo} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-ink/15 text-foreground/35">
                  <Camera className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                  <span className="text-[11px] uppercase tracking-[0.2em]">{t.placeholder}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
