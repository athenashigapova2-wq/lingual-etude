import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { PlayCircle, NotebookPen, CalendarDays } from 'lucide-react';

const NEXT_SESSION = {
  date: '20 июля, понедельник',
  time: '19:00',
  format: 'Персональное занятие',
  title: 'The Intimacy of Adverbs',
};

function ProgressRing({ value }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-36 w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="hsl(0 0% 7% / 0.08)" strokeWidth="2" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="hsl(222 48% 21%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-4xl text-ink">{value}%</span>
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">прогресс</span>
      </div>
    </div>
  );
}

export default function Overview() {
  const [stats, setStats] = useState({ total: 0, reviewed: 0, inReview: 0 });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const u = await base44.auth.me().catch(() => null);
        setUser(u);
        const [allHw, allLessons] = await Promise.all([
          base44.entities.Homework.list().catch(() => []),
          base44.entities.Lesson.list().catch(() => []),
        ]);
        const isAdmin = u?.role === 'admin';
        const hw = !isAdmin && u ? allHw.filter((h) => h.student_email === u.email) : allHw;
        const ls = !isAdmin && u ? allLessons.filter((l) => l.student_email === u.email) : allLessons;
        setStats({
          total: hw.length,
          reviewed: hw.filter((h) => h.status === 'reviewed').length,
          inReview: hw.filter((h) => h.status === 'in_review').length,
          lessons: ls.length,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const value = stats.total ? Math.round((stats.reviewed / stats.total) * 100) : 0;

  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">Личный кабинет</p>
        <h1 className="mt-3 font-heading text-4xl font-light text-ink md:text-5xl">
          С возвращением{user ? `, ${user.full_name || user.email}` : ''}.
        </h1>
      </header>

      {/* Now card */}
      <motion.section
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9 }}
        className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-ink p-8 text-background md:p-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-background/50">Сегодня · {NEXT_SESSION.time}</p>
        <h2 className="mt-4 font-heading text-3xl font-light italic md:text-5xl">{NEXT_SESSION.title}</h2>
        <p className="mt-3 text-background/60">{NEXT_SESSION.format} · {NEXT_SESSION.date}</p>
        <Link
          to="/dashboard/schedule"
          className="mt-8 inline-flex items-center gap-2 border border-background/30 px-5 py-2 text-sm transition-colors hover:bg-background hover:text-ink"
        >
          Открыть расписание
        </Link>
      </motion.section>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-foreground/10 bg-white p-8"
        >
          {loading ? (
            <div className="h-36 w-36 animate-pulse rounded-full bg-linen" />
          ) : (
            <ProgressRing value={value} />
          )}
        </motion.div>

        <QuickCard
          to="/dashboard/homework"
          icon={NotebookPen}
          label="Домашние задания"
          value={`${stats.inReview} на проверке`}
          delay={0.2}
        />
        <QuickCard
          to="/dashboard/lessons"
          icon={PlayCircle}
          label="Видео-уроки"
          value={`${stats.lessons ?? 0} в архиве`}
          delay={0.3}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Link
          to="/dashboard/homework"
          className="group rounded-2xl border border-foreground/10 bg-white p-8 transition-colors hover:bg-linen"
        >
          <NotebookPen className="h-5 w-5 text-gold" />
          <h3 className="mt-6 font-heading text-2xl text-ink">Домашние задания</h3>
          <p className="mt-2 text-foreground/60">Ваша практика и то, что вы уже раскрыли.</p>
        </Link>
        <Link
          to="/dashboard/schedule"
          className="group rounded-2xl border border-foreground/10 bg-white p-8 transition-colors hover:bg-linen"
        >
          <CalendarDays className="h-5 w-5 text-gold" />
          <h3 className="mt-6 font-heading text-2xl text-ink">Расписание</h3>
          <p className="mt-2 text-foreground/60">Ближайшие встречи и тихие напоминания.</p>
        </Link>
      </div>
    </div>
  );
}

function QuickCard({ to, icon: Icon, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(12px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay }}
    >
      <Link to={to} className="flex h-full flex-col justify-between rounded-2xl border border-foreground/10 bg-white p-8 transition-colors hover:bg-linen">
        <Icon className="h-5 w-5 text-gold" />
        <div className="mt-8">
          <div className="font-heading text-3xl text-ink">{value}</div>
          <div className="text-sm text-foreground/50">{label}</div>
        </div>
      </Link>
    </motion.div>
  );
}