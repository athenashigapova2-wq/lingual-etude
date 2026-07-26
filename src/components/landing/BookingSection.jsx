import { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLang } from '@/lib/LanguageContext';

const T = {
  ru: {
    label: 'Запись на занятие',
    h2: 'Оставьте тихую заявку — я отвечу лично.',
    p: 'Без автоматических писем и шаблонных ответов. Напишите пару слов о себе и о том, почему Вам это важно.',
    doneH: 'Спасибо.',
    doneP: 'Я получила Вашу заявку и отвечу в ближайшее время.',
    name: 'Имя',
    namePh: 'Как к Вам обращаться',
    contact: 'Контакт',
    contactPh: 'Email или Telegram',
    format: 'Формат',
    fPersonal: 'Персональные занятия',
    fStudio: 'Ami Studio',
    comment: 'Пара слов о себе',
    commentPh: 'Почему Вам это важно',
    sending: 'Отправляю…',
    submit: 'Записаться',
  },
  en: {
    label: 'Book a session',
    h2: 'Leave a quiet request — I’ll reply personally.',
    p: 'No automated emails or template replies. Write a few words about yourself and why this matters to you.',
    doneH: 'Thank you.',
    doneP: 'I’ve received your request and will reply soon.',
    name: 'Name',
    namePh: 'What should I call you',
    contact: 'Contact',
    contactPh: 'Email or Telegram',
    format: 'Format',
    fPersonal: 'Personal lessons',
    fStudio: 'Ami Studio',
    comment: 'A few words about yourself',
    commentPh: 'Why this matters to you',
    sending: 'Sending…',
    submit: 'Book',
  },
};

export default function BookingSection() {
  const { lang } = useLang();
  const t = T[lang];
  const [form, setForm] = useState({ name: '', contact: '', format: 'personal', comment: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.Booking.create({
        name: form.name,
        contact: form.contact,
        format: form.format,
        comment: form.comment,
      });
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="bg-alabaster px-[8vw] py-[14vh]">
      <div className="mx-auto grid max-w-[1300px] gap-14 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
          <h2 className="font-heading text-4xl font-light leading-tight text-ink md:text-6xl text-balance">
            {t.h2}
          </h2>
          <p className="mt-8 max-w-md text-lg leading-[1.7] text-foreground/70">{t.p}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {done ? (
            <div className="border border-foreground/10 bg-white p-10 text-center">
              <h3 className="font-heading text-3xl italic text-ink">{t.doneH}</h3>
              <p className="mt-4 text-foreground/70">{t.doneP}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6 border border-foreground/10 bg-white p-8 md:p-10">
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12"
                  placeholder={t.namePh}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">{t.contact}</Label>
                <Input
                  id="contact"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="h-12"
                  placeholder={t.contactPh}
                />
              </div>
              <div className="space-y-2">
                <Label>{t.format}</Label>
                <Select value={form.format} onValueChange={(v) => setForm({ ...form, format: v })}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">{t.fPersonal}</SelectItem>
                    <SelectItem value="ami_studio">{t.fStudio}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comment">{t.comment}</Label>
                <Textarea
                  id="comment"
                  rows={4}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder={t.commentPh}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full bg-ink text-background hover:bg-ink/85"
              >
                {loading ? t.sending : t.submit}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}