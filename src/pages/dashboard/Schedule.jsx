import { motion } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';

const SCHEDULE = [
  {
    date: '2026-07-20',
    dateLabel: '20 июля',
    day: 'Понедельник',
    time: '19:00',
    format: 'Персональное',
    title: 'The Intimacy of Adverbs',
  },
  {
    date: '2026-07-22',
    dateLabel: '22 июля',
    day: 'Среда',
    time: '18:00',
    format: 'Ami Studio',
    title: 'Group practice: Vulnerability in tone',
  },
  {
    date: '2026-07-25',
    dateLabel: '25 июля',
    day: 'Суббота',
    time: '19:00',
    format: 'Персональное',
    title: 'Speaking without a shield',
  },
  {
    date: '2026-07-29',
    dateLabel: '29 июля',
    day: 'Среда',
    time: '18:00',
    format: 'Ami Studio',
    title: 'The grammar of honesty',
  },
];

const pad = (n) => String(n).padStart(2, '0');
const fmtLocal = (dt) => `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`;

const gcalUrl = (s) => {
  const [y, m, d] = s.date.split('-').map(Number);
  const [hh, mm] = s.time.split(':').map(Number);
  const start = new Date(y, m - 1, d, hh, mm);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const kind = s.format === 'Персональное' ? 'Персональное занятие' : 'Ami Studio';
  const text = encodeURIComponent(`${s.title} — ${kind}`);
  const details = encodeURIComponent(`${kind} · ami`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${fmtLocal(start)}/${fmtLocal(end)}&details=${details}`;
};

export default function Schedule() {
  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">Время</p>
        <h1 className="mt-3 font-heading text-4xl font-light text-ink md:text-5xl">Расписание</h1>
      </header>

      <div className="space-y-4">
        {SCHEDULE.map((s, i) => (
          <motion.article
            key={s.date}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="grid grid-cols-2 items-center gap-4 rounded-2xl border border-foreground/10 bg-white px-6 py-7 md:grid-cols-4 md:px-10"
          >
            <div>
              <div className="font-heading text-3xl text-ink">{s.dateLabel}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/40">{s.day}</div>
            </div>
            <div className="font-heading text-2xl text-gold">{s.time}</div>
            <div className="text-sm text-foreground/60">{s.format}</div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <h3 className="font-heading text-lg italic text-ink">{s.title}</h3>
              <a
                href={gcalUrl(s)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:bg-ink hover:text-background"
              >
                <CalendarPlus className="h-4 w-4" /> В Google Календарь
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}