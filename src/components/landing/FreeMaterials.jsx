import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { appApi } from '@/api/appApi';
import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    label: 'Бесплатные материалы',
    h2: 'Карта самостоятельной работы по английскому',
    p: 'Собранный PDF: структура еженедельной практики, список ресурсов для чтения и аудирования, разбор частых ошибок на уровне B2–C1 и шаблон для ведения словаря. Оставьте контакт — пришлю ссылку на скачивание.',
    nameLabel: 'Имя',
    contactLabel: 'Email',
    namePh: 'Как Вас зовут',
    contactPh: 'you@mail.com',
    btn: 'Получить бесплатно',
  },
  en: {
    label: 'Free materials',
    h2: 'A self-study map for English',
    p: 'A collected PDF: a weekly practice structure, a reading and listening resource list, a breakdown of common B2–C1 mistakes, and a vocabulary journal template. Leave your contact — I’ll send the download link.',
    nameLabel: 'Name',
    contactLabel: 'Email',
    namePh: 'What’s your name',
    contactPh: 'you@mail.com',
    btn: 'Get it free',
  },
};

export default function FreeMaterials() {
  const { lang } = useLang();
  const t = T[lang];
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setLoading(true);
    try {
      await appApi.entities.Lead.create({
        name: name.trim(),
        contact: contact.trim(),
        source: 'free_materials',
      });
      nav('/thank-you');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="free" className="bg-alabaster px-[8vw] py-[14vh]">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
          <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-[0.01em] text-ink md:text-5xl text-balance">
            {t.h2}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-foreground/70">{t.p}</p>

          <form
            onSubmit={submit}
            className="mt-12 grid gap-6 border-t border-foreground/10 pt-10 md:grid-cols-[1fr_1fr_auto] md:items-end md:gap-8"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/40">{t.nameLabel}</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePh}
                className="mt-2 w-full border-b border-foreground/25 bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-ink"
                required
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/40">{t.contactLabel}</label>
              <input
                type="email"
                autoComplete="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={t.contactPh}
                className="mt-2 w-full border-b border-foreground/25 bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-ink"
                required
              />
            </div>
            <button type="submit" disabled={loading} className="pill-btn md:min-w-[200px] disabled:opacity-50">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : t.btn}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
